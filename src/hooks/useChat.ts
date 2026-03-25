"use client";

import { useState, useCallback, useEffect } from "react";
import { sendChatMessage, type ChatMessage } from "@/lib/chat";
import { getFingerprint } from "@/lib/fingerprint";
import {
  getRemainingMessages,
  incrementMessageCount,
  isRateLimited,
} from "@/lib/rateLimit";
import { trackChatMessage } from "@/lib/analytics";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [remaining, setRemaining] = useState(10);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setRemaining(getRemainingMessages());
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      if (isRateLimited()) {
        setError("You've reached the daily message limit. Please try again tomorrow.");
        return;
      }

      setError(null);
      const userMessage: ChatMessage = { role: "user", content: content.trim() };
      const updatedMessages = [...messages, userMessage];

      setMessages([...updatedMessages, { role: "assistant", content: "" }]);
      setIsLoading(true);

      try {
        const fingerprint = await getFingerprint();

        await sendChatMessage(updatedMessages, fingerprint, (chunk) => {
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last.role === "assistant") {
              updated[updated.length - 1] = {
                ...last,
                content: last.content + chunk,
              };
            }
            return updated;
          });
        });

        incrementMessageCount();
        setRemaining(getRemainingMessages());
        trackChatMessage();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
        setMessages((prev) => prev.slice(0, -1));
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  return { messages, isLoading, remaining, error, sendMessage };
}

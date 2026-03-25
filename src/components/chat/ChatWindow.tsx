"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import type { ChatMessage as ChatMessageType } from "@/lib/chat";
import { RiRobot2Fill } from "react-icons/ri";

interface ChatWindowProps {
  messages: ChatMessageType[];
  onSuggestionClick?: (suggestion: string) => void;
}

export default function ChatWindow({ messages, onSuggestionClick }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <RiRobot2Fill className="text-accent text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">
              Raihan Assistant
            </h3>
            <p className="text-text-muted text-sm max-w-sm">
              Ask me anything about Raihan&apos;s experience, skills, projects,
              or background. I&apos;m here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                "What is Raihan's experience?",
                "Tell me about DekaLLM",
                "What tech stack does he use?",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => onSuggestionClick?.(suggestion)}
                  className="text-xs px-3 py-2 rounded-lg bg-surface-light border border-surface-lighter/50 text-text-muted hover:border-accent/50 hover:text-accent transition-colors cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

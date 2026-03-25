export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const CHAT_API_URL =
  process.env.NEXT_PUBLIC_CHAT_API_URL || "http://localhost:8787";

export async function sendChatMessage(
  messages: ChatMessage[],
  fingerprint: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const response = await fetch(`${CHAT_API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, fingerprint }),
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("Rate limit exceeded. Please try again tomorrow.");
    }
    throw new Error("Failed to get response. Please try again.");
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error("No response stream available.");

  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const text = decoder.decode(value, { stream: true });
    const lines = text.split("\n");

    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const data = line.slice(6);
        if (data === "[DONE]") return;
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) onChunk(content);
        } catch {
          // skip non-JSON lines
        }
      }
    }
  }
}

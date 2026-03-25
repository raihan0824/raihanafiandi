"use client";

import { motion } from "framer-motion";
import Markdown from "react-markdown";
import { HiUser } from "react-icons/hi";
import { RiRobot2Fill } from "react-icons/ri";
import type { ChatMessage as ChatMessageType } from "@/lib/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
          isUser
            ? "bg-primary/20 text-primary"
            : "bg-accent/20 text-accent"
        }`}
      >
        {isUser ? <HiUser size={16} /> : <RiRobot2Fill size={16} />}
      </div>

      {/* Message bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-white rounded-br-sm"
            : "bg-surface-light border border-surface-lighter/50 text-text rounded-bl-sm"
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : message.content ? (
          <Markdown
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              code: ({ children }) => (
                <code className="bg-surface-lighter/50 px-1.5 py-0.5 rounded text-xs">
                  {children}
                </code>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-text">{children}</strong>
              ),
            }}
          >
            {message.content}
          </Markdown>
        ) : (
          <span className="inline-flex gap-1">
            <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" />
            <span
              className="w-2 h-2 bg-text-muted rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <span
              className="w-2 h-2 bg-text-muted rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </span>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { useChat } from "@/hooks/useChat";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";
import RateLimitBanner from "@/components/chat/RateLimitBanner";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { RiRobot2Fill } from "react-icons/ri";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function ChatPage() {
  const { messages, isLoading, remaining, error, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen bg-surface">
      {/* Header */}
      <header className="border-b border-surface-lighter/30 bg-surface/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-text-muted hover:text-text transition-colors"
              aria-label="Back to portfolio"
            >
              <HiArrowLeft size={20} />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <RiRobot2Fill className="text-accent" size={16} />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-text">
                  Raihan Assistant
                </h1>
                <p className="text-xs text-text-muted">
                  AI-powered &middot; Ask me anything
                </p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <RateLimitBanner remaining={remaining} />

      {error && (
        <div className="text-center text-xs py-2 px-4 bg-red-500/10 text-red-400">
          {error}
        </div>
      )}

      <ChatWindow messages={messages} />

      <ChatInput
        onSend={sendMessage}
        disabled={isLoading || remaining === 0}
      />
    </div>
  );
}

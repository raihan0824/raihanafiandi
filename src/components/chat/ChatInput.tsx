"use client";

import { useState, useRef, useEffect } from "react";
import { HiPaperAirplane } from "react-icons/hi";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-surface-lighter/30 bg-surface/80 backdrop-blur-lg p-4">
      <div className="max-w-3xl mx-auto flex items-end gap-3">
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about Raihan..."
          disabled={disabled}
          rows={1}
          className="flex-1 resize-none bg-surface-light border border-surface-lighter/50 rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 disabled:opacity-50 max-h-32"
          style={{ minHeight: "44px" }}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !value.trim()}
          className="shrink-0 w-11 h-11 rounded-xl bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <HiPaperAirplane size={18} className="rotate-90" />
        </button>
      </div>
    </div>
  );
}

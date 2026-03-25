"use client";

import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer",
    {
      "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40":
        variant === "primary",
      "border border-primary/50 text-primary hover:bg-primary/10":
        variant === "outline",
      "text-text-muted hover:text-text hover:bg-surface-light":
        variant === "ghost",
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

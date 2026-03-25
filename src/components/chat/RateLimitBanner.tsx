interface RateLimitBannerProps {
  remaining: number;
}

export default function RateLimitBanner({ remaining }: RateLimitBannerProps) {
  if (remaining > 5) return null;

  return (
    <div
      className={`text-center text-xs py-2 px-4 ${
        remaining === 0
          ? "bg-red-500/10 text-red-400"
          : "bg-yellow-500/10 text-yellow-400"
      }`}
    >
      {remaining === 0
        ? "You've reached the daily message limit. Come back tomorrow!"
        : `${remaining} message${remaining === 1 ? "" : "s"} remaining today`}
    </div>
  );
}

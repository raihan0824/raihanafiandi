const STORAGE_KEY = "raihan-chat-rate";
const MAX_MESSAGES = 10;

interface RateLimitData {
  date: string;
  count: number;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function getData(): RateLimitData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data: RateLimitData = JSON.parse(stored);
      if (data.date === getToday()) return data;
    }
  } catch {
    // ignore parse errors
  }
  return { date: getToday(), count: 0 };
}

export function getRemainingMessages(): number {
  const data = getData();
  return Math.max(0, MAX_MESSAGES - data.count);
}

export function incrementMessageCount(): void {
  const data = getData();
  data.count += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function isRateLimited(): boolean {
  return getRemainingMessages() <= 0;
}

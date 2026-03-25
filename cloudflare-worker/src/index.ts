interface Env {
  RATE_LIMITS: KVNamespace;
  API_KEY: string;
  BASE_URL: string;
  MODEL: string;
  SYSTEM_PROMPT: string;
}

interface ChatRequest {
  messages: { role: string; content: string }[];
  fingerprint: string;
}

const MAX_MESSAGES_PER_DAY = 10;
const ALLOWED_ORIGINS = [
  "https://raihan0824.github.io",
  "http://localhost:3000",
];

function corsHeaders(origin: string): Record<string, string> {
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST" || !new URL(request.url).pathname.startsWith("/api/chat")) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    try {
      const body: ChatRequest = await request.json();
      const { messages, fingerprint } = body;

      if (!messages?.length || !fingerprint) {
        return new Response(
          JSON.stringify({ error: "Invalid request" }),
          { status: 400, headers: { ...headers, "Content-Type": "application/json" } }
        );
      }

      // Rate limiting
      const today = new Date().toISOString().split("T")[0];
      const rateLimitKey = `rate:${fingerprint}:${today}`;
      const currentCount = parseInt((await env.RATE_LIMITS.get(rateLimitKey)) || "0", 10);

      if (currentCount >= MAX_MESSAGES_PER_DAY) {
        return new Response(
          JSON.stringify({
            error: "Rate limit exceeded",
            remaining: 0,
          }),
          { status: 429, headers: { ...headers, "Content-Type": "application/json" } }
        );
      }

      // Increment rate limit count
      await env.RATE_LIMITS.put(rateLimitKey, String(currentCount + 1), {
        expirationTtl: 86400,
      });

      // Build messages with system prompt
      const systemMessage = {
        role: "system",
        content: `You are "Raihan Assistant", a helpful AI assistant on Raihan Afiandi's portfolio website. Answer questions about Raihan based on the following resume information. Be friendly, professional, and concise. If asked about something not in the resume, politely say you don't have that information.\n\n${env.SYSTEM_PROMPT}`,
      };

      const apiMessages = [systemMessage, ...messages];

      // Forward to LLM API
      const apiResponse = await fetch(`${env.BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.API_KEY}`,
        },
        body: JSON.stringify({
          model: env.MODEL,
          messages: apiMessages,
          stream: true,
        }),
      });

      if (!apiResponse.ok) {
        const errText = await apiResponse.text();
        return new Response(
          JSON.stringify({ error: "LLM API error", details: errText }),
          { status: 502, headers: { ...headers, "Content-Type": "application/json" } }
        );
      }

      // Stream response back
      return new Response(apiResponse.body, {
        status: 200,
        headers: {
          ...headers,
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500, headers: { ...headers, "Content-Type": "application/json" } }
      );
    }
  },
};

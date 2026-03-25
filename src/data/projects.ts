export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "DekaLLM",
    description:
      "Production-grade LLM-as-a-Service platform with OpenAI-compatible APIs, token-based billing, and distributed multi-node inference.",
    tags: ["Python", "Kubernetes", "vLLM", "Helm", "Prometheus"],
  },
  {
    title: "AIRA — AI for Ops",
    description:
      "Ops-focused AI agent system for anomaly detection and root cause analysis using Prometheus triggers and custom MCP tools.",
    tags: ["Python", "LangChain", "Kubernetes", "Slack"],
  },
  {
    title: "DekaWicara",
    description:
      "Internal ChatGPT-like application with production RAG pipeline featuring Tika ingestion, embedding, and reranking.",
    tags: ["Python", "RAG", "FastAPI", "Elastic"],
  },
  {
    title: "DekaCode",
    description:
      "Fork of Qwen-Code integrated with DekaLLM authentication for secure AI-powered code assistance.",
    tags: ["Python", "LLM", "Authentication"],
  },
  {
    title: "AI Customer Service Chatbot",
    description:
      "End-to-end AI chatbot for Ismaya Group with LLM fine-tuning (SFT, RLHF, DPO) and RAG integration.",
    tags: ["PyTorch", "HuggingFace", "vLLM", "FastAPI"],
  },
  {
    title: "NBA Player Salary Prediction",
    description:
      "Machine learning model using Random Forest to predict NBA player salaries based on performance metrics.",
    tags: ["R", "Random Forest", "Data Analysis"],
  },
];

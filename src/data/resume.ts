export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  languages: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  logo?: string;
  bullets: string[];
  techStack: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Muhammad Raihan Afiandi",
  shortName: "Raihan",
  title: "AI Expert & Cloud Engineer",
  tagline:
    "Building production-grade AI systems — from LLM infrastructure to intelligent agents.",
  email: "mraihanafiandi@gmail.com",
  location: "Jakarta, Indonesia",
  languages: ["Bahasa Indonesia (native)", "English"],
};

export const education: Education[] = [
  {
    institution: "Bandung Institute of Technology (ITB)",
    degree: "BSc Mathematics",
    period: "2017 – 2021",
  },
];

export const certifications: Certification[] = [
  {
    name: "AI Infrastructure and Operations",
    issuer: "NVIDIA",
  },
  {
    name: "Generative AI LLMs",
    issuer: "NVIDIA",
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: "Lintasarta",
    role: "AI Expert, Cloud Engineering",
    period: "Oct 2024 – Present",
    logo: "/images/logos/lintasarta.png",
    bullets: [
      "Led development of DekaLLM, a production-grade LLMaaS platform with OpenAI-compatible APIs and token-based billing",
      "Deployed and optimized OSS LLMs (Qwen, LLaMA, DeepSeek) with distributed multi-node inference and InfiniBand acceleration",
      "Implemented LMCache (KV reuse + disaggregated prefilling) for throughput improvement and latency reduction",
      "Built scalable Kubernetes deployment system using Helm + CRDs + UI for streamlined model provisioning",
      "Introduced GPU workload autoscaling with KEDA, scaling inference replicas based on traffic demand",
      "Built end-to-end observability for LLM serving: TTFT, TPS, and latency metrics (Prometheus, Grafana, Langfuse)",
      "Developed DekaWicara, an internal ChatGPT-like app with a production RAG pipeline",
      "Designed AIRA (AI for Ops), an ops-focused AI agent system for anomaly detection and RCA",
      "Built DekaCode, a fork of Qwen-Code with DekaLLM-only authentication",
    ],
    techStack: [
      "Python",
      "SQL",
      "Git",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "vLLM",
      "SGLang",
      "NIM",
      "Ray",
      "LangChain",
      "Grafana",
      "Langfuse",
      "Elastic",
    ],
  },
  {
    company: "Ismaya Group",
    role: "AI Lead, Communication",
    period: "Mar 2023 – Oct 2024",
    logo: "/images/logos/ismaya.png",
    bullets: [
      "Spearheaded development of an AI Chatbot for customer service",
      "Oversaw LLM fine-tuning using SFT, RLHF, and DPO techniques",
      "Supervised integration of RAG with LLMs for knowledge-grounded responses",
      "Managed data annotation and synthetic data generation pipelines",
      "Managed end-to-end LLM deployment from design to inference",
    ],
    techStack: [
      "Python",
      "SQL",
      "Docker",
      "PyTorch",
      "FastAPI",
      "HuggingFace",
      "vLLM",
      "Gradio",
    ],
  },
  {
    company: "Mandala Multifinance",
    role: "Data Scientist",
    period: "Apr 2022 – Mar 2023",
    logo: "/images/logos/mandala.png",
    bullets: [
      "Built an NLP-based AI Chatbot for customer interaction automation",
      "Developed a document converter engine using Computer Vision",
      "Designed and deployed Big Data and geospatial visualization dashboards",
      "Performed customer persona analysis and credit scoring analysis",
    ],
    techStack: ["Python", "SQL", "Docker", "PyTorch", "FastAPI", "HuggingFace", "OpenCV"],
  },
  {
    company: "Upwork",
    role: "Data Scientist (Freelance)",
    period: "Feb 2022 – Dec 2022",
    logo: "/images/logos/upwork.png",
    bullets: [
      "Completed projects for clients in USA, Israel, and New Zealand",
      "Web scraping, LLM fine-tuning, and data analysis",
    ],
    techStack: ["Python", "Web Scraping", "LLM Fine-tuning"],
  },
  {
    company: "Home Credit",
    role: "Data Analyst, Antifraud",
    period: "Nov 2021 – Mar 2022",
    logo: "/images/logos/homecredit.png",
    bullets: [
      "Engineered advanced SQL procedures for report generation and data collection",
      "Managed and monitored data dashboards using Power BI",
    ],
    techStack: ["SQL", "Power BI"],
  },
  {
    company: "Purple",
    role: "Data Analyst",
    period: "May 2021 – Nov 2021",
    logo: "/images/logos/purple.png",
    bullets: [
      "Designed and executed a collection scoring model",
      "Developed a lifetime value analysis model",
      "Conducted feature engineering, data cleansing, and reporting",
    ],
    techStack: ["Python", "SQL"],
  },
];

import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Raihan Afiandi — AI Expert & Cloud Engineer",
  description:
    "Portfolio of Muhammad Raihan Afiandi. AI Expert specializing in LLM infrastructure, AI agents, and production ML systems.",
  keywords: ["AI", "LLM", "Machine Learning", "Cloud Engineering", "Portfolio"],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

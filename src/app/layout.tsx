import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConditionalNav } from "@/components/conditional-nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgentArc | AI Consultancy",
  description: "AgentArc builds AI-powered solutions for businesses — custom agents, GPT workflows, voice AI, and full-stack development.",
  keywords: ["AI Consultancy", "AI Agents", "GPT Workflows", "Voice AI", "AI Automation", "Software Development"],
  authors: [{ name: "Taha Khan" }],
  creator: "AgentArc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agentarc.dev",
    title: "AgentArc | AI Consultancy",
    description: "AgentArc builds AI-powered solutions for businesses — custom agents, GPT workflows, voice AI, and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentArc | AI Consultancy",
    description: "AgentArc builds AI-powered solutions for businesses — custom agents, GPT workflows, voice AI, and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ConditionalNav />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
} 
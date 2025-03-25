import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taha Khan | AI Developer & Ex-Amazon SWE",
  description: "AI Developer | Ex-Amazon SWE | Building AI-powered solutions",
  keywords: ["AI Developer", "Software Engineer", "Amazon", "GPT", "AI Solutions"],
  authors: [{ name: "Taha Khan" }],
  creator: "Taha Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tahascodecamp.com",
    title: "Taha Khan | AI Developer & Ex-Amazon SWE",
    description: "AI Developer | Ex-Amazon SWE | Building AI-powered solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Khan | AI Developer & Ex-Amazon SWE",
    description: "AI Developer | Ex-Amazon SWE | Building AI-powered solutions",
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
          <Nav />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
} 
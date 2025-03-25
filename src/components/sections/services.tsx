import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  features: string[];
  gradient: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "GPT Workflows",
    description: "Custom GPT integration solutions for your business needs",
    features: [
      "Custom GPT model fine-tuning",
      "Workflow automation",
      "API integration",
      "Performance optimization",
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: "🤖"
  },
  {
    title: "AI Assistants & Bots",
    description: "Intelligent AI assistants and chatbots for various platforms",
    features: [
      "Chatbot development",
      "Voice assistants",
      "Multi-platform support",
      "Natural language processing",
    ],
    gradient: "from-purple-500 to-blue-500",
    icon: "💬"
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions with AI capabilities",
    features: [
      "Full-stack development",
      "AI feature integration",
      "Cloud deployment",
      "Scalable architecture",
    ],
    gradient: "from-cyan-500 to-blue-500",
    icon: "⚙️"
  },
  {
    title: "Freelance Consulting",
    description: "Expert guidance for AI implementation and development",
    features: [
      "Technical consulting",
      "Architecture design",
      "Code review",
      "Best practices",
    ],
    gradient: "from-blue-500 to-purple-500",
    icon: "🧠"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 bg-gradient-to-b from-background/50 via-background/30 to-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions tailored to your AI and software development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Development */}
          <div className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            <div className="relative">
              <div className="mb-4 text-blue-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                AI Development
              </h3>

              <p className="text-muted-foreground mb-4">
                Specialized in AI automation solutions, creating intelligent systems that enhance productivity and user experience.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom Chatbots & GPTs
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI Agents & Automation
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI Enhanced Workflows
                </li>
              </ul>
            </div>
          </div>

          {/* Web Development */}
          <div className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            <div className="relative">
              <div className="mb-4 text-purple-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                Web Development
              </h3>

              <p className="text-muted-foreground mb-4">
                Modern web applications built with the latest technologies, focusing on performance and user experience.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Full-Stack Development
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  API Development
                </li>
              </ul>
            </div>
          </div>

          {/* Consulting */}
          <div className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            <div className="relative">
              <div className="mb-4 text-cyan-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Technical Consulting
              </h3>

              <p className="text-muted-foreground mb-4">
                Expert guidance on AI implementation, architecture design, and technical strategy.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI Strategy Planning
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Architecture Review
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Technical Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
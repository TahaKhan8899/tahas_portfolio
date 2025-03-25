import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  imagePlaceholder?: string; // Color for placeholder
}

const projects: Project[] = [
  {
    title: "AI Code Assistant",
    description: "An intelligent coding assistant powered by GPT-4 that helps developers write better code faster.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ai-code-assistant",
    imagePlaceholder: "from-blue-500 to-cyan-500",
  },
  {
    title: "Smart Document Analyzer",
    description: "An AI-powered document analysis tool that extracts insights and generates summaries from various document formats.",
    technologies: ["Python", "LangChain", "OpenAI API", "FastAPI"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/smart-doc-analyzer",
    imagePlaceholder: "from-purple-500 to-blue-500",
  },
  {
    title: "AI Chat Application",
    description: "A modern chat application with AI capabilities, supporting multiple AI models and real-time conversations.",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ai-chat",
    imagePlaceholder: "from-cyan-500 to-blue-500",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 bg-gradient-to-b from-background/50 via-background/30 to-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work building innovative AI-powered applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Code Assistant */}
          <div className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl mb-6 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="w-full h-full flex items-center justify-center text-white/80 font-medium">
                  Project Image
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                AI Code Assistant
              </h3>

              <p className="text-muted-foreground mb-4">
                An intelligent coding assistant powered by GPT-4 that helps developers write better code faster.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">OpenAI API</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Tailwind CSS</span>
              </div>

              <div className="flex gap-3">
                <Button asChild variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#">Live Demo</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-blue-500/20 hover:bg-blue-500/10">
                  <Link href="#">GitHub</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Smart Document Analyzer */}
          <div className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl mb-6 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="w-full h-full flex items-center justify-center text-white/80 font-medium">
                  Project Image
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                Smart Document Analyzer
              </h3>

              <p className="text-muted-foreground mb-4">
                An AI-powered document analysis tool that extracts insights and generates summaries from various document formats.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">LangChain</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">OpenAI API</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">FastAPI</span>
              </div>

              <div className="flex gap-3">
                <Button asChild variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="#">Live Demo</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-purple-500/20 hover:bg-purple-500/10">
                  <Link href="#">GitHub</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* AI Chat Application */}
          <div className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl mb-6 overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500">
                <div className="w-full h-full flex items-center justify-center text-white/80 font-medium">
                  Project Image
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                AI Chat Application
              </h3>

              <p className="text-muted-foreground mb-4">
                A modern chat application with AI capabilities, supporting multiple AI models and real-time conversations.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Socket.io</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">OpenAI API</span>
              </div>

              <div className="flex gap-3">
                <Button asChild variant="default" size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                  <Link href="#">Live Demo</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="border-cyan-500/20 hover:bg-cyan-500/10">
                  <Link href="#">GitHub</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
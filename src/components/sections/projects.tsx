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
    title: "AI Personalized Workout Generator",
    description: "A workout generator app that uses a specialized knowledge base to create calisthenics programs for a fitness coach, saving 20+ hours/week.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "RAG"],
    // demoLink: "https://demo.example.com",
    // githubLink: "https://github.com/example/ai-code-assistant",
    imagePlaceholder: "/images/workoutAppImg.png",
  },
  {
    title: "Shopify Revenue Forecasting Tool",
    description: "Replaces manual spreadsheet-based forecasting with an AI automated solution that provides timely, accurate data and predictive insights to support strategic decision-making.",
    technologies: ["Python", "NumPy", "OpenAI API", "FastAPI"],
    // demoLink: "https://demo.example.com",
    // githubLink: "https://github.com/example/smart-doc-analyzer",
    imagePlaceholder: "from-purple-500 to-blue-500",
  },
  {
    title: "AI Customer Survey Analyzer",
    description: "Saves 30+ hours per week of manually reviewing customer satisfaction surveys and suggesting product improvements based on survey results.",
    technologies: ["React", "Node.js", "AWS", "OpenAI API"],
    // demoLink: "https://demo.example.com",
    // githubLink: "https://github.com/example/ai-chat",
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

        {/* Dynamically render project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm"
            >
              <div className="relative">
                {/* Project image placeholder with gradient or real image */}
                <div
                  className={`aspect-video rounded-xl mb-6 overflow-hidden relative ${project.imagePlaceholder && project.imagePlaceholder.startsWith('/') ? '' : `bg-gradient-to-r ${project.imagePlaceholder || "from-blue-500 to-cyan-500"}`}`}
                >
                  {project.imagePlaceholder && project.imagePlaceholder.startsWith('/') ? (
                    <>
                      {/* Render real image if imagePlaceholder is a path */}
                      <Image
                        src={project.imagePlaceholder}
                        alt={project.title + ' image'}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-xl z-0"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* Hover overlay above the image */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl pointer-events-none z-10`}
                      ></div>
                    </>
                  ) : (
                    // Otherwise, show the gradient placeholder and overlay as before
                    <div className="w-full h-full flex items-center justify-center text-white/80 font-medium">
                      
                    </div>
                  )}
                </div>

                {/* Project title */}
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.demoLink && (
                    <Button asChild variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button asChild variant="outline" size="sm" className="border-blue-500/20 hover:bg-blue-500/10">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
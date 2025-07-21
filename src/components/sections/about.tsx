import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            About Me
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about building AI-powered solutions that solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Professional Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Professional Background
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  With 5+ years of experience in software development, I specialize in building AI-powered applications
                  that solve real-world problems. My journey includes working at Amazon as a Software Development Engineer,
                  where I gained valuable experience in building scalable systems.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                <h3 className="text-blue-400 font-medium mb-1">Experience</h3>
                <p className="text-3xl font-bold text-blue-500">5+ Years</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                <h3 className="text-purple-400 font-medium mb-1">Projects</h3>
                <p className="text-3xl font-bold text-purple-500">50+</p>
              </div>
            </div>

            <blockquote className="p-4 border-l-2 border-blue-500 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-r-lg">
              <p className="italic text-lg">
                "I believe AI is transforming how we build software, and I'm excited to be part of this revolution."
              </p>
            </blockquote>
          </div>

          {/* Right column - Expertise */}
          <div className="lg:col-span-5">
            <Card className="h-full border-purple-500/20 shadow-lg shadow-purple-500/5 bg-card/95 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-purple-500 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {[
                    "AI/ML Development",
                    "GPT Workflows & Integration",
                    "Custom AI Solutions",
                    "Full-stack Development",
                    "Cloud Architecture",
                    "System Design"
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 group/item">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-muted-foreground group-hover/item:text-purple-400 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: "React", color: "blue" },
                    { name: "Next.js", color: "purple" },
                    { name: "Python", color: "cyan" },
                    { name: "TypeScript", color: "blue" },
                    { name: "AWS", color: "purple" },
                    { name: "GPT", color: "cyan" }
                  ].map((tech, i) => (
                    <div 
                      key={i} 
                      className={`px-2 py-1.5 rounded-md text-center border transition-all duration-300 hover:-translate-y-1
                        ${tech.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20' :
                          tech.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20' :
                          'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20'}`}
                    >
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-purple-500/10">
                  <h3 className="text-purple-400 font-medium mb-2">Continuous Learning</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-purple-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-purple-400">80%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 
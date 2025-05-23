"use client"

import { useState } from "react"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with payment integration, user authentication, and admin panel.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    github: "https://github.com/SabinKshetri/ecommerce",
    demo: "https://github.com/SabinKshetri/ecommerce",
  },
  {
    title: "News Portal",
    description:
      "Creating a news portal named Erastriya.com using Python, HTML, CSS, and JavaScript involves building a web application with a frontend and a backend.",
    technologies: ["Python", "Html", "Css", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    github: "https://github.com/SabinKshetri/",
    demo: "https://erastriya.com/",
  },
  {
    title: "Malicious URL Detector",
    description: " Identifying and blocking URLs that lead to harmful content such as phishing sites, malware, ransomware, or scam pages.",
    technologies: ["Python", "Node.js", "React", "Mysql" , "Model Training"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
    github: "https://github.com/SabinKshetri/MaliciousURLByML",
    demo: "https://github.com/SabinKshetri/MaliciousURLByML",
  },
    {
    title: "Real Time Chat Applicaton",
    description: "Real-time chat app involves building a system that allows users to send and receive messages instantly without refreshing the page",
    technologies: [ "Node.js", "React", "Mysql" , "Js Technology"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
    github: "https://github.com/SabinKshetri/RealTimeChatApp",
    demo: "https://github.com/SabinKshetri/RealTimeChatApp",
  },
]

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
            Explore some of my recent work in modern web development and engineering.
          </p>
        </div>

        <div className="relative">
          {/* Project Carousel */}
          <Carousel
            className="w-full"
            onSelect={(index) => setActiveIndex(index)}
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent className="py-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="md:basis-2/3 lg:basis-3/5 pl-4 pr-4">
                  <div
                    className={cn(
                      "group relative h-full rounded-2xl transition-all duration-500 overflow-hidden",
                      activeIndex === index
                        ? "ring-2 ring-blue-500/50 shadow-xl shadow-blue-500/20"
                        : "opacity-70 scale-95",
                    )}
                  >
                    {/* Card background with gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm z-10"></div>

                    {/* Project image as background */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Glass card content */}
                    <div className="relative z-20 p-8 h-full flex flex-col">
                      <div className="mb-auto">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md text-blue-200 rounded-full border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-colors border border-white/10"
                          >
                            <Github size={16} />
                            Code
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:from-blue-700 hover:to-purple-700 transition-colors"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="h-12 w-12 border-2 border-white/20 bg-black/50 backdrop-blur-md text-white hover:bg-black/70" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="h-12 w-12 border-2 border-white/20 bg-black/50 backdrop-blur-md text-white hover:bg-black/70" />
            </div>
          </Carousel>

          {/* Project indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                    : "bg-white/30 hover:bg-white/50",
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/10 group"
          >
            View All Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

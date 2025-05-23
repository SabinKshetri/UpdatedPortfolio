"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Code, Container, Database, Layout, Server } from "lucide-react"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "MERN Stack", icon: <Server className="w-4 h-4 mr-2" /> },
    { name: "Next.js", icon: <Code className="w-4 h-4 mr-2" /> },
    { name: "PostgreSql", icon: <Database className="w-4 h-4 mr-2" /> },
    { name: "Docker", icon: <Container className="w-4 h-4 mr-2" /> },
    { name: "Software Design & Development", icon: <Layout className="w-4 h-4 mr-2" /> },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* 3D geometric shapes */}
        <div className="absolute top-20 right-[20%] w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl transform rotate-12 backdrop-blur-sm border border-white/10 animate-float-slow"></div>
        <div className="absolute bottom-20 left-[15%] w-60 h-60 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full transform -rotate-12 backdrop-blur-sm border border-white/10 animate-float"></div>
        <div className="absolute top-[40%] left-[10%] w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-lg transform rotate-45 backdrop-blur-sm border border-white/10 animate-float-slow"></div>

        {/* Floating bubbles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-white/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 60 + 10}px`,
              height: `${Math.random() * 60 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 100}, ${Math.random() * 200 + 55}, 0.1)`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 text-left">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-gray-300 border border-white/20 mb-2">
                Software Developer & IT Engineer
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Sabin Kshetri
                </span>
              </h1>

              <p className="text-lg text-gray-400 max-w-xl">
                Passionate about creating innovative solutions with modern web technologies. Specializing in full-stack
                development with expertise in MERN stack, Next.js, and cloud technologies.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Code block design element */}
              <div className="bg-black/50 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-gray-300 font-mono text-sm">
                  <code>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> ={" "}
                    {"{"}
                    <br />
                    {"  "}name: <span className="text-green-400">'Sabin Kshetri'</span>,
                    <br />
                    {"  "}skills: [<span className="text-green-400">'MERN'</span>,{" "}
                    <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Docker'</span>, <span className="text-green-400">'PostgreSql'</span>,
                     <span className="text-green-400">'MySql'</span>
                    ],
                    <br />
                    {"  "}passion: <span className="text-green-400">'Building innovative solutions'</span>,
                    <br />
                    {"  "}status: <span className="text-green-400">'Available for projects'</span>
                    <br />
                    {"}"};
                  </code>
                </pre>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg blur-xl opacity-30 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D floating cube */}
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-60 animate-float-slow hidden lg:block">
        <div className="cube">
          <div className="cube-face cube-face-front"></div>
          <div className="cube-face cube-face-back"></div>
          <div className="cube-face cube-face-right"></div>
          <div className="cube-face cube-face-left"></div>
          <div className="cube-face cube-face-top"></div>
          <div className="cube-face cube-face-bottom"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

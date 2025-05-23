"use client"

import { useState } from "react"
import { Code, Database, Globe, Lightbulb, Award, Users, Coffee, Heart } from "lucide-react"

const About = () => {
  const [activeTab, setActiveTab] = useState("skills")

  const skills = [
    { name: "Frontend Development",  icon: <Globe className="w-5 h-5" /> },
    { name: "Backend Development", icon: <Database className="w-5 h-5" /> },
    { name: "Full Stack Development",  icon: <Code className="w-5 h-5" /> },
    { name: "DevOps & Cloud",  icon: <Lightbulb className="w-5 h-5" /> },
  ]

  const experience = [
    {
      title: "Backend Developer",
      company: "Fido IT Solutions Pvt.Ltd.",
      period: "2025 - Present",
      description: "Developing Backend development projects and monitoring system.",
    },
    {
      title: "IT Support",
      company: "MuglaniKhabar.com",
      period: "2019 - Present",
      description: "Developed scalable web applications using MERN stack and cloud technologies.",
    },
    {
      title: "React Developer",
      company: "Agrobotics Nepal Pvt.Ltd",
      period: "2023 - 2024",
      description: "Built responsive web applications and gained expertise in modern frameworks.",
    },
  ]

  const achievements = [
    { number: "5+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "1+", label: "Years Experience", icon: <Code className="w-6 h-6" /> },
    { number: "5+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "100+", label: "Cups of Coffee", icon: <Coffee className="w-6 h-6" /> },
  ]

  const interests = [
    "Open Source Contributing",
    "Machine Learning",
    "Cloud Architecture",
    "Reading Books",
    "Tech Blogging",
    "Mentoring",
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-950 to-blue-950 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Floating elements */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
            Passionate developer with a love for creating innovative solutions and building amazing user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SK</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sabin Kshetri</h3>
                <p className="text-blue-300 font-medium">Software Developer & IT Engineer</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Available for new opportunities
                </div>
                <div className="text-gray-300">
                  <strong className="text-white">Location:</strong> Kathmandu,Nepal
                </div>
                <div className="text-gray-300">
                  <strong className="text-white">Experience:</strong> 1+ Years
                </div>
                <div className="text-gray-300">
                  <strong className="text-white">Specialization:</strong> Full Stack Development
                </div>
              </div>

              {/* Interests */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 text-xs bg-blue-500/20 text-blue-200 rounded-full border border-blue-500/30"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-white/10">
                {["skills", "experience", "story"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "text-white bg-white/10 border-b-2 border-blue-500"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === "skills" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="text-blue-400">{skill.icon}</div>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-400">{skill.level}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">Work Experience</h3>
                    {experience.map((exp, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-blue-500/30">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                          <p className="text-blue-300 font-medium">{exp.company}</p>
                          <p className="text-gray-400 text-sm">{exp.period}</p>
                          <p className="text-gray-300">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "story" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">My Story</h3>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        I'm a passionate software developer with over 1+ years of experience in building modern web
                        applications. My journey started with a curiosity about how websites work, which led me to dive
                        deep into the world of programming.
                      </p>
                      <p>
                        I specialize in full-stack development using the MERN stack, Next.js, and interested in  modern WebSec
                        practices. I love solving complex problems and turning ideas into reality through clean,
                        efficient code.
                      </p>
                      <p>
                        When I'm not coding, you'll find me contributing to open source projects, writing technical
                        blogs, or exploring new technologies. I believe in continuous learning and sharing knowledge
                        with the developer community.
                      </p>
                      <div className="flex items-center gap-2 text-blue-300 mt-6">
                        <Heart className="w-5 h-5" />
                        <span>Passionate about creating solutions that make a difference</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/Updated_cv_Sabin_WebDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

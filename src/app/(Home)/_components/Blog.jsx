"use client"

import Link from "next/link"
import { ArrowRight, Clock, Calendar, ChevronRight } from "lucide-react"

// Mock blog data (replace with your actual data import)
const BlogData = [
  {
    slug: "modern-react-patterns",
    title: "Modern React Patterns for Cleaner Code",
    excerpt:
      "Explore the latest React patterns and best practices that will help you write more maintainable and efficient code. Learn about hooks, context, and more.",
    category: "React",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
  },
  {
    slug: "nextjs-server-components",
    title: "Understanding Next.js Server Components",
    excerpt:
      "Dive deep into Next.js Server Components and learn how they can improve your application's performance and user experience with reduced client-side JavaScript.",
    category: "Next.js",
    date: "June 22, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=500&fit=crop",
  },
  {
    slug: "docker-microservices",
    title: "Building Microservices with Docker and Node.js",
    excerpt:
      "Learn how to architect and implement a microservices-based application using Docker, Node.js, and modern DevOps practices for scalable solutions.",
    category: "DevOps",
    date: "July 10, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=500&fit=crop",
  },
]

// Category colors mapping
const categoryColors = {
  React: { bg: "bg-blue-500/20", text: "text-blue-300" },
  "Next.js": { bg: "bg-purple-500/20", text: "text-purple-300" },
  DevOps: { bg: "bg-green-500/20", text: "text-green-300" },
  Default: { bg: "bg-blue-500/20", text: "text-blue-300" },
}

const Blog = () => {
  return (
    <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-blue-950 to-purple-950 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Decorative shapes */}
      <div className="absolute top-1/3 left-[10%] w-16 h-16 border border-blue-500/20 rounded-lg rotate-45 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 border border-purple-500/20 rounded-full animate-float"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Blog Posts</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
            Insights and tutorials about modern web development, DevOps, and software engineering
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/10 group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <img
                src={BlogData[0].image || "/placeholder.svg"}
                alt={BlogData[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="mb-4">
                  <span
                    className={`px-3 py-1 text-sm ${
                      categoryColors[BlogData[0].category]?.bg || categoryColors.Default.bg
                    } ${categoryColors[BlogData[0].category]?.text || categoryColors.Default.text} rounded-full`}
                  >
                    {BlogData[0].category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {BlogData[0].title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">{BlogData[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {BlogData[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {BlogData[0].readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${BlogData[0].slug}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors group"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="md:w-1/3 rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <img
                    src={BlogData[0].image || "/placeholder.svg"}
                    alt={BlogData[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogData.slice(1).map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block h-full">
              <article className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.03] group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs ${
                        categoryColors[post.category]?.bg || categoryColors.Default.bg
                      } ${categoryColors[post.category]?.text || categoryColors.Default.text} rounded-full`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/10 group"
          >
            View All Posts
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog

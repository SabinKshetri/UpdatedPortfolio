"use client"

const Footer = () => {
  return (
    <footer className="relative mt-0 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-black via-blue-950 to-purple-950 border-t border-white/10 text-center overflow-hidden">
     <p className="text-gray-400 text-sm z-10 relative">
        © {new Date().getFullYear()} Sabin Kshetri. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

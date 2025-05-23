import React from 'react'
import Hero from './_components/Hero';
import Projects from './_components/Projects';
import About from './_components/About';
import Contact from './_components/Contact';
import Blog from './_components/Blog';

const Home = () => {
  return (
    <>
    <Hero/>
    <Projects/>
    <About/>
    <Blog/>
    <Contact/>
    </>
  )
}

export default Home;
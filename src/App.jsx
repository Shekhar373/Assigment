import React from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Footer from './pages/Footer'
import Navbar from './Components/HeroComponent/Navbar'
import Questions from './Components/Questions'
import Test from './Components/Test'

const App = () => {
  return (
    <>
   
    <div className='relative overflow-x-hidden'>
    <div className='absolute z-999'>
        <Navbar />
      </div>
    <div>
      <Hero />
      <About />
      <Experience />
      <Questions />
      <Footer />
      {/* <Test /> */}
    </div>
    </div>
    </>
  )
}

export default App
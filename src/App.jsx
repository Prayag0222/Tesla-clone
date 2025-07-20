import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Firstpage from './components/Body/Firstpage'
import Slides from './components/Body/Slides'
import Section3 from './components/Body/Section3'
import Section4 from './components/Body/Section4'
import Section5 from './components/Body/Section5'
import Section6 from './components/Body/Section6'
import Footer from './components/Body/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Firstpage />
        <Slides />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
        {/* Add more components here, and they'll stack vertically */}
      </div>
    </div>
  )
}

export default App
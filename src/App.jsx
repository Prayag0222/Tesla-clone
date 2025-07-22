import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Firstpage from './components/Body/Firstpage'
import Slides from './components/Body/Slides'
import Section3 from './components/Body/Section3'
import Section4 from './components/Body/Section4'
import Section5 from './components/Body/Section5'
import Section6 from './components/Body/Section6'
import Footer from './components/Body/Footer'
import Login from './components/Navbar/Account/Login'
import Support from './components/Navbar/Support/Support'

const App = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Show Navbar on all pages except /account and /support */}
      {location.pathname !== '/account' && location.pathname !== '/support' && <Navbar />}
      <div className="pt-16 flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Firstpage />
                <Slides />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Footer />
              </>
            }
          />
          <Route path="/account" element={<Login />} />
          <Route path='/support' element={<Support/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
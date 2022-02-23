import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Developers from './components/Developers/Developers'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <About/>
      <Developers/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
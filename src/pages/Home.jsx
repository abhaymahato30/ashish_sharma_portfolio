import React from 'react'
import Navbar from '../components/Navbar/Navbar'
// import Hero from '../components/Hero'
import Info from '../components/Info'
import Educate from '../components/Educate'
import Footer from '../components/Footer/Footer'
import Acheivements from '../components/Acheivements'
import Skills  from '../components/Skills'



const Home = () => {
  return (
    <>
     <Navbar/>
     {/* <Hero tittle="ASHISH SHARMA"/> */}
     <Info/>

     <Educate/>
     <Acheivements/>
     <Skills/>
     <Footer/>

    
    </>
  )
}

export default Home

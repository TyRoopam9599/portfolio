import React from 'react'
import Header from "./Componenets/Header/Header"
import Navbar from "./Componenets/Navbar/Navbar"
import About from "./Componenets/About/About"
import Experience from "./Componenets/Experience/Experience"
import Services from "./Componenets/Services/Services"
import Portfolio from "./Componenets/Portfolio/Portfolio"
import Certifications from './Componenets/Certifications/Certifications'
import Contacts from "./Componenets/Contacts/Contacts"
import Footer from "./Componenets/Footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Certifications />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
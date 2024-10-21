import React from 'react'
import ShowCase from './sections/ShowCase'
import InputForm from './sections/InputForm'
import Services from './sections/Services'
import About from './sections/About'
import Contactus from './sections/Contactus'

const Home = () => {
  return (
    <>
    <ShowCase/>
    <InputForm/>
    <Services/>
    <About/>
    <Contactus/>
    </>
  )
}

export default Home
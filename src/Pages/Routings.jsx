/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import ServiceDetail from './ServiceDetail'

const Routings = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/services/:id' element = {<ServiceDetail/>}/>
    </Routes>
  )
}

export default Routings

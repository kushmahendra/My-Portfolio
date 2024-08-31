import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

function App() {


  return (
    <>
      <Header/>
      <Home/>
      <Projects/>
      <Skills/>
     <Contact/>
    </>
  )
}

export default App

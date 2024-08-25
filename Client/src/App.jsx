import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import "./index.css"
import Hero from './components/Home'
import Authentication from './components/Authentication/Authentication1'
import { Outlet } from 'react-router-dom';


function App() {
  
  return (
    <>
      <div>
      <Authentication />
      <Navbar />
      <Outlet /> {/* Renders the matched child route */}
    </div>
        
    </>
  )
}

export default App

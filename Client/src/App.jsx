import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import "./index.css"
import Hero from './components/Home'
import Authentication from './components/Authentication/Authentication1'
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer"


function App() {
  
  return (
    <>
      <div>
      
      <Navbar />
      <Outlet /> {/* Renders the matched child route */}
      <Footer/>
    </div>
        
    </>
  )
}

export default App

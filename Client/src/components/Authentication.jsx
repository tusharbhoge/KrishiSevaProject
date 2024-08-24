import React from 'react'
import authBgImage from '../assets/homeImage1.jpeg'


const Authentication = () => {


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50'>
    <div className='authContainer h-[90vh] w-[50vw] bg-cover bg-center  flex justify-center items-center ' style={{ backgroundImage:`url(${authBgImage})`}}>

    </div>
    </div>
  )
}

export default Authentication
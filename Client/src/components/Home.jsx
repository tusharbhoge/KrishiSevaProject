import React from 'react'
import bgImage from "../assets/homeImage2.jpeg"
import Button from './Button'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import Authentication from './Authentication';
import pc from "../assets/pc.png"

const Home = () => {

    
const border="px-[25px] py-[10px] m-[20px] border  text-2xl border-white text-white font-bold bg-green-600 rounded hover:bg-green-700 hover:text-white"


  return (
    <>
    <div className='h-screen w-screen bg-cover bg-center  flex justify-center items-center' style={{ backgroundImage:`url(${bgImage})`}}>
        <div className='h-[100vh] w-[100vw] bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-[100px] text-3xl '>
                <h2 className='pb-8  '>Namaste! Welcome to AgriRental.</h2>
                <h1 className='text-4xl font-bold  '><span className='text-green-600 text-6xl leading-snug shadow-md'>Farming Equipments </span><br />at reasonable and affordable prices.</h1>
                <h3 className='text-2xl p-[20px] '>start now with just one click</h3>
                <Button title="Book Now" style={border}/>
        </div>
 
    </div>
    <div className='h-full w-full bg-zinc-50 font-bold py-5 '>
      <h1 className='text-center text-3xl text-green-600'>
        WHAT WE OFFER
      </h1> 
      <h1 className='text-center text-zinc-600 py-2'>
        Being a part of AgriRentals , You can get this from us.
      </h1>

      <div className='flex flex-row px-10 gap-10 justify-around items-center m-0 p-0 pb-28  pt-7'>
        <div className='bg-zinc-50 w-60 h-60 text-center items-center justify-center border-2 border-black ' >
        
        <div className='mt-40 '>
        <h1 className='font-semibold '>24*7 Customer Support</h1> 
         <h1 className='font-normal text-sm'>We are just one call away</h1>

          </div> 
        </div>
        <div className='bg-zinc-50 w-60 h-60 text-center items-center justify-center border-2 border-black'>
          <div className='mt-40'>
          <h1 className='font-semibold'>Trusted Buyers , Sellers and dealers</h1>
          <h1 className='font-normal text-sm'>Ensured safety of your experience</h1>

          </div>
        
        </div>

        <div className='bg-zinc-50 w-60 h-60 text-center items-center justify-center border-2 border-black'>
          <div className='mt-40'>
          <h1 className='font-semibold'>One click bookings</h1>
          <h1 className='font-normal text-sm'>Time saving bookings</h1>
          </div>
   
        </div>
      </div>
      <div className='bg-green-600 h-full  '>
      <h1 className='text-center text-3xl text-black font-bold pt-5'>
        How AgriRental works
      </h1>
      
      <h1  className=' pt-5 text-center text-lg text-white font-normal'>
        Take a look at our platform demo
      </h1>
      <div className=' h-[75%] w-[100%] flex  justify-center gap-5'>
      <div className='bg bg-green-600  flex flex-col text-white pb-20 pl-28 justify-center gap-3 font-normal text-xl pt-16'>
        <h1>  1. Sign-up to the platform</h1>
        <h1>  2. Post your ad for the off season</h1>
        <h1>  3. Provide equipment details</h1>
        <h1>  4. Post your booking Offer</h1>
        <h1>  5. Explore and filter lists of equipments</h1>
        <h1>  6. Check an available time slot</h1>
        <h1>  7. Chat with the owner and make a booking</h1>
        <h1>  8. Stay updated by a SMS.</h1>
      </div>

      <div className=' h-[100%] w-[50%] flex justify-center items-center '>
        <img className='h-[320px] ' src={pc} alt="" />
      </div>
      </div>
      </div>

    </div>
   
    </>
  )
}

export default Home
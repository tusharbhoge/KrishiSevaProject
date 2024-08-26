import React from 'react'
import logo from "../assets/appicon.png"
import logo4 from "../assets/logo4.png"
import Button from './Button'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const footer = () => {
  return (
    <>
    
    <div className=" bg-green-700 h-auto w-screen p-10  text-white">

<div className="flex flex-wrap  mx-auto justify-between items-center">
   <div className="w-24 h-24 ms-4 rounded-full overflow-hidden bg-white">
     <img className="w-full h-full object-cover " src={logo} alt="" />
   </div>
    <div>
        <h3 className="font-bold text-2xl">KrishiSeva</h3>
        <p className="font-semibold text-xl py-2">कृषिकर्मणि सेवा भावः</p>
        
    </div>


    <div className=" flex flex-col font-semibold">
       <Button title="Home" to="/" />
       <Button title="Dashboard" to="dashboard" />
       <Button title="AddProduct" to="add-product" />
       <Button title="Help" to="help" />
       <Button title="Register" to="login" />
    </div>

    <div className="flex flex-col font-semibold ">
        
      <Button title="#Support Center" to="#" />
      <Button title="#Help center" to="#" />
      <Button title="#Partner Dispute" to="#" />
      <Button title="#FAQs" to="#" />
        
    </div>

    <div>

       <h3 className="font-bold text-lg">Give Us a Follow </h3>
       <h3 className="font-bold text-lg">on Social Media</h3>

       <div className="flex gap-4 text-2xl pt-2 ">

       <InstagramIcon />
        
        <FacebookIcon />

        <XIcon />
       </div>
    
    </div>

    <div className="flex items-center justify-center">
        <div className="text-black w-32 h-32">
            <img className="w-full h-full object-cover" src={logo4} alt="logo" />
        </div>
        <div className=" font-semibold text-lg text-center mx-4">

        <h3>Ministry of Skill</h3>
        <h3>Development and</h3>
        <h3>Entrepreneurship</h3>

        </div>
        
    </div>

</div>

</div>
    </>
  )
}

export default footer
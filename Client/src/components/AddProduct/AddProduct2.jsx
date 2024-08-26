
import React from 'react'
import Button from "../Button"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



import  { useState } from 'react';



function SimpleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Option');
  const options = ["Hourly","Daily","Weekly","Monthly"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className=" mt-2 relative inline-block w-full pr-4 ">
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md w-full flex justify-between items-center"
      >
        <span>{selectedOption}</span>
        <span className="ml-2">▼</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



const AddProduct2 = () => {

  const border = "px-4 mt-16  py-2 border border-green-600 text-green-700 bg-white rounded-[15px] hover:bg-green-700 hover:text-white";
  return (
    <>
  <div className='bg-gray-100 w-screen h-auto flex justify-center'>
    <div className='h-auto w-[70%] bg-white m-[150px] px-16  py-12 rounded-xl text-lg'>
      <div className='   h-24  mx-auto  border-b-2'>
                <h1 className='text-black font-bold pb-2  text-2xl '>
                  Add Equipment 
                </h1>
                  <h2 className='text-gray-600 font-normal  '>
                    Fill the details of the equipment which you want to rent.
                  </h2>
      </div>
      <div className=' text-black font-bold py-4 border-b-2'>
            <h1 className=' text-xl '>
              Rental plans and availablity
            </h1>
      </div>
      <div className=' flex w-full'>
        <div className='flex flex-col w-[50%] mr-4'>
          <h1 className='py-3'>From</h1>
          <input type="date" className="border-2 border-gray-400 rounded-lg p-3 "/>
        </div>
        <div className='flex flex-col w-[50%] mr-4'>
          <h1 className='py-3'>To</h1>
          <input type="date" className="border-2 border-gray-400 rounded-lg p-3 "/>
        </div>
      </div>
      <div className='w-full flex justify-between items-center py-4'>
          <h1 className='pt-3 font-bold'>
             Rental PLan Details
          </h1>
          <div className='flex flex-col'>
          <Button title="+Add" style="text-green-600 font-bold "/>
       
          </div>
      </div>
     
     <div className='flex w-full my-3'>
      <div className='w-[50%] pb-2 '>
        <h1>
          Select Plan
        </h1>
        <SimpleDropdown/>

      </div>
      <div className='w-[50%]'>
        <h1>
          Amount in Rs
        </h1>
        <div className='flex justify-between items-center'>
        <input type="text" className='  border-2 w-full rounded-lg py-2 px-4 my-2 mr-2 focus:outline-none'/>
          <button>
          <DeleteOutlineIcon className='text-red-500  ' />

          </button>
         
        </div>
        
        <div className='w-full h-12 flex items-end justify-end '>
          <Button title="Next" to="/addImage" style={border}   />
        </div>
       
       
      </div>
    
     </div>
   






    </div>
  </div>
   </>
    
  )
}

export default AddProduct2

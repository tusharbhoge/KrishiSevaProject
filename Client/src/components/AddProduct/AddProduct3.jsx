import React from 'react'
import Button from "../Button"

const AddProduct3 = () => {
  const border = "px-4 mt-16  py-2 border border-green-600 text-green-700 bg-white rounded-[15px] hover:bg-green-700 hover:text-white";
  return (
   
    <>
  
      <div className='bg-gray-100 w-screen h-auto flex justify-center'>
        <div  className='h-auto w-[70%] bg-white m-[150px] px-16  py-12 rounded-xl text-lg'>
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
              Upload Image
            </h1>
            <div className='w-full h-12 flex items-end justify-end '>
          <Button title="Add Equipment" to="/dashboard" style={border}   />
        </div>


            

        </div>

        </div>
        

        
      
     </div>
    
    </>
  
  )
}

export default AddProduct3

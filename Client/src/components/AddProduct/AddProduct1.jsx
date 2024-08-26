import React from 'react'
import Button from"../Button"

const AddProduct = () => {

  const border = "px-4 mt-16  py-2 border border-green-600 text-green-700 bg-white rounded-[15px] hover:bg-green-700 hover:text-white";
  return (
    <>

    <div className='bg-gray-100 w-screen h-auto flex justify-center'>

      <div className='h-auto w-[70%] bg-white m-[150px] px-16  py-12 rounded-xl text-lg'  >
        
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
              Basic Details
            </h1>
        </div>


   <div className=''>

        <h1 className='  '>
           Equipment's Name :
         </h1>
        <input type="text" className='  border-2 w-[70%] rounded-lg py-2 px-4 my-3 focus:outline-none'/>

        <h1 className='  '>
           Manufacturer's Name :
         </h1>
        <input type="text" className='  border-2 w-[70%] rounded-lg py-2 px-4 my-3 focus:outline-none'/>

        <h1 className='  '>
           Description :
         </h1>
         <textarea
        className="w-[70%] h-32 p-4 border rounded-lg focus:outline-none "
        placeholder="Enter your description here..."
      ></textarea>

      
          <h1 className='  '>
           Equipment Type:
         </h1>
        <input type="text" className='  border-2 w-[70%] rounded-lg py-2 px-4 my-3 focus:outline-none'/>

        
        <h1 className='  '>
           Location :
         </h1>
        <input type="text" className='  border-2 w-[70%] rounded-lg py-2 px-4 my-3 mb-10  focus:outline-none'/>


        <div className='w-full h-12 flex items-end justify-end pr-44'>
          <Button title="Next" to="/plans" style={border}   />
        </div>
       

     

        



   </div>
    </div>


  
      </div>
    
    </>
  
  

 

 
   
  )
}

export default AddProduct

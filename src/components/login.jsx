import React from 'react'

function login() {
  return (
    
    <>
    
    <div className='min-h-screen flex items-center justify-center '>
        <form className='bg-amber-700 border-2 border-amber-700 p-6 rounded-lg shadow-md w-96'>
          <h2 className='text-2xl font-bold mb-4 text-center '>Login Page</h2>
          <div className='mb-4'>
            <label className="block mb-1 font-medium ">Name</label>
            <input type="text" placeholder='Enter your name' className='w-full border px-3 py-2  rounded focus:outline-none focus:ring-2 focus:ring-amber-600' />
          </div>
          <div className=' block mb-1 font-medium'>
            <label className="block mb-1">Email</label>
            <input type="Email" placeholder='Enter your Email' className='w-full border px-3 py-2  rounded focus:outline-none focus:ring-2 focus:ring-amber-600' />
          </div>
          <div className=' block mb-1 font-medium'>
            <label className="block mb-1">Password</label>
            <input type="Email" placeholder='Enter your password' className='w-full border px-3 py-2  rounded focus:outline-none focus:ring-2 focus:ring-amber-600' />
          </div>

          <button type='submit' className='w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800'>Submit</button>



        </form>
      </div>
    </>
  )
}

export default login
import React from 'react'

const hoodie = () => {
  return (
    <div className='bg-black text-white rounded-lg p-4 mt-10 ml-3 w-70'>
        <img src="/assets/hoodies/black hoodie.avif" alt="" />
        
        <h2 className='text-2xl font-bold font-sans'>Black Hoodie</h2>
        <p className='text-gray-500'>Luxurious Black Hoodie Made from 100% Cotton</p>
        <span className='text-2xl font-bold'>$100</span>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md flex mr-10 cursor-pointer hover:bg-red-600'>Add to Cart</button>
    </div>
  )
}

export default hoodie
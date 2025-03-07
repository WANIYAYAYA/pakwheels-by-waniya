import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
const from = () => {
  return (
    
        
        <div>
        <div className=' flex justify-center items-center  min-h-screen'>
        <div>
      <form className=' rounded-lg  w-96'>
        <h2 className="text-3xl font-bold text-center  text-black w-96">ENTER YOUR DETAILS</h2>
        <br />
        <input type="text" placeholder="Enter Your Name" className=" rounded w-96 py-2 px-3 mb-4 border border-blue-600" />
        <input type="email" placeholder="Enter Your Email" className="rounded w-96 py-2 px-3 mb-4 border border-blue-600" />
        <input type="text" placeholder="Card Number" className=" rounded w-96 py-2 px-3 mb-4 border border-blue-600" />
        <input type="text" placeholder="Address" className="rounded w-96 py-2 px-3 mb-4 border border-blue-600 " />
        <Link href="/thankyou"><button className="bg-blue-500 ml-28 mt-4 hover:bg-blue-900 text-white py-2 px-4 rounded  block ">Place Your Order</button></Link>
      </form>
    </div>
      
    </div>
        </div>
    
  )
}

export default from
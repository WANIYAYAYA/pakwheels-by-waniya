import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Link from 'next/link'
const jaguar = () => {
  return (
    <div>
      
      <div className="flex flex-col items-center bg-gray-200 p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mt-4 mb-6">
        <u>JAGUAR 2025 Price in Pakistan, Images, Reviews & Specs</u>
        </h1>

        <Image
          className="w-96 mt-4 shadow-lg rounded-md"
          src="/jaguar.jpeg"
          alt="Toyota Corolla 2024"
          height={350}
          width={600}
        />

<div className="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-4 sm:flex sm:justify-center">
  <button className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700">
    Book a Test Drive
  </button>
  <button className="bg-white text-blue-600 border-2 border-blue-600 rounded-md px-6 py-2 hover:bg-blue-600 hover:text-white">
    Request Bank Finance
  </button>
  <button className="bg-white text-blue-600 border-2 border-blue-600 rounded-md px-6 py-2 hover:bg-blue-600 hover:text-white">
    Visit Place
  </button>
  <button className="bg-white text-blue-600 border-2 border-blue-600 rounded-md px-6 py-2 hover:bg-blue-600 hover:text-white">
    Car Inspection
  </button>
</div>

        <h3 className="text-2xl font-serif text-gray-700 mt-6 mb-4">Vehicle Description</h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-600">
  <div className="flex flex-col">
    <span className="font-bold">Number of Doors:</span>
    <span>4</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold">Engine:</span>
    <span>1800 CC</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold">Condition:</span>
    <span>9.5 / 10</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold">Driven:</span>
    <span>95,000 KM</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold">Suspension Type:</span>
    <span>Soft Suspension</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold">Avg:</span>
    <span>13 KM per Ltr</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold">Transmission:</span>
    <span>Automatic</span>
  </div>
  <div className="flex flex-col">
    <span className="font-bold">Fuel Type:</span>
    <span>High Octane</span>
  </div>
</div>

<div className="mt-6">
  <span className="text-green-600 font-sans text-4xl block mb-4">PKR 2.5 CRORE</span>
  <Link href={"/form"}><button className="bg-blue-600 text-white rounded-md px-8 py-3 mt-4 ml-8 hover:bg-blue-700">
    Make Payment
  </button></Link>
</div>
      </div>
    </div>
  )
}

export default jaguar
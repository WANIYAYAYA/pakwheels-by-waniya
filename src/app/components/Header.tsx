import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return(
 <header className="bg-blue-950 text-white h-auto py-4">
  <div className="top-bar flex items-center justify-between gap-14 p-3 text-sm">
    <p className="flex items-center gap-2">
      <Image src="/phone.webp" alt="phone icon" width={20} height={20} />
      Download App via SMS
    </p>
    <p className="text-sm">SIGN IN | SIGN UP</p>
  </div>
  
  <div className="border-t-2 mx-6 border-gray-400 mb-4"></div>
  
  <div className="flex gap-20 items-center mx-8">
    <div className="logo">
    <Link href={"/"}> <Image className="w-40" src="/logo.webp" alt="PakWheels logo" height={80} width={80} /></Link> 
    </div>
    
    <nav className="nav-menu">
      <ul className="flex gap-6 text-lg font-semibold">
        <li>New Cars</li>
        <li>Used Cars</li>
        <li >Bikes</li>
        <li >Auto Store</li>
        <li >Videos</li>
        <li >Blogs</li>
        <li >Forums</li>
        <li >More</li>
      </ul>
    </nav>
    <button className='bg-red-600 rounded-lg border-separate w-36 px-4 py-2 hover:bg-red-800 font-semibold'>POST AN ADD</button>
  </div>
</header> 


  )
}

export default Header
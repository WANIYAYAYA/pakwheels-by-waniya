import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
   <div className="flex flex-row space-x-4">
  <div className="flex ml-8 mt-8 flex-col w-1/4">
    <h4 className="text-xl mb-5">CAR BY MAKE</h4>
    <span>Toyota Cars for Sale</span>
    <span>Suzuki Cars for Sale</span>
    <span>Honda Cars for Sale</span>
    <span>Daihatsu Cars for Sale</span>
    <span>Mitsubishi Cars for Sale</span>
    <span>Nissan Cars for Sale</span>
    <span>Mercedes Cars for Sale</span>
    <span>Hyundai Cars for Sale</span>
    <span>BMW Cars for Sale</span>
  </div>
  
  <div className="flex flex-col mt-8 w-1/4">
    <h4 className="text-xl mb-5">CAR BY CITY</h4>
    <span>CARS IN KARACHI</span>
    <span>CARS IN LAHORE</span>
    <span>CARS IN ISLAMABAD</span>
    <span>CARS IN RAWALPINDI</span>
    <span>CARS IN MULTAN</span>
    <span>CARS IN SARGODA</span>
    <span>CARS IN SIALKOT</span>
  </div>

  <div className="flex flex-col mt-8 w-1/4">
    <h4 className="text-xl mb-5">EXPLORE PAKWHEELS</h4>
    <span>USED CARS</span>
    <span>NEW CARS</span>
    <span>USED BIKES</span>
    <span>COOL RIDES</span>
    <span>FORUMS</span>
    <span>AUTOSHOW</span>
    <span>SITEMAP</span>
  </div>

  <div className="flex flex-col mt-8  w-1/4">
    <h4 className="text-xl mb-5 ">PAKWHEELS.com</h4>
    <span>ABOUT PAKWHEELS</span>
    <span>OUR PRODUCTS</span>
    <span>HOW TO PAY</span>
    <span>FAQs</span>
    <span>CONTACT US</span>
    <span>REFUNDS</span>
    <span>CAREERS</span>
  </div>
</div>

    
  <div className="border-t-2 mx-6 border-gray-400 mt-6 mb-4"></div>
  <div className="mt-14 text-center">
    <p>
    Copyright © 2003 - 2025 PakWheels (Pvt) Ltd. - All Rights Reserved.
    </p>
    <p>Terms of Service |  Privacy Policy</p>
    <p>Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.</p>
  </div>
    </footer>
  );
};

export default Footer;

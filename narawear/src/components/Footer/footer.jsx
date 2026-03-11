import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaSlackHash } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';

// Import Swiper styles
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const footer = () => {
  return (
    <>
    <LastSlider />
    <footer className='bg-gray-800 text-white py-10 mt-7'>
   <div className='max-w-full mx-auto px-4 flex items-center flex-col sm:flex-row sm:flex-wrap justify-around gap-8'>
   <div>
     <h6 className='font-semibold mt-4 text-gray-400'>SERVICES</h6>
   <ul className='space-y-2 text-sm mt-2'>
    <li><a href="#" className='hover:underline'>Branding</a></li>
    <li><a href="#" className='hover:underline'>Design</a></li>
    <li><a href="#" className='hover:underline'>Marketing</a></li>
    <li><a href="#" className='hover:underline'>Advertisement</a></li>
    <li><a href="#" className='hover:underline'></a></li>
   </ul>
   </div>
   <div>
     <h6 className='font-semibold mt-4 text-gray-400'>LEGAL</h6>
   <ul className='space-y-2 text-sm mt-2'>
    <li><a href="#" className='hover:underline'>Terms of use</a></li>
    <li><a href="#" className='hover:underline'>Privacy policy</a></li>
    <li><a href="#" className='hover:underline'>Cookie policy</a></li>
   </ul>
   </div>
   <div>
     <h6 className='font-semibold mt-4 text-gray-400'>EXPLORE</h6>
   <ul className='space-y-2 text-sm mt-2'>
    <li><a href="#" className='hover:underline'>Features</a></li>
    <li><a href="#" className='hover:underline'>Enterprise</a></li>
    <li><a href="#" className='hover:underline'>Security</a></li>
    <li><a href="#" className='hover:underline'>Pricing</a></li>
   </ul>
   </div>
   <div>
     <h6 className='font-semibold mt-4 text-gray-400'>COMPANY</h6>
   <ul className='space-y-2 text-sm mt-2'>
    <li><a href="#" className='hover:underline'>About us</a></li>
    <li><a href="#" className='hover:underline'>Contact</a></li>
    <li><a href="#" className='hover:underline'>Jobs</a></li>
    <li><a href="#" className='hover:underline'>Press kit</a></li>
   </ul>
   </div>
   <div>
     <h6 className='font-semibold mt-4 text-gray-400'>SOCIAL</h6>
   <ul className='space-y-2 text-sm mt-2'>
    <li><a href="#" className='hover:underline'>Twitter</a></li>
    <Link to={"www.instagram.com/?hl=en"}> <li><a href="#" className='hover:underline'>Instagram</a></li></Link>
   
    <li><a href="#" className='hover:underline'>Facebook</a></li>
    <li><a href="#" className='hover:underline'>GitHub</a></li>
   </ul>
   </div>
   <div>
     <h6 className='font-semibold mt-4 text-gray-400'>APPS</h6>
   <ul className='space-y-2 text-sm mt-2'>
    <li><a href="#" className='hover:underline'>Mac</a></li>
    <li><a href="#" className='hover:underline'>Windows</a></li>
    <li><a href="#" className='hover:underline'>iPhone</a></li>
    <li><a href="#" className='hover:underline'>Android</a></li>
   </ul>
   </div>
   </div>
    
    </footer>
    <Icons />
    <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side - Copyright Text */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Rockwear*</span>. All rights reserved.
        </p>

        {/* Right Side - Links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default footer


const Icons = () => {
  return (
    <footer className='bg-gray-100  text-gray-800 rounded p-10'>
   <div className='max-x-full mx-auto flex flex-col items-center space-y-6'>
       <div className='flex gap-4'>
    <FaSlackHash className='h-20 w-20'/>
    <p className='text-semibold text-xl'>Rockwear industries Ltd.
        Providing reliable tect since 1992!
    </p>
        </div>
     <nav className='flex items-center space-x-6 gap-6'>
      <FaTwitter className='h-15 w-15'/>
      <FaYoutube className='h-15 w-15'/>
      <FaFacebookF className='h-15 w-15'/>
     </nav>
   </div>
    </footer>
  )

}


const LastSlider = () => {
  return (
    <div className='mt-7'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
              <img
            src="https://uspoloassn.in/cdn/shop/files/The_Varsity_Collection_Desktop_3.jpg?v=1756891115"
            alt="add"
           className="w-[100vw] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
              <img
            src="https://uspoloassn.in/cdn/shop/files/WW_Shirts_desktop.jpg?v=1756998426"
            alt="add"
           className="w-[100vw] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
              <img
            src="https://uspoloassn.in/cdn/shop/files/WW_Dress_Desktop.jpg?v=1756998909"
            alt="add"
           className="w-[100vw] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
             <img
            src="https://uspoloassn.in/cdn/shop/files/Rohit_Desktop.jpg?v=1756999198"
            alt="add"
           className="w-[100vw] object-cover"
          />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
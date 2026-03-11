import React from 'react'
import Asidebar from './AsideBar/Asidebar'

const About = () => {
  return (
      <div>
          <Asidebar />
        <div className='mt-20 bg-gray-200 w-full h-screen'>
          
            <h1 className='text-green-300 text-center mt-4 font-semibold text-8xl'>N a r a w e a r *</h1>
               <div className='text-black-500 text-center mt-8 font-bold'>
                  <p>NEW AGE</p>
                  <p>REAL</p>
                  <p>ATTIRE</p>
               </div>
          <div className="w-[600px] mt-10 mx-auto flex justify-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC00731.webp?v=1752235905"
          alt="Top"
          className="w-full object-cover rounded-lg"
        />
          <div className='ml-20'>
            <h2 className='flex text-pink-400 text-4xl font-bold'>Who We Are</h2>
            <p className='font-thin mt-20 text-xl'>Welcome to NARA—where we’re reimagining Indian heritage for the modern world. Our designs fuse timeless fabrics with edgy styles, creating fashion that’s as daring as it is affordable. Dive in, stand out, and join us on a journey to revolutionize your wardrobe!</p>
          </div>
        </div>
           <div className='mt-20'>
            <img
          src="https://uspoloassn.in/cdn/shop/files/WW_Dress_Desktop.jpg?v=1756998909&width=1500"
          alt="Top"
          className="w-full object-cover rounded-lg"
        />
          <p className="mt-4 font-extralight" >At NARA, the asterisk in the logo symbolizes more than just a design element—it represents our commitment to going above and beyond in everything we do. Just like an asterisk invites you to explore more information, NARA is more than just a name; it’s a mark of distinction. Each piece of clothing carries that extra layer of character, highlighting our dedication to craftsmanship, quality, and the finer details. We’re here to offer more than just fashion—we’re about adding depth and meaning to every design.</p>
           </div>
           <div className=''>
             <h1 className='text-blue-800 text-3xl mt-5 mb-3 text-center'>  Our Journey </h1>
            <h2 className='flex flex-col md:flex-row gap-6 p-6 text-2xl font-light'>
             
1900s
The Swadeshi Movement boycotts imported textiles
1930s-
Three Lalbhai brothers set up a mill for fine fabric
1990s-
Arvind becomes the world’s third-largest denim manufacturer
2000s -
Arvind Mills renamed Arvind Limited. Vision: House of Brands Pioneers in bringing global fashion to India
2013s -
Arvind Internet Ltd founded to enable Arvind’s e-commerce vision
2014s -
Custom clothing experience Creyate launches, with you as designer
2015s -
Online-only fast fashion labels SHUFFLE and PRYM enter the market
2016s
Est. since NNNOW
            </h2>
           </div>
           <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Side - Copyright Text */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Narawear*</span>. All rights reserved.
        </p>

        {/* Right Side - Links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
        </div>
        </div>
  )
}

export default About

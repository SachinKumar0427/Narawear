import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full my-6 mt-14  rounded-lg overflow-hidden">
      <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  loop={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
         <ImageGallery />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0722/8951/7782/collections/DSC05316.jpg?v=1751026751"
            alt=""
           className="w-[100vw] object-cover h-[90vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0722/8951/7782/collections/website_banner_1.png?v=1752236227"
            alt=""
         className="w-[100vw] object-cover h-[100vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0722/8951/7782/collections/DSC00731.webp?v=1751027316"
            alt=""
           className="w-[100vw] h-[100vh] object-cover"
          />
        </SwiperSlide>
      </Swiper>

       <div className="p-6">
        <h1 className="text-3xl font-semibold">NEWEST ARRIVALS</h1>
        <p className="mt-2 text-gray-700">Discovery the latest additions to uer collection!</p>
         <button class="mt-5 ml-4 bg-white hover:bg-orange-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-xl">
  Shop all
</button>
      </div>


  



    </div>
    
  );
}





const ImageGallery = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
      {/* Images Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <img
          src="https://uspoloassn.in/cdn/shop/files/Earthy_Elegance_a8046e1b-50c8-46e3-a3a2-0c59a2edb577.jpg?v=1755523821"
          alt="Image 1"
          className="rounded-lg transform hover:scale-105 transition duration-300 h-[40vh]"
        />
        <img
          src="https://uspoloassn.in/cdn/shop/files/the_olive_edit.jpg?v=1755516200"
          alt="Image 2"
          className="rounded-lg transform hover:scale-105 transition duration-300 h-[40vh]"
        />
        <img
          src="https://uspoloassn.in/cdn/shop/files/Modern_Monochrome.jpg?v=1755516200"
          alt="Image 3"
          className="rounded-lg transform hover:scale-105 transition duration-300 h-[40vh]"
        />
        <img
          src="https://uspoloassn.in/cdn/shop/files/reimagined_heritage.jpg?v=1755516199"
          alt="Image 4"
          className="rounded-lg transform hover:scale-105 transition duration-300 h-[40vh]"
        />
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 text-lg mb-4">
        Welcome to our image gallery! Enjoy these beautiful pictures and explore
        more by clicking the button below.
      </p>

      {/* Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transform hover:scale-105 transition duration-300">
        Explore More
      </button>
    </div>
  );
};



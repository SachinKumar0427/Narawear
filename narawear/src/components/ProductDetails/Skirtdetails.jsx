import Asidebar from "../AsideBar/Asidebar";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Skirtdetails = () => {
  return (
    <>
    <Asidebar />
    <div className="flex mt-10 gap-5 p-10 min-h-screen">
      <div className="">
        {/* First Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC00857.webp?v=1752235872"
          alt="First"
          className="w-64 h-40 object-cover rounded-lg shadow-md transition-transform duration-300"
        />

        {/* Skirtvertical Component */}

        {/* Second Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC02072.webp?v=1752235870"
          alt="Second"
          className="w-64 mt-4 h-40 object-cover rounded-lg shadow-md  transition-transform duration-300"
        />

        {/* Third Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC02073.webp?v=1752235866"
          alt="Third"
          className="w-64 mt-4 h-40 object-cover rounded-lg shadow-md  transition-transform duration-300"
        />
      </div>
      <div>
        <Skirtvertical />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="ml-4 font-bold flex-1 w-full p-5">
          <h1 className="mt-2  text-2xl">Ivy Tie- up Boho Skirt</h1>
          <h1 className="font-bold text-2xl">INR 1499.00</h1>
          <p className="font-mono">(Incl. of all taxes)</p>
        </div>
        <div className="font-bold  p-5 w-full h-[380px]">
          <h2 className="font-semibold text-3xl">Description</h2>
          <p className="font-light text-lx">
            Explore the Ivy Tie- up Boho Skirt A structured cotton boho skirt in
            deep green, featuring a curved fishtail shape and a soft fold at the
            front. The side-tie adds quiet detail and creates a gentle shape.
            Ivy is designed for ease, movement, and subtle definition — perfect
            for long days and slow evenings.
          </p>
          <p className="font-mono">
            Fabric: 100% Cotton Fit: High-waisted, asymmetrical hem with
            side-tie detail Style Tip: Pair with a minimal top and flats for a
            balanced summer look
          </p>
          <p className="font-light text-lx">
            Stylish Design The Ivy Tie-up Skirt is designed with fashion in
            mind. Its unique tie-up detail adds a playful twist, making it a
            perfect addition to your wardrobe. You can wear it for casual
            outings or dress it up for special occasions. The aesthetic appeal
            lies not only in its stylish appearance but also in its versatility,
            which means you can pair it with various tops and accessories for an
            effortless yet chic look. Comfortable Fit This skirt offers a
            comfortable fit that allows you to move freely. Made from
            high-quality materials, it feels soft against the skin, making it
            ideal for all-day wear. The Ivy Tie-up Skirt comes in various sizes,
            ensuring you find the perfect fit. Because of its adjustable tie-up
            feature, you can customize the waistband for added comfort, so you
            can enjoy your day without any restrictions. Easy Care Taking care
            of the Ivy Tie-up Skirt is easy,
          </p>
              {/* dress size  */}
             <div className="mt-2">
               <h1 className="mt-5 text-xl text-underline">Selet Size Below</h1>
               <div className="mt-3 flex gap-4">
                  <button className="hover:bg-green-600 border border-green-400  p-1">XS</button>
                  <button className="hover:bg-green-600 border border-green-400 p-2.5">S</button>
                  <button className="hover:bg-green-600 border border-green-400 p-2">M</button>
                  <button className="hover:bg-green-600 border border-green-400 p-2.5">L</button>
                  <button className="hover:bg-green-600 border border-green-400 p-1">XL</button>
               </div>
             <div className="mt-5 flex gap-3 mb-2">
              <button className="flex font-semibold gap-1 border border-2 bg-green-900 border-green-400 p-2">
                <h1>+</h1>
                Add Item
              </button>
              <button className="border border-2 border-white-400 p-2">Buy Now</button>
             
             </div>
              <div className="mt-5">
                <h1 className="text-4xl bg-gray-[10px] space-x-10 flex justify-center">
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
</h1>

              </div>
             </div>
        </div>
      </div>
    </div>


    <h1 className="text-6xl mt-4 p-4 ml-10 text-gray-400 font-semibold">Related Products</h1>


      <div className=" mt-20 object-cover flex-wrap  bg-white rounded-2xl shadow-md p-4  transition duration-300 flex justify-center flex-col xl:flex-row items-center gap-7">
      <div className="bg-gray-150  w-[300px] border hover:border-black rounded hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/TheRedontheRunCo-ordset-1stpic-min.webp?v=1752235762"
          alt="Top"
          className="w-full object-cover rounded-lg"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">Top</h2>
          <p className="text-gray-600 text-sm">The Red on the Run Co-ord set</p>
          <p className="text-lg font-semibold text-green-600 mt-2">₹2249.00</p>
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>
      <div className="w-[300px] hover:border-black rounded hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/OutoftheOfficeCo-ordset-4thpic-min.webp?v=1752235776"
          alt="Skirt"
          className="w-full object-cover rounded-lg"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">Co-ord</h2>
          <p className="text-gray-600 text-sm">The Out of the Office Co-ord set</p>
          <p className="text-lg font-semibold text-green-600 mt-2">₹1345.00</p>
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>

      <div className="w-[300px] hover:border-black rounded hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/LaidbackLuxeCo-ordSet-1stpic-min.webp?v=1752235810"
          alt="Top"
          className="full-w  rounded-xl object-cover"
        />
        <div className="mt-4">
          <h1 className="text-xl font-bold text-gray-800">Top</h1>
          <p className="text-gray-600 text-sm">The Midnight Ikat Co-ord set</p>
          <p className="text-semibold mt-2 text-green-600 text-xl">₹2450.00</p>
        </div>
        <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>
        
      <div className="w-[300px] hover:border-black rounded hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC00798.webp?v=1752235921"
          alt="Top"
          className="full-w  rounded-xl object-cover"
        />
        <div className="mt-4">
          <h1 className="text-xl font-bold text-gray-800">Top</h1>
          <p className="text-gray-600 text-sm">Sage Structured Trendy Top</p>
          <p className="text-semibold mt-2 text-green-600 text-xl">₹799.00</p>
        </div>
        <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>
      </div>
    </>
  );
};

export default Skirtdetails;

function Skirtvertical() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[700px] w-[450px]"
      >
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC02089.webp?v=1752235859"
            alt=""
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC02072.webp?v=1752235870"
            alt=""
            className=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC02073.webp?v=1752235866"
            alt=""
            className="object-fill"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React from "react";
import { Link } from "react-router";

const Shopping = () => {
  return (
    <>
    <Link to={"/products"}>
    <div className=" flex justify-center flex-col xl:flex-row mt-5 ">
      <div className="w-[200] transform hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/LaidbackLuxeCo-ordSet-1stpic-min_600x600.webp?v=1752235810"
          alt="clothes"
          className="w-full   rounded-xl"
        />
        <h2 className="text-2xl font-semibold text-black-600 text-center ">OutFit</h2>
      </div>
      <div className="w-[200] transform hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/NoirIkatShort-sleeveShirt-2ndpic-min_600x600.webp?v=1752235644"
          alt="clothes"
          className="w-full h-74 object-cover rounded-xl"
        />
        <h2 className="text-2xl font-semibold text-black-600 text-center">fasion</h2>
      </div>
      <div className="w-[200] transform hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/JuneBell-bottomPants-1stpic-min_600x600.webp?v=1752235636"
          alt="clothes"
          className="w-full h-74 object-cover rounded-xl"
        />
        <h2 className="text-2xl font-semibold text-black-600 text-center">Jeans</h2>
      </div>
      <div className="w-[200] transform hover:scale-105">
        <img
          src="https://cdn.shopify.com/s/files/1/0722/8951/7782/files/SkyIkatFull-sleeveShirtUNISEX-1stpicture-min_600x600.webp?v=1752235679"
          alt="Shirt"
          className="w-full h-74 object-cover rounded-xl"
        />
        <h2 className="text-2xl font-semibold text-black-600 text-center">Shirt</h2>
      </div>
    
    </div>
    <div className="mt-14">
        <h1 className="text-2xl ml-4 font-semibold  text-black-600 font-mono">IN THE SPOTLIGHT!</h1>
        <p className="mt-5 ml-4 text-xl font-sm text-black-400 leading-8 font-mono">Look what pepole are loving the most this season</p>
        <button class="mt-5 ml-4 bg-white hover:bg-orange-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-xl">
  View all
</button>
      </div>
      </Link>
    </>
  );
};

export default Shopping;

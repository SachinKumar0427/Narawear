import React, { useState } from "react";
import { Sidebar } from "../../mockData/data";

import { FaCartArrowDown, FaCross } from "react-icons/fa6";
import { GiClothes, GiCrossMark } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import CartOrder from "../../pages/CartOrder";
import Searchbar from "../../pages/Searchbar";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

const Asidebar = () => {
  const [open, setOpen] = useState(false);
  //  conditonal rendering for Searchbar 
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 cursor-pointer">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 gap-6">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase cursor-pointer">
            <GiClothes className="text-blue-600" />
                                       
                                         
            <p className="text-blue-600 xl:block hidden">Rockwear</p>
          </div>

          {/* Desktop Menu */}

              {/* condition ? expression1 : expression2 */}

           <div className="">
            <ul className="flex items-center xl:gap-10 text-gray-700 font-medium text-xs  lg:text-lg">
              {Sidebar.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-blue-600 transition duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
         

          {/* Icons + Mobile Hamburger */}
          <div className="flex items-center gap-4">
             {/* seacrbar open or close karne ke liye */}
            {/* <button className="text-2xl hover:bg-blue-600 hover:text-white rounded-full p-2 duration-200">
              {searchOpen ? <RxCross1 onClick={()=>setSearchOpen(false)} /> : <CiSearch onClick={()=>setSearchOpen(true)} />}
            </button> */}
            
            {/* profile icon */}
            
            <div className="text-2xl hover:bg-blue-600 hover:text-white rounded-full p-2 duration-200">
              <Link to={"/account"}> <CgProfile  /></Link>
            </div>
                
               {/* Cartorder ko opne or close karne ke liye  */}
            <div className="text-2xl hover:bg-blue-600 hover:text-white rounded-full p-2 duration-200">
              <FaCartArrowDown onClick={() => setOpen(true)} />
              <CartOrder isVisible={open} onClose={() => setOpen(false)} />
               
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Asidebar;

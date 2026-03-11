import React, { useEffect, useRef, useState } from "react";
import Asidebar from "../AsideBar/Asidebar";
import { Link, useLocation } from "react-router";
import { CiSearch } from "react-icons/ci";

const Product = () => {
  // apne cmd ke server ke detabase se connect karna
  const path = useLocation()
  const [allProducts, setAllProducts] = useState([]);

  // fetch Allproduct data with frontend by useing useEffects

  async function fetchProducts() {
    try {
      let response = await fetch("http://localhost:8080/product/all");
      if (!response.ok)
        throw new Error("Could not fetch products at this moment!");

      response = await response.json();

      setAllProducts(response.message);
    } catch (error) {}
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle product search
  const searchInputRef = useRef(null);
  const searchHandler = ()=>{
    const searchTerm = searchInputRef.current.value.toLowerCase().trim()
    if(searchTerm.length>0){
      //  in tihs time humne jo product search kiya h wo milta h 
      setAllProducts(prevProducts=>prevProducts.filter(product=>product.title.toLowerCase().includes(searchTerm)))
    }else{
      // or jab humne kuch bhi sreach nahi kiya to fetchAllProducts kardo 
      fetchProducts();
    }
  }

  return (
    <div>
      <Asidebar />
          {/* path term ka use karne se hume jais page me searchbar chaiye wahi laga sakte h  */}
      {path.pathname =="/products" &&
      <div>
        <div className="mt-[90px] ml-[400px] inline-flex items-center justify-center border border-gray-400 px-5 py-2  rounded-full w-3/4 sm:w-1/2">
          <input
            type="text"
            className="flex-1 outline-none bg-inherit text-sm "
            placeholder="Search"
            onChange={searchHandler}
            ref={searchInputRef}
          />
          <button onClick={searchHandler}><CiSearch /></button>
          
        </div>
      </div>}

      <div className=" mt-20 object-cover flex-wrap  bg-white rounded-2xl shadow-md p-4  transition duration-300 flex justify-center flex-col xl:flex-row items-center gap-7">
        {/* All product */}

        {allProducts.map((product) => (
          <Link key={product._id} to={"/productdetail/" + product._id}>
            <div className="w-[300px] hover:border-black rounded hover:scale-105">
              <img
                src={"http://localhost:8080/image/" + product.images[0]}
                alt="Top"
                className="full-w object-cover rounded-xl"
              />

              <div className="mt-4">
                <h1 className="text-xl font-bold text-gray-800">
                  {product.title}
                </h1>
                <p className="text-sm text-gray-800">
                  {" "}
                  Regular Fit Solid Shirt
                </p>
                <p className="text-xl mt-2  tracking-tight font-semibold ">
                  INR {product.price}.00
                </p>
              </div>

              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;

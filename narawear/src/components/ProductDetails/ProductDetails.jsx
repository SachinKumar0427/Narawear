import { Swiper, SwiperSlide } from "swiper/react";
import Asidebar from "../AsideBar/Asidebar";
// import "swiper/css";
import { useContext, useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { useParams } from "react-router";
import { userContext } from "../../store/UserContextProvider";
// kisi bhi tara ka Alert dekhana ho jaise warring, error, successful, etc tab hu toast ka use karte h 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ProductDetails() {
  const [product, setProduct] = useState({})
  //  jab hum kar cart me item add karte h tab uske size ke liye sizeState 
  const [size, setSize] = useState("")
  // params me hume product or productId milta h 
  const params = useParams();

  // grid grid-cols-[100px_450px_1fr]
  const [productSlider, setProductSlider] = useState(null);
  const images = [
    "https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC06107.jpg?v=1757510289",
    "https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC05457.jpg?v=1757510293",
    "https://cdn.shopify.com/s/files/1/0722/8951/7782/files/DSC05407.jpg?v=1757510296",

  ];

  const fetchProduct = async()=>{
    try {
      // 68ecdd786ec75c504d21d2e0
      //  68ee15470757754bc0a8503b
      let response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/product/"+params.productId);
      if(!response.ok) throw new Error("Could not fetch Product!");
      response = await response.json()
      console.log(response.message)
      const fetchedProduct = response.message
      setProduct(fetchedProduct)
      // sizeState ko hum yaha place karte h 
      setSize(fetchedProduct.sizes[0])
      
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchProduct()
  }, [])


  const userState = useContext(userContext)

  // ye Add item ka State h jab hume add button ko click karte h first time 
  // button able rhe ga or jab item Add ho jaye to kuch second ke liye wo button disabled ho jaye ga 
  const [addingToCart, setAddingToCart] = useState(false)

    
//  ye Add itme button ke liye function 
  async function addToCartHandler(){

    try {
        // Add item button able
      setAddingToCart(true)

      let response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/cart/add", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({productId: params.productId, size}),
        credentials: "include"
      });

      if(!response.ok){
        throw new Error("Could not add to cart at this moment!");
      }
      
      response = await response.json()
      //  yaha per cart me product ka full data h 
      const cart = response.cart;
  //  userContext se (userState) aaya h iska use currentData jo bhi humere cart me add h wo or new cart Add karne ke liye use karte h 
      userState.setUser(currentData=>({...currentData, cart}));

      // jabbhi mera item Cart me Add hoga tab mujhe toast mujhe Added to Cart ka popep dega 
      toast.success("Added to cart!")
    } catch (error) {
      // same toast hare
      toast.error("Could not add to cart at this moment!");
    }finally{
      // Add item button disabled
      setAddingToCart(false)
    }
  }
  return (
    <>
     <Asidebar />
    <div className="flex gap-4 p-12 mt-8 flex-col xl:flex-row ">
        {/* here we are manage toast custim  */}
       <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <div className="w-1/2 flex gap-4">
       {/* Sabse left wala image slide show controller */}
        <div className="flex flex-col gap-2 cursor-pointer max-h-[500px] overflow-hidden">
            <ProductSlideController images={product.images} productSlider={productSlider} />
            <div className="flex mt-6 flex-col items-center gap-2 text-xl">
                <button className="" onClick={()=>productSlider.slidePrev()}><FaChevronUp size={24} /></button>
                <button onClick={()=>productSlider.slideNext()}><FaChevronDown size={24} /></button>
            </div>
        </div>
        {/* Main slide show */}
        <div>
          <ProductImageSlider
            setProductSlider={setProductSlider}
            images={product.images}
          />
        </div>
      </div>
      {/* Product Detail Section */}
      <div className="w-1/2">
       <div className="flex-1 mt-6 max-h-[800px] overflow-hidden">
        <div className="ml-4 font-bold flex-1 w-full p-5">
          <h1 className="mt-2  text-2xl">{product.title}</h1>
          <h1 className="font-bold text-2xl">INR {Number(product.price).toFixed(2)}</h1>
          <p className="mt-2 text-gray-800 tracking-tighter capitalize">(Incl. of all taxes)</p>
        </div>
        <div className="font-bold  p-5 w-full h-[380px]">
          <h2 className="font-semibold text-3xl">Description</h2>
          <p className="font-light text-lx">
          {product.description}
          </p>
          
              {/* dress size  */}
             <div className="mt-2">
               <h1 className="mt-5 text-xl text-underline">Selet Size Below</h1>
               <div className="mt-3 flex gap-4">
                                                                                                                                                 {/* sizeState */}
                  {product?.sizes?.map(el=><button onClick={()=>setSize(el)} className={`hover:bg-green-600 border border-green-400  p-2 px-4 ${size==el?"bg-green-500 text-white": "bg-white"}`}>{el}</button>)}
                  
               </div>
             <div className="mt-5 flex gap-3 mb-2">
                        {/* jab Add item hoga tab button disabled hoga kuch second ke liye */}
              <button disabled={addingToCart} onClick={addToCartHandler}  className={`flex font-semibold gap-1 border border-2 bg-green-400 border-green-400 p-2 disabled:bg-gray-200 disabled:border-none disabled:cursor-not-allowed   disabled:text-gray-100`}>
                <h1>+</h1>
                Add Item
              </button>
              <button className="border border-2 border-white-400 p-2">Buy Now</button>
             
             </div>
             
             </div>
        </div>
      </div>
    </div>


      </div>
 </>
  );
}


// Sabse left wala jo chhota chhota image hain n uska slide show aur jo slide control ka bhi kaam krta hai
function ProductSlideController({images, productSlider}){
    return(
        <Swiper
            direction={"vertical"}
            className="h-[500px] w-[100px]"
            slidesPerView={3}
            spaceBetween={30}
          >
            {images?.map((image, index) => (
              <SwiperSlide key={image}>
                <img src={import.meta.env.VITE_BACKEND_HOST+"/image/"+image} onClick={()=>productSlider.slideTo(index)} />
              </SwiperSlide>
            ))}
          </Swiper>
    )
}


// main product ka jo slider hai wo ye hai
function ProductImageSlider({ images, setProductSlider }) {
  return (
    <>
      <Swiper
        direction={"vertical"}
        className="h-[600px] w-[550px]"
        onSwiper={(swiperInstace) => setProductSlider(swiperInstace)}
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <img src={import.meta.env.VITE_BACKEND_HOST+"/image/"+image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



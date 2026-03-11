import Product from "../components/Products/Product";
import Asidebar from "../components/AsideBar/Asidebar";
import Slider from "../components/Swiper/Slider";
import Shop from "../components/Shop/Shop"
import Footer from "../components/Footer/footer";
import { useContext } from "react";
import { userContext } from "../store/UserContextProvider";

export default function Home(){
   
    return(
        <div>
            
    <Asidebar />
     <Slider />
     <Product />
     <Shop />
    
     <Footer />
            
        </div>
    )
}
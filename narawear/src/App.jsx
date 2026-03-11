import React, { Profiler } from "react";
import Product from "./components/Products/Product";
import Slider from "./components/Swiper/Slider";
import Asidebar from "./components/AsideBar/Asidebar";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/footer";
import Signupform from "./components/Forms/signupform";
import Login from "./components/Forms/login";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Registration from "./controlles/Registration";
import About from "./components/About";
import Skirtdetails from "./components/ProductDetails/Skirtdetails";
import Searchbar from "./pages/Searchbar";
import CartOrder from "./pages/CartOrder";
import Account from "./controlles/Account";
import OrderTracking from "./controlles/OrderTracking"; 
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Protect from "./components/Protect";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";
import { useEffect } from "react";
import { useContext } from "react";
import { userContext } from "./store/UserContextProvider";



const App = () => {
  // Addtocart fetch with Profile
  const userStore = useContext(userContext);
  async function fetchUserProfile() {
    try {
      let response = await fetch("http://localhost:8080/user/profile", {
        credentials: "include",
      });
      response = await response.json();
      const loggedInUser = response.message;
      userStore.setUser(loggedInUser);
    } catch {
      console.log("Not authenticated!");
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Shopping /> },
    { path: "/searchbar", element: <Searchbar /> },
    { path: "/about", element: <About /> },
    { path: "/productdetail/:productId", element: <ProductDetails /> },
    { path: "/footer", element: <Footer /> },
    { path: "/orders", element: <OrderTracking /> },

    //  Protect ka use jab karte h jab hum login hote h
    {
      element: <Protect />,
      children: [{ path: "/account", element: <Account /> }],
    },

    {
      element: <RedirectIfLoggedIn />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signupform /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;

// 1. searchbar par product search karne se hume product mile

// Responsive ke liye
// border-2 sm:border-4, md:border-6 md:p-4, lg, xl

import React, { useContext, useEffect, useState } from "react";
import OrderTracking from "../controlles/OrderTracking";
import { RxCross2 } from "react-icons/rx";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdSystemUpdateAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Addressform from "./information";
import { userContext } from "../store/UserContextProvider";

const Account = ({ isVisible, onClose }) => {
  const [addressformOpen, setAddressformOpen] = useState(false);
  const [accountDetails, setAccountDetails] = useState({});
  const navigate = useNavigate();
  async function logoutHandler() {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_HOST + "/user/logout",
        { credentials: "include" }
      );
      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error("Something went wrong!");
      }

      alert("Logged Out!");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }
  async function fecthAccountDetails() {
    try {
      let response = await fetch("http://localhost:8080/user/profile", {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Unauthorised");

      response = await response.json();
      setAccountDetails(response.message);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fecthAccountDetails();
  }, []);

  // hm context store se user detail nikal rhe hain

  const userState = useContext(userContext);

  function makeDefaultAddress(addressId) {
    return async () => {
      try {
        let response = await fetch(
          import.meta.env.VITE_BACKEND_HOST + "/user/address",
          {
            method: "PATCH",
            credentials: "include",
            body: JSON.stringify({ id: addressId }),
            headers: {"content-type": "application/json"}, 
          }
        );
        if(!response.ok) throw new Error("Something went wrong!");
        response = await response.json();
        userState.setUser(prevUser=>({...prevUser, addresses: response.message}));
      } catch (error) {
        console.log(error.message)
      }
    };
  }



  
  function deleteAddress(addressId) {
    return async () => {
      try {
        let response = await fetch(
          import.meta.env.VITE_BACKEND_HOST + "/user/address",
          {
            method: "DELETE",
            credentials: "include",
            body: JSON.stringify({ id: addressId }),
            headers: {"content-type": "application/json"}, 
          }
        );
        if(!response.ok) throw new Error("Something went wrong!");
        response = await response.json();
        userState.setUser(prevUser=>({...prevUser, addresses: response.message}));
      } catch (error) {
        console.log(error.message)
      }
    };
  }
  return (
    <div className="">
      {/* Address form */}
      {addressformOpen && (
        <div
          onClick={() => setAddressformOpen(false)}
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center "
          style={{ backdropFilter: "blur(5px)" }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Addressform />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between w-full border border-b-2">
        <h1 className="py-6 text-2xl ml-10 font-semibold ">MY ACCOUNT</h1>

        <Link to="/">
          <RxCross2 className="border border-2 border-gray-500 text-3xl mr-6" />
        </Link>
      </div>

      {/* small side section */}

      <div className="flex">
        <div className="border border-l-2 w-[450px] h-[650px]">
          <div className="mt-5">
            <h2 className="bg-gray-200 py-2 mr-2 mt-3 ml-3 font-light flex gap-2">
              <p> |</p>Account Details
            </h2>

            <h2 className="ml-3 border border-b-2 py-2 mr-2 pl-2 font-semibold">
              {" "}
             <Link to={"/orders"}>My Order</Link>
            </h2>
          </div>

          {/* Logout  */}

          <div className="flex items-center gap-2 justify-center mt-[500px] m-auto  border border-2 border-gray-500 w-[150px] font-thin ">
            <RiLogoutCircleLine className="text-xl" />
            <button onClick={logoutHandler} className="text-xl">
              Log out
            </button>
          </div>
        </div>

        {/* big side section */}
        <div>
          <div className="w-full">
            <div className="ml-10 mr-10 mt-10 border-b-2 border-gray-300">
              <div className="flex">
                <div className="flex items-center ">
                  <div className="mb-4 w-[500px] ">
                    <p className="font-thin ml-2">Your Name</p>
                    <h2 className="ml-3 text-xl font-semibold">
                      {accountDetails.name}
                    </h2>
                  </div>
                  <MdSystemUpdateAlt className="text-xl mr-4" />
                  <h1 className="text-5xl mb-5 text-gray-300">|</h1>
                </div>

                <div className="flex items-center ">
                  <div className="mb-4 ml-6 w-[500px] ">
                    <p className="font-thin ml-2">Email Address</p>
                    <h2 className="ml-3 text-xl font-semibold">
                      {accountDetails.email}
                    </h2>
                  </div>
                  <MdSystemUpdateAlt className="text-xl mr-4" />
                  <h1 className="text-5xl mb-5 text-gray-300">|</h1>
                </div>
              </div>
            </div>
          </div>

          {/* mobile number or password */}

          <div className="w-full">
            <div className="ml-10 mr-10 mt-10 border-b-2 border-gray-300">
              <div className="flex">
                <div className="flex items-center ">
                  <div className="mb-4 w-[500px] ">
                    <p className="font-thin ml-2">Phone Number</p>
                    <h2 className="ml-3 text-xl font-semibold">
                      +91 {accountDetails.phone}
                    </h2>
                  </div>
                  <MdSystemUpdateAlt className="text-xl mr-4" />
                  <h1 className="text-5xl mb-5 text-gray-300">|</h1>
                </div>

                <div className="flex items-center ">
                  <div className="mb-4 ml-6 w-[500px] ">
                    <p className="font-thin ml-2">Password</p>
                    <h2 className="ml-3 text-xl font-semibold">**********</h2>
                  </div>
                  <MdSystemUpdateAlt className="text-xl mr-4" />
                  <h1 className="text-5xl mb-5 text-gray-300">|</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Address Section */}
            <div className="flex flex-col justify-between p-12 gap-4">
              {/* Add Address Button */}
              <div className="flex justify-between">
                <h2 className="   w-20 font-semibold text-xl   rounded ">
                  Aadress
                </h2>
                <button
                  onClick={() => setAddressformOpen(true)}
                  className="border bg-gray-300 font-thin rounded py-2 px-6 "
                >
                  Add New Aadress
                </button>
              </div>
              {/* All Addresses: */}
              <div className="flex gap-2">
                {userState.user?.addresses
                  ?.sort((a, b) => b.defaultAddress - a.defaultAddress)
                  .map((address) => (
                    <div
                      className={`flex flex-col p-4 p-4 items-start gap-2  w-[450px] ${
                        address.defaultAddress ? "bg-yellow-200" : "bg-gray-200"
                      }`}
                    >
                      <h3 className="text-xl font-semibold">
                        {address.firstName + " " + address.lastName}
                      </h3>
                      <p className="text-lg mt-2">{address.phone}</p>
                      <p className="flex flex-wrap font-thin text-lg mt-5">
                        {address.addressLine1 + "," + address.addressLine2}{" "}
                      </p>

                      <p>{address.city + ", " + address.state}</p>
                      <div className="flex gap-4">
                        <button onClick={deleteAddress(address._id)} className="border border-black text-black cursor-pointer px-4 py-2 rounded font-mono p-1">
                          remove
                        </button>
                        {!address.defaultAddress && (
                          <button
                            onClick={makeDefaultAddress(address._id)}
                            className="border border-black text-black cursor-pointer px-4 py-2 rounded font-mono p-1"
                          >
                            Make Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
              {/* All addresses end here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

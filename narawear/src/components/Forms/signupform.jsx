import React from 'react'
import { Link, useNavigate } from 'react-router'
import Asidebar from '../AsideBar/Asidebar'

const signupform = () => {
  const navigate = useNavigate();
  async function signupHandler(e) {
    try {
      e.preventDefault();
      const name = e.target.fullname.value.trim();
      const email = e.target.email.value;
      const password = e.target.password.value.trim();
      const phone = e.target.phone.value;
      const credentials = {name, email, password, phone};
      
      const response = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        credentials: "include",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(credentials)
  
      });

      if(!response.ok){
        const error = await response.json();
        console.log(error);
        throw new Error("something went worng");
      }
      
      alert("signup successfully");
       navigate("/login")
    } catch (error) {
      console.log(error.message);
      alert("signup Failed")
      
    }
  }

  return (
     <div>
      <Asidebar />
   <div className="flex justify-center  items-center min-h-screen bg-gray-100 mt-20">
      <form onSubmit={signupHandler}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="">
          <label className="block mb-2 text-gray-700" >
            Full Name
          </label>
          <input
            type="fullname"
            name="fullname"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  "
            placeholder="Enter your name"
          />
        </div>
        <div className="">
          <label className="block mb-2 mt-2 text-gray-700" >
            Email
          </label>
          <input
            type="Email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  "
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mt-4 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mt-4 mb-2">
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duraction-200">
         SignUp
         
        </button>
  
         {/* signup page se login page per jane ke liye link tag ka use karna chaiye */}

           {/* <Link to={"/login"}>Login</Link>
            */}

    <div className='mt-4'>
        <Link to="/login" className="bg-blue-500  text-white px-20 py-2 rounded ">
Login
</Link>
    </div>



      </form>
    </div>
    </div>
  )
}

export default signupform

import React from "react";
import { Link, useNavigate } from "react-router";
import Account from "../../controlles/Account";

const login = () => {
  const navigate = useNavigate();
  async function loginHandler(e) {
    try {
      e.preventDefault();
      const email = e.target.email.value.trim();
      const password = e.target.password.value;
      const credentials = { email, password };

      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        credentials: "include",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(credentials)
      });
      if(!response.ok){
        const errror = await response.json();
        console.log(errror);
        throw new Error("Something went wrong!")
      }

      alert("Logged In")
      // jab neme login kar liya tab me direct /Account wale paga par jaaunga

      navigate("/account")
    } catch (error) {
      console.log(error.message)
      alert("Login Failed")
    }
  }
  return (
    <div className="flex justify-center  items-center min-h-screen bg-gray-100">
      <form
        onSubmit={loginHandler}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="">
          <label className="block mb-2 mt-2 text-gray-700">Email</label>
          <input
            type="Email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  "
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mt-6 mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        {/* <div className="mb-6">
          <label className="block text-gray-700 mt-4 mb-2">
            Enter otp
          </label>
          <input
            type="otp"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter your otp"
          />
        </div> */}

        <button
          type="Login"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        <div className='mt-4 mr-[20px]'>
        <Link to="/signup" className="bg-blue-500  text-white px-20 py-2 rounded ">
Signup</Link>
    </div>
      </form>
    </div>
  );
};

export default login;

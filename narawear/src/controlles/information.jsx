   import React from 'react';


   
   const Addressform = () => {

    async function submitHandler(e) {
    try {
      e.preventDefault();
      const firstName = e.target.firstname.value.trim();
      const lastName = e.target.lastname.value;
      const phone = e.target.phone.value.trim();
      const addressLine1 = e.target.addressLine1.value;
      const addressLine2 = e.target.addressLine2.value;
      const state = e.target.state.value;
      const city = e.target.city.value;
      const pincode = e.target.pincode.value;
      const credentials = {firstName, lastName, phone, addressLine1, addressLine2, state, city, pincode};
      console.log(credentials)
      
      const response = await fetch("http://localhost:8080/user/address", {
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
      
      alert("address add successfully");
  
    } catch (error) {
      console.log(error.message);
      alert("Failed")
      
    }
  }


    
     return (
        
        <form onSubmit={submitHandler} 
        className='h-[650px] w-[450px] overflow-y-scroll p-8 bg-white rounded-lg shadow-lg'>
          <div className='ml-20'>
                    <h1 className='font-bold text-2xl'>Add Address</h1>
                     
           <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>First Name</h1>
        <input type="text" name='firstname' placeholder='Enter you are name'  className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>Last Name</h1>
        <input type="text" name='lastname' placeholder='Enter you are last kumar'  className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>Phone</h1>
        <input type="text" name='phone' placeholder='+911234567890'  className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>Address Line 1</h1>
        <input type="text" name='addressLine1' placeholder='1/4 Pragatinagar Flats, opp, jai'  className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>Address Line 2</h1>
        <input type="text" name='addressLine2' placeholder='near Jain Derasar, Vijaynagar Ro'  className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>State</h1>
               <select text="text" name='state' className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'>
        <option value="">-- Select State --</option>
        <option value="Delhi">Delhi</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Bihar">Bihar</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Rajasthan">Rajasthan</option>
      </select>
      <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>Pin code</h1>
        <input type="text" name='pincode' placeholder='121004'  className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           </div>
           <div className='mt-4'>
             <h1 className='text-xl font-mono mb-3'>City</h1>
        <input type="text" name='city' placeholder='Delhi' className='border border-gray-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500' />
           </div>

           <button className='bg-blue-700 mt-8 py-2 px-14 ml-4 font-semibold text-white hover:bg-blue-900 rounded-xl'>SUBMIT</button>

           </div>
           </div>
        </form>
       
     )
   }
   
   export default Addressform
   
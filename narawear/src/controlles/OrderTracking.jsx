// import React from "react";


// const OrderTracking = () => {
//   const order = {
//     orderId: "ORD123456",
//     product: {
//       image: "https://via.placeholder.com/120",
//       title: "Wireless Headphones",
//       price: "₹2,499",
//       size: "Medium",
//     },
//     status: "Out for Delivery",
//     expectedDelivery: "Nov 6, 2025",
//     steps: ["Order Placed", "Shipped", "Out for Delivery", "Delivered"],
//   };

//   // find current step index
//   const currentStep = order.steps.indexOf(order.status);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
//       {/* Header */}
//       <h1 className="text-2xl font-semibold mb-4 text-gray-800">
//         Order Tracking
//       </h1>

//       {/* Order Info Card */}
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
//         <div className="flex items-center space-x-4 border-b pb-4 mb-4">
//           <img
//             src={order.product.image}
//             alt={order.product.title}
//             className="w-20 h-20 rounded-lg object-cover"
//           />
//           <div className="flex-1">
//             <h2 className="text-lg font-semibold text-gray-800">
//               {order.product.title}
//             </h2>
//             <p className="text-gray-600">Size: {order.product.size}</p>
//             <p className="text-blue-600 font-medium">{order.product.price}</p>
//           </div>
//         </div>

//         {/* Order Details */}
//         <div className="text-sm text-gray-700 mb-6">
//           <p>
//             <span className="font-medium text-gray-900">Order ID:</span>{" "}
//             {order.orderId}
//           </p>
//           <p>
//             <span className="font-medium text-gray-900">Expected Delivery:</span>{" "}
//             {order.expectedDelivery}
//           </p>
//           <p>
//             <span className="font-medium text-gray-900">Current Status:</span>{" "}
//             {order.status}
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="relative flex justify-between items-center mb-2">
//           {order.steps.map((step, index) => (
//             <React.Fragment key={index}>
//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
//                     ${
//                       index <= currentStep
//                         ? "bg-blue-600 border-blue-600 text-white"
//                         : "border-gray-300 text-gray-400"
//                     }`}
//                 >
//                   {index + 1}
//                 </div>
//                 <p
//                   className={`text-xs mt-2 ${
//                     index <= currentStep ? "text-blue-600" : "text-gray-400"
//                   }`}
//                 >
//                   {step}
//                 </p>
//               </div>
//               {index < order.steps.length - 1 && (
//                 <div
//                   className={`flex-1 h-[2px] ${
//                     index < currentStep ? "bg-blue-600" : "bg-gray-300"
//                   }`}
//                 ></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderTracking;


import React, { useContext } from "react";
import { userContext } from "../store/UserContextProvider";


export default function OrderTracking() {
  const userState = useContext(userContext);

  if (!userState?.user?.orders?.length)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">
          No orders found 😔
        </h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🧾 My Orders
      </h1>

      <div className="space-y-8">
        {userState.user.orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
          >
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-semibold text-gray-800">
                  #{order.order_id || "N/A"}
                </p>
              </div>
              <div className="mt-3 md:mt-0">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-lg font-semibold text-green-600">
                  ₹{(order.amount / 100).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 my-4"></div>

            {/* Items List */}
            <div className="space-y-6">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-100 pb-4"
                >
                  <img
                    src={import.meta.env.VITE_BACKEND_HOST+"/image/"+item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800 text-lg">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Size: <span className="font-medium">{item.size}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity:{" "}
                      <span className="font-medium">{item.quantity}</span>
                    </p>
                  </div>
                  <div className="text-right sm:text-center">
                    <p className="text-gray-700 font-semibold text-lg">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                Receipt:{" "}
                <span className="font-medium text-gray-700">
                  {order.receipt}
                </span>
              </p>
              {/* <button className="mt-4 sm:mt-0 bg-gray-800 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-900 transition">
                View Details
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

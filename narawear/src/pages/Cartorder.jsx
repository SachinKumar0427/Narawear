import Asidebar from "../components/AsideBar/Asidebar";
import Footer from "../components/Footer/footer";
import { RxCross2 } from "react-icons/rx";
import { IoTrashBin } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useContext } from "react";
import { userContext } from "../store/UserContextProvider";

// main cart layout
import { useRazorpay } from "react-razorpay";
const CartOrder = ({ isVisible, onClose }) => {



  const userStore = useContext(userContext);
  const { Razorpay } = useRazorpay();

  async function verifyPayment(payment) {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        payment;
      let response = await fetch(
        import.meta.env.VITE_BACKEND_HOST + "/payment/verify",
        {
          credentials: "include",
          body: JSON.stringify({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
          }),
          headers: { "content-type": "application/json" },
          method: "POST",
        }
      );
    
      if (!response.ok) throw new Error("Payment Failed!");
      
      alert("Payment Successfull!")
      userStore.setUser((user)=>({...user, cart: []}))

    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function checkoutHandler() {
    try {
      let createOrderResponse = await fetch(
        import.meta.env.VITE_BACKEND_HOST + "/payment/createorder",
        { credentials: "include" }
      );
      if (!createOrderResponse.ok) throw new Error("Something went wrong!");

      createOrderResponse = await createOrderResponse.json();
      const order = createOrderResponse.message;

      const options = {
        key: "rzp_test_RaR9ViNcuHQni0",
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        handler: verifyPayment,
      };

      // inititate razorpay:

      const rzpay = new Razorpay(options);

      rzpay.open(options);
    } catch (error) {
      alert(error.message);
    }
  }

  
  return (
    <div className="">
      {/* ye CartOrder open or close karne ke liye  Ternary operator ka use karte h  */}
      <div
        className={`text-black fixed top-0 duration-300 ${
          isVisible ? "right-0" : "-right-[500px]"
        } font-mono w-[500px] h-screen bg-white shadow-lg rounded-2xl overflow-hidden`}
      >
        <div className="border-t py-4 ml-3 border-b bg-gray-50 flex items-center  ">
          <div className="ml-3">
            <h1 className="font-thin text-2xl">MY CART</h1>
          </div>
          {/* CartOrder close karne ke liye  */}
          <RxCross2 onClick={onClose} className="text-2xl ml-auto mr-5" />
        </div>
        <div className="mt-4 ">
          {/* item Add hone par uski Quantity dekhata h  */}
          <h3 className="ml-5  font-thin text-2xl">
            Added Products (
            {userStore?.user?.cart?.reduce(
              (acc, cartItem) => acc + cartItem.quantity,
              0
            )}
            )
          </h3>
          <div className="h-[560px] w-[500px] overflow-y-scroll cursor: pointer">
            {userStore?.user?.cart?.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
        </div>

        <div className="flex text-sm justify-between p-2">
          <button className="flex gap-2 items-center hover:bg-blue-800 border border-solid border-gray-500 font-thin ml-6 p-2  ">
            <FaArrowLeftLong />
            Continue Shopping
          </button>

          <button
            onClick={checkoutHandler}
            className="flex items-center hover:bg-blue-800 border border-solid border-gray-500 bg-green-400 font-thin p-1 "
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartOrder;

{
  /* updateQuantity of Add item */
}

function CartItem({ item }) {
  const userState = useContext(userContext);

  function updateQuantity(quantity) {
    return async () => {
      try {
        let response = await fetch(
          import.meta.env.VITE_BACKEND_HOST + "/cart/update",
          {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ cartItemId: item._id, quantity: quantity }),
            headers: { "content-type": "application/json" },
          }
        );

        if (!response.ok) throw new Error("Could not update quantity!");

        response = await response.json();
        const cart = response.message;
        userState.setUser((prev) => ({ ...prev, cart }));
      } catch (error) {
        alert(error.message);
      }
    };
  }
  return (
    <div className="mt-5 ml-5 border-b flex ">
      <img
        src={`${import.meta.env.VITE_BACKEND_HOST}/image/${item.image}`}
        alt="Outfit"
        className="w-40 h-40"
      />
      <div className="flex ml-2 flex-col w-56 px-2">
        <h2 className="font-thin text-xl">{item.title}</h2>
        <p className="mt-2 font-thin text-xl ">
          INR<strong> {item.price * item.quantity}</strong> | Size:{" "}
          <strong>{item.size}</strong>
        </p>
        <div className="flex gap-2 mt-12 ml-4 font-thin text-xl">
          <button
            className="border border-solid border-gray-500 px-2"
            onClick={updateQuantity(item.quantity + 1)}
          >
            +
          </button>
          <span>{item.quantity}</span>
          <button
            className="border border-solid border-gray-500 px-2"
            onClick={updateQuantity(item.quantity - 1)}
          >
            -
          </button>
        </div>
      </div>

      <IoTrashBin onClick={updateQuantity(0)} className="text-xl ml-4 mt-1" />
    </div>
  );
}

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    navigate('/checkout')
  };
  return (
    <>
      <Navbar />
      {
        cartItems.length === 0 ? (
          <div className="flex justify-center items-center w-full h-screen" >
            <h1 className="text-3xl font-bold text-gray-800">Cart is Empty</h1>

          </div>
        ) :
          (
      <section className="w-full h-full container mt-8">
        <div className="w-full lg:max-w-[90%] mx-auto my-4  rounded-lg "> 
          <div className="w-full flex flex-col lg:flex-row lg:justify-between py-4 px-8"> 
            <div className="w-full max-w-[850px] overflow-y-auto mr-8">
              <div className="p-4 border rounded-md border-solid bg-white"> 
                <h2 className=" text-lg lg:text-4xl my-2 font-medium text-gray-800">Your Cart ({cartItems.length})</h2>
              </div>
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex  justify-between border p-4 border-solid mt-6 bg-white rounded-md shadow-sm">
                    <div>
                      <h1 className="text-[16px] lg:text-xl font-medium text-gray-800 mb-2">{item.name}</h1> 
                      <p className=" text-[12px] lg:text-sm text-gray-600">{item.description}</p> 
                    </div>
                    <img src={item.image} alt={item.name} className="object-cover w-[100px] rounded-md ml-4" />
                  </div>
                ))}
              </div>
            </div>

            <div className="border mt-4  lg:mt-0 p-4 border-solid w-full h-full max-w-[350px] bg-white rounded-lg shadow-md"> 
              <div className="flex justify-between py-4 px-4"> 
                <div>
                  <p className="text-gray-800">Total Price</p> 
                  <p className="text-gray-600 text-[12px]">{cartItems.length} rooms, including taxes & fees</p>
                </div>
                <p className="text-xl font-semibold text-green-500">{totalPrice}</p> 
              </div>
              <button onClick={handleCheckoutClick} className="bg-blue-500 text-white px-4 py-2 w-full border-none rounded-lg mt-4">Checkout</button>
            </div>
          </div>
         
        </div>
      </section>)} 
    </>
  );
};

export default CartPage;

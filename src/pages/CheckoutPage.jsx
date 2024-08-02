import {
    useContext,
    useState
} from 'react';

import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';
const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        zipCode: '',
    });
    const [success, setSuccess] = useState(false);

  const {  totalPrice,clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    setSuccess(true);
    
    setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        zipCode: '',
    });

    clearCart();
    

};
  return (
    <>
    <Navbar/>
   
{success ? (
    <div className='h-screen flex justify-center items-center'>
        <h1 className="text-3xl font-bold mb-4  text-green-500 text-center">Thank you for Booking!</h1>
    </div>
):(
     <div className='container w-full mx-auto mt-8 '>

      <h1 className="text-3xl font-bold mb-4 text-center
      ">Checkout</h1>
     
        <div className='max-w-full mx-4'>
          <h2 className="text-2xl font-medium mb-4">Basic Information</h2>
          <h3 className="text-xl font-medium mb-4 text-right mr-12">Total Price:<span className='text-green-500 font-bold'> {totalPrice} </span></h3>
          <form className='space-y-4  max-w-md' onSubmit={handleChange}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
              <input type="text" id="name" name="name" required className="border  border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
              <input type="email" id="email" name="email" required className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number:</label>
              <input type="number" id="phone" name="phone" required className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-blue-500" />
            </div>
            <div className='flex items-center gap-4'>
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium">City:</label>
                <input id="city" name="city" required className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-700 font-medium">State:</label>
                <input id="state" name="state" required className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700 font-medium">Zip Code:</label>
                <input id="zipCode" name="zipCode" required className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-blue-500" />
              </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">
              Place Order
            </button>
          </form>
        </div>
        
         
         
      
      </div>
   

)}
    </>
  );
};

export default CheckoutPage;

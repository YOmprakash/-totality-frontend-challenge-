import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { housesData } from "../assets/data.js";
import { BiBath } from "react-icons/bi";
import { LuBedSingle } from "react-icons/lu";
import { FaCheckCircle, FaStar } from "react-icons/fa";

import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar.jsx";

const HouseDetailsPage = () => {
  const [nights, setNights] = useState(1);
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProperty = housesData.find((p) => p.id === Number(id));
    setResult(foundProperty);
  }, [id]);

  const clickToCart = () => {
    addToCart(result);
    navigate("/cart");
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-8 px-4">
        <div className="w-full lg:max-w-[90%] mx-auto flex flex-col justify-center">
          {result && (
            <div>
              <h1 className="text-center lg:text-5xl text-3xl mb-4 text-gray-800 font-bold">
                {result.name}
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <p className="text-gray-600">{result.address}</p>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <p className="text-gray-600">{result.rating}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <LuBedSingle />
                  <p className="text-gray-600">{result.bedrooms} Beds</p>
                </div>
                <div className="flex items-center gap-2">
                  <BiBath />
                  <p className="text-gray-600">{result.bathrooms} Baths</p>
                </div>
              </div>
              <img
                className="w-full object-cover  lg:max-h-[550px] rounded-sm"
                src={result.image}
                alt={result.name}
              />
              <div className="flex items-center flex-col lg:flex-row justify-between my-14">
                <div className="w-full h-full max-w-[840px]">
                  <h1 className="text-3xl text-gray-800 font-bold mb-4">About Room</h1>
                  <p className="text-gray-600 text-md">{result.description}</p>
                  <h2 className="text-gray-800 font-bold mb-2 mt-4">Amenities</h2>
                  <ul className="list-disc space-y-2 pl-4">  {/* Added pl-4 for padding */}
  {result.amenities.map((amenity, index) => (
    <li key={index} className="flex items-center space-x-2">  {/* Added flex for styling */}
      <FaCheckCircle className="text-green-500" />  {/* Added FaCheckCircle icon */}
      <p className="text-gray-600">{amenity}</p>
    </li>
  ))}
</ul>

                </div>
                <div className="p-8 lg:shadow-md  w-full lg:max-w-[300px] lg:border lg:border-gray-200">
  <h3 className="text-green-500 text-2xl font-semibold">
    ${result.discountPrice} INR
  </h3>
  <p className="text-gray-400 line-through">
    ${result.totalPrice} INR
  </p>
  <div className="flex items-center justify-between mt-4">
    <p className="text-gray-600">Nights</p>
    <div className="flex items-center gap-2">
      <button onClick={() => setNights(Math.max(nights - 1, 1))} className="border border-gray-300 text-gray-600 px-2 py-1 rounded-full">
        -
      </button>
      <span className="text-gray-600">{nights}</span>
      <button onClick={() => setNights(nights + 1)}  className="border border-gray-300 text-gray-600 px-2 py-1 rounded-full">
        +
      </button>
    </div>
  </div>
  <hr className="border-gray-200 mt-4" />
  <button
    onClick={clickToCart}
    className="bg-blue-500 text-white px-4 py-2 w-full rounded-md mt-4 hover:bg-blue-700"
  >
    Book Now
  </button>
</div>

              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HouseDetailsPage;

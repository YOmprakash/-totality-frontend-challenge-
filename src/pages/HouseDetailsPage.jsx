import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { housesData } from "../assets/data.js";
import { BiBath } from "react-icons/bi";
import { LuBedSingle } from "react-icons/lu";

import { CartContext } from "../context/CartContext";
const HouseDetailsPage = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);
 const navigate = useNavigate();

  const {  addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProperty = housesData.find((p) => p.id === Number(id));
    setResult(foundProperty);
  }, [id]);

  const clickToCart = () => {
    
    addToCart(result);
    navigate("/cart");
  }

  return (
    <section className="container mx-auto mt-8">
    <div className="w-full  lg:max-w-[90%] mx-auto flex flex-col justify-center">
      {result && (
        <div>
          <h1 className="text-center lg:text-5xl text-3xl mb-4 text-black font-bold">{result.name}</h1>
          <p>{result.location}</p>
          <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2">
              <LuBedSingle  />
              <p className="text-[#333]">{result.bathrooms}Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <BiBath />
              <p className="text-[#333]">{result.bathrooms}Bath</p>
            </div>
          </div>
          <img className="w-full object-cover max-h-[650px] rounded-sm" src={result.image} alt={result.name} />
          <div className="flex items-center justify-between my-14">
            <div className="w-full max-w-[840px]">
              <h1 className="text-3xl text-black font-bold mb-4">About Room</h1>
              <p className="text-[#333] text-md">{result.description}</p>
            </div>
            <div className="p-8 shadow-md w-full max-w-[300px] border border-gray-200">
            <h3 className="text-black text-[28px] font-[700]">$ {result.price} INR</h3>
            <h4 className="line-through">${result.price} INR </h4>
            <p className="mt-4 mb-2">Nights</p>
            <div className="flex items-center justify-between">
              <p>1</p>
              <div className="flex items-center gap-2">
                <button className="border  text-black font-bold px-4 py-2 rounded-full">+</button>
                <button className="border  text-black  font-bold px-4 py-2 rounded-full">-</button>

              </div>
            </div>
            <hr className="border-1 mt-2 border-black w-full border-solid" />
            <button onClick={clickToCart} className="bg-black text-white px-4 py-2 w-full border-none mt-4">Book Now</button>
            </div>
          </div>
        </div>
       
      )}
      </div>
    </section>
  );
};

export default HouseDetailsPage;

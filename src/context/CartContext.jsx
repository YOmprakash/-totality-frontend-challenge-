import  { createContext, useState } from "react";
import { housesData } from "../assets/data";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(housesData);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSearch = () => {
    const newFilteredHotels = data.filter((hotel) => {
      return (
        (!filters.city || hotel.city === filters.city) &&
        (!filters.price ||
          (Number(hotel.price) >= Number(filters.price.split("-")[0]) &&
            Number(hotel.price) <= Number(filters.price.split("-")[1]))) &&
        (!filters.rating || hotel.rating >= Number(filters.rating)) &&
        (!filters.bedrooms || hotel.bedrooms === Number(filters.bedrooms))
      );
    });
    setFilteredHotels(newFilteredHotels);
  };


  const addToCart = (item) => {
    
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.discountPrice);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setCartItems(newCartItems);
    setTotalPrice(totalPrice - item.discountPrice);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };
  return (
    <CartContext.Provider
      value={{ cartItems,  filteredHotels, // Add filteredHotels to the context
        handleSearch,data,setData,totalPrice, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};


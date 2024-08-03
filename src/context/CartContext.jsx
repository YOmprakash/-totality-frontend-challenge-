import { createContext, useState } from "react";
import { housesData } from "../assets/data";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState(housesData);
  const [filteredHotels, setFilteredHotels] = useState(housesData); // Initialize with all houses
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.discountPrice);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
    setTotalPrice(totalPrice - item.discountPrice);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, filteredHotels, setFilteredHotels, data, setData, totalPrice, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

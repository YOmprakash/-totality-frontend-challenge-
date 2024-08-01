import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import HouseDetailsPage from "./pages/HouseDetailsPage";
import CartPage from "./pages/CartPage";

import { CartProvider } from "./context/CartContext.jsx";
const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/house/:id" element={<HouseDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
    </CartProvider>
   
  );
};

export default App;

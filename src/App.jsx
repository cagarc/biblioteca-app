import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CheckoutPage  from "./components/CheckoutPage/CheckoutPage"

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<Home />} />
          {/* Ruta dinámica para los detalles del libro */}
          <Route path="/books/:isbn" element={<Home />} />
          {/* Ruta dinámica para los detalles del libro */}
          <Route path="/checkoutPage" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

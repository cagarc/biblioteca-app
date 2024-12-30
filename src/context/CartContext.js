import React, { createContext, useContext, useState } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Crear un provider para envolver la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Función para agregar un libro al carrito
  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};

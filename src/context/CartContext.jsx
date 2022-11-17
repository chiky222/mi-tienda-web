import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {        
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setCart([...cart, { ...item, cantidad }])
    } 
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  };

  const deleteAll = () => {
    setCart([])
  };

  const deleteOne = (id) => {
    const prodFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(prodFiltrados);
  }

  const sumarCantidad = (itemPorAgregar, cantidad) => {
    const cartActualizado = cart.map((prodDelCarrito) => {
      if (itemPorAgregar.id === prodDelCarrito.id) {
        const productoActualizado = {
          ...prodDelCarrito,
          cantidad: prodDelCarrito.cantidad + cantidad,
        };
        return productoActualizado;
      } else {
        return prodDelCarrito;
      }
    })    
    setCart(cartActualizado);
  }

  const sumarPrecio = () => {
    const precio = cart.reduce((inicial, actual) => inicial + actual.price * actual.cantidad, 0);
    return precio || 0;
  };
  
  const totalUnidades = () => {
    let count = 0;
    const copia = [...cart];
    copia.forEach((prod) => {
      count += prod.cantidad;
    })
    return count;
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalUnidades, sumarPrecio }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
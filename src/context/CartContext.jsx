import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  //funciones

  const addToCart = (item, cantidad) => {
        
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setCart([...cart, { ...item, cantidad }])
    } 
  };


  //funcion para ver si está en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  };

  //funcion para vaciar el carrito
  const deleteAll = () => {
    setCart([])
  };

  //Eliminar un producto
  const deleteOne = (id) => {
    const prodFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(prodFiltrados);
  }

  //Funcion para Sumar Cantidad
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
  

  //Unidades totales del carrito
  const totalUnidades = () => {
    let count = 0;
    const copia = [...cart];
    if  (copia.length !== 0) {
      copia.forEach((prod) => {
        count += prod.cantidad;
      })
    }    
    return count;
  }

  //variables

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalUnidades }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
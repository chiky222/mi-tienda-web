import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  //funciones

  const addToCart = (item, cantidad) => {
    //console.log({...item, cantidad});
        
    if (isInCart(item.id)) {
      const productoCart = cart.find((prod) => prod.id === item.id);
      productoCart.cantidad += cantidad;
      console.log(cart);
    } else {
      setCart([...cart, { ...item, cantidad }])
    }
  };

  //funcion para ver si está en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === +id)
  };

  //funcion para vaciar el carrito
  const deleteAll = () => {
    setCart([])
  };

  //variables

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteAll }}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
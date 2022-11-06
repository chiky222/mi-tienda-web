import React from 'react';
import productos from '../Mock/Productos';
import Item from './Item';

const Cart = () => {
  return (
    <>
      <div className='cart-container' >
          <h2 className='titulo-saludo' >Cart</h2>
          <h3 className= 'text-description' >Detalle de los productos en el Carrito:</h3>
      </div>
      <div className='cart-items' >
          <Item producto={productos[0]}></Item>
          <Item producto={productos[1]}></Item>
          <Item producto={productos[6]}></Item>
      </div>
    </>
  )
};

export default Cart;
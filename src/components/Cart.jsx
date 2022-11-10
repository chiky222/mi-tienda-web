import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {

  const {cart, deleteAll, deleteOne} = useContext(CartContext);

  if (cart.length !== 0) {
    return (
      <div className='contenedor-cart'>
        <h2>Detalle de los Productos en el Carrito:</h2>
        {cart.map((prod) => (
          <div key={prod.id} className='item-cart'>
            <img src={prod.img} alt={prod.title} width='150px' />
            <div className='texts-cart' >
              <h2>{prod.title}</h2>
              <h3>Cantidad: {prod.cantidad}</h3>
              <h3>$ {prod.price * prod.cantidad}</h3>
              <button className='buttonAdd' onClick={() => deleteOne(prod.id)} >Eliminar</button>
            </div>
          </div>
        ))}
        <div className='total-vaciar'>
          <h2>Total: ${cart.reduce((inicial, actual) => inicial + actual.price * actual.cantidad, 0)}</h2>
          <button className='buttonAdd' onClick={deleteAll} >Vaciar carrito</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='cart-vacio'>
        <h2>Aún no agregaste productos al carrito.</h2>
        <NavLink to='/' >Comenzar a Comprar</NavLink>
      </div>
    )
  }


};

export default Cart;
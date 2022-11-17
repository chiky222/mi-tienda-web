import React , { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {

  const {addToCart} = useContext(CartContext);
  const [show, setShow] = useState(true);

  const onAdd = (qty) => {
    setShow(false);
    addToCart(producto, +qty);
  }

  return (
        <div className='item-card detail' >
            <img src={producto.img} width='250px' alt={producto.title}></img>
            <article>
                <h2>{producto.title}</h2>
                <p className='text-description' >{producto.description}</p>
                <h3>$ {producto.price}</h3>
                {show ?
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} /> : 
                <div className='link-carrito' ><NavLink to='/cart' >Ir al Carrito</NavLink></div>}
            </article>
        </div> 
  );

};

export default ItemDetail;
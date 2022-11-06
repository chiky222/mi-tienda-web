import React , { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {

  const {addToCart} = useContext(CartContext);

  const onAdd = (qty) => {    
    addToCart(producto, +qty);
  }

  return (
        <div className='item-card detail' >
            <img src={producto.img} width='300px' alt={producto.title}></img>
            <article>
                <h2>{producto.title}</h2>
                <p className='text-description' >{producto.description}</p>
                <h3>$ {producto.price}</h3>
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
            </article>
        </div> 
          );

};

export default ItemDetail;
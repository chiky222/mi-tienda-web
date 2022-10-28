import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {

  return (
        <div className='item-card detail' >
            <img src={producto.img} width='300px' alt={producto.title}></img>
            <article>
                <h2>{producto.title}</h2>
                <p className='text-description' >{producto.description}</p>
                <h3>$ {producto.price}</h3>
                <ItemCount stock={producto.stock} initial={1} onAdd={(count) => console.log(count)} />
            </article>
        </div> 
          );

};

export default ItemDetail;
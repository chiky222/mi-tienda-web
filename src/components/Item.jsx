import React from 'react';
import ItemCount from './ItemCount';

const Item = ({producto}) => {
  return (
    <div className='item-card' >
        <img src={producto.img} width='300px' alt={producto.title} />
        <article>
            <h2>{producto.title}</h2>
            <h3>$ {producto.price}</h3>
            <ItemCount stock={producto.stock} initial={1} onAdd={(count) => console.log(count)} />
        </article>
    </div>
  )
};

export default Item;
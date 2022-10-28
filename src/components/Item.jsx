import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className='item-card' >
        <img src={producto.img} width='300px' alt={producto.title} />
        <article>
            <h2>{producto.title}</h2>
            <p className='text-description' >{producto.description}</p>
            <h3>$ {producto.price}</h3>
            <Link to={`/detail/${producto.id}`}>Ver Detalle</Link>            
        </article>
    </div>
  )
};

export default Item;
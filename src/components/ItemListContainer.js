import React from 'react';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className='titulo-saludo'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;
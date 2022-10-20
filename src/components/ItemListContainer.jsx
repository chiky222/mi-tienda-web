import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

  // const addCant = (cant) => {
  //   console.log(cant);
  // }

  return (
    <>
      <div>
        <h1 className='titulo-saludo'>{greeting}</h1>
        <ItemCount stock={5} initial={0} onAdd={(count) => console.log(count)} />
      </div>
    </>
  )
};

export default ItemListContainer; 
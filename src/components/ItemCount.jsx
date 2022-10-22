import React from 'react';
import { ImPlus, ImMinus } from 'react-icons/im';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  
  const [count, setCount] = useState(1);
  
  const sumar = () => {
    if(count < stock){
        setCount(count + 1);
    };
  };
  
  const restar = () => {
    if(count > 0){
        setCount(count - 1);
    };
  };

  return (
    <>
        <div className='visor'>
            <ImPlus className='plusIcon' onClick={sumar} />
            <p className='contador' >{count}</p>
            <ImMinus className='minusIcon' onClick={restar} />
            <button className='buttonAdd' onClick={() => onAdd(count)} disabled={count === 0} >Agregar</button>
        </div>
    </>
  )
};

export default ItemCount;
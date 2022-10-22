import React, { useEffect } from 'react';
//import ItemCount from './ItemCount';
import productos from '../Mock/Productos';
import {useState} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProductos = () => {
      return new Promise((resolv, reject) => {
        setTimeout(() => {
          resolv(productos);
        }, 2000);
      });
    };
    getProductos()
      .then((resolv) => {
        setItems(resolv);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
        <h1 className='titulo-saludo'>{greeting}</h1>
        <h4 className='subtitulo-pie'>LLevate uno de los cuadros de Edición Limitada de Lionel Messi, de imágenes generadas con Inteligencia Artificial.<br></br>Para crearlas se utilizaron tecnologías como Stable Diffusion y OpenAi Dall-E 2.<br></br><br></br></h4>
        {/* <ItemCount stock={5} initial={0} onAdd={(count) => console.log(count)} /> */}
        <ItemList items={items} />
    </>
  )
};

export default ItemListContainer; 
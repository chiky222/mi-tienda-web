import React, { useEffect } from 'react';
import productos from '../Mock/Productos';
import {useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({titulo}) => {

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const getProductos = (categoryName) => {
      return new Promise((resolv, reject) => {
        const prodFiltrados = productos.filter((prod) => prod.category === categoryName);
        const ref = categoryName ? prodFiltrados : productos;
        setTimeout(() => {
          resolv(ref);
        }, 500);
      });
    };
    getProductos(categoryName)
      .then((resolv) => {
        setItems(resolv);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);


  return (
    <>
        <h1 className='titulo-saludo'>{titulo}</h1>
        <h4 className='subtitulo-pie'>LLevate uno de los NFT Edición Limitada de Lionel Messi, de imágenes generadas con Inteligencia Artificial.<br></br>Para crearlas se utilizaron tecnologías como Stable Diffusion y OpenAi Dall-E 2.<br></br><br></br></h4>
        <ItemList items={items} />
    </>
  )
};

export default ItemListContainer; 
import React, { useEffect } from 'react';
import {useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { baseDeDatos } from '../servicios/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import CircleLoader from "react-spinners/CircleLoader";

const ItemListContainer = ({titulo}) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {

    const collectionProd = collection(baseDeDatos, 'productos');

    const obtenerDatos = (collection) => {
      getDocs(collection)
      .then((res) => {        
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data()
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
    }

    if (categoryName === undefined) {
      obtenerDatos(collectionProd);    
    } else {
      const queryCategory = query(collectionProd, where('category', '==', categoryName));
      obtenerDatos(queryCategory);
    }

  }, [categoryName]);

  if (loading) {
    return (
      <div className='spiner'>
        <CircleLoader color={'#120d46'} size={180} />
      </div>
    )
  } else {
    return (
      <>
          <h1 className='titulo-saludo'>{titulo}</h1>
          <h4 className='subtitulo-pie'>LLevate uno de los NFT Edición Limitada de Lionel Messi, de imágenes generadas con Inteligencia Artificial.<br></br>Para crearlas se utilizaron tecnologías como Stable Diffusion y OpenAi Dall-E 2.<br></br><br></br></h4>
          <ItemList items={items} />
      </>
    )
  }

  
};

export default ItemListContainer; 
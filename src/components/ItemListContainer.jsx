import React, { useEffect } from 'react';
//import productos from '../Mock/Productos';
import {useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { baseDeDatos } from '../servicios/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({titulo}) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {

    const collectionProd = collection(baseDeDatos, 'productos');

    if (categoryName === undefined) {
      getDocs(collectionProd)
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

      // const getProductos = (categoryName) => {   HACER CONDICIONAL PARA CATEGORIAS O TODO      
      //   return new Promise((resolv, reject) => {
      //     const prodFiltrados = productos.filter((prod) => prod.category === categoryName);
      //     const ref = categoryName ? prodFiltrados : productos;
      //     setTimeout(() => {
      //       resolv(ref);
      //     }, 500);
      //   });
      // };
      // getProductos(categoryName)
      //   .then((resolv) => {
      //     setItems(resolv);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    
    } else {
      const queryCategory = query(collectionProd, where('category', '==', categoryName));
      getDocs(queryCategory)
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

  }, [categoryName]);

  if (loading) {
    return (<div className='contenedor-detalle-items'>
              <h1>Cargando...</h1>
            </div>)
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
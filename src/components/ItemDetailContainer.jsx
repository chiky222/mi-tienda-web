import React from 'react';
import ItemDetail from './ItemDetail';
import productos from '../Mock/Productos';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();

  
    useEffect(() => {
      const getProductos = (idProd) => {
        return new Promise((resolv, reject) => {
          setTimeout(() => {
            resolv(productos.find(prod => prod.id === parseInt(idProd)));
          }, 500);
        });
      };
      getProductos(idProd)
        .then((resolv) => {
          setItems(resolv);          
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [idProd]);
  
    if (loading) {
      return (<div className='contenedor-detalle-items'>
                <h1>Cargando...</h1>
              </div>)
    } else {
      return (<div className='contenedor-detalle-items'>
                <ItemDetail producto={items} />
              </div>)
    }
  };

export default ItemDetailContainer;
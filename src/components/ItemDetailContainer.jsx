import React from 'react';
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { baseDeDatos } from '../servicios/firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
import CircleLoader from "react-spinners/CircleLoader";

const ItemDetailContainer = () => {

    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);
    const { idProd } = useParams();

  
    useEffect(() => {

      const collectionProd = collection(baseDeDatos, 'productos');

      const ref = doc(collectionProd, idProd);

      getDoc(ref)
        .then((res) => {
          setItems({
            id: res.id,
            ...res.data()
          })
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }, [idProd]);
      
    if (loading) {
      return (
        <div className='spiner'>
          <CircleLoader color={'#120d46'} size={180} />
        </div>
      )
    } else {
      return (<div className='contenedor-detalle-items'>
                <ItemDetail producto={items} />
              </div>)
    }
  };

export default ItemDetailContainer;
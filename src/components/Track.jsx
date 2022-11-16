import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { baseDeDatos } from '../servicios/firebaseConfig';

const Track = () => {

  const [idOrden, setIdOrden] = useState('');
  const handleOrder = (e) => setIdOrden(e.target.value);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

    
  const obtenerDatos = () => {
    const orderCollection = collection(baseDeDatos, 'orders');

    getDocs(orderCollection)
    .then((res) => {
      if (res.docs.some((prod) => prod.id === idOrden)) {
        const filtro = res.docs.filter((prod) => prod.id === idOrden);
        const products = filtro.map((prod) => {
          return (
            [...prod.data().items]
          );
        })
        setItems(products);
        setLoading(false);
      }    
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  if (!loading) {
    return (
      <>
        <div className='detalle-ordenDeCompra' >
          <h2>Detalle de los Productos en la orden <b>{idOrden}</b>:</h2>
          <h3><b>Estado</b>: ¡En preparación! Lo recibirás en los próximos 5 días hábiles desde el día de tú compra.</h3>
        </div>
        {items[0].map((prod) => (
          <div key={prod.id + prod.cant} className='item-cart'>
            <img src={prod.img} alt={prod.title} width='150px' />
            <div className='texts-cart' >
              <h2>{prod.title}</h2>
              <h3>Cantidad: {prod.cantidad}</h3>
              <h3>$ {prod.price * prod.cantidad}</h3>
            </div>
          </div>
        ))}
      </>
    )
  } else {
    return (
      <div className='form-track' >
        <input type='text' style={{width: '300px', height: '40px', fontSize: 'var(--size-font-text)', margin: '10px 0 10px'}} placeholder='Código de la Orden' name='idOrdenCompra' value={idOrden} onChange={handleOrder} ></input>
        <button className='buttonAdd' disabled={idOrden.length !== 20} onClick={() => obtenerDatos()}>Buscar</button>
      </div>
    )
  }
}

export default Track;
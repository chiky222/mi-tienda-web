import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { baseDeDatos } from '../servicios/firebaseConfig';
import { Link } from 'react-router-dom';

const Checkout = () => {

  const { cart, sumarPrecio, deleteAll } = useContext(CartContext);
  
  const [orderId, setOrderId] = useState('');

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [mail, setMail] = useState('mail@gmail.com');
  const [mailConfirm, setMailConfirm] = useState('');

  const enviarDatos = (e) => {
      e.preventDefault();
      const ordenDeCompra = {
        buyer: {
          name,
          lastName,
          telefono,
          direccion,
          mail,
        },
        items: cart,
        total: sumarPrecio(),
        data: serverTimestamp(),
      };

      const orderCollection = collection(baseDeDatos, 'orders');

      addDoc(orderCollection, ordenDeCompra)
        .then((res) => {
          setOrderId(res.id);
          deleteAll();
        })
        .catch((error) => {
          console.log("Hubo un Error", error);
        })
  }

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleTelefono = (e) => setTelefono(e.target.value);
  const handleDireccion = (e) => setDireccion(e.target.value);
  const handleMail = (e) => setMail(e.target.value);
  const handleMailConfirm = (e) => setMailConfirm(e.target.value);

  if (orderId) {
    return (
      <div className='cart-vacio'>
        <h1>¡Gracias por tú compra! El código de seguimiento de tu pedido es: <br></br><br></br><b>{orderId}</b><br></br></h1>
        <Link to='/track'>Seguimiento</Link>
      </div>
    )
  } else {
    return (
      <form className='form-ordenCompra' action='' onSubmit={enviarDatos} >
        <input type='text' placeholder='Nombre' name='name' value={name} onChange={handleName} /><br></br>
        <input type='text' placeholder='Apellido' name='lastName' value={lastName} onChange={handleLastName} /><br></br>
        <input type='number' placeholder='2211234567' name='telefono' value={telefono} onChange={handleTelefono} /><br></br>
        <input type='text' placeholder='Dirección' name='direccion' value={direccion} onChange={handleDireccion} /><br></br>
        <input type='text' placeholder='Mail' name='mail' value={mail} onChange={handleMail} /><br></br>
        <input type='text' placeholder='Confirme su mail' name='mailConfirm' value={mailConfirm} onChange={handleMailConfirm} /><br></br>
        {(mail === mailConfirm) && <button className='buttonAdd'>Envíar</button>}
      </form>
    )
  }
}

export default Checkout
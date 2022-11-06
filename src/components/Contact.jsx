import React from 'react';
import Form from './Form';

const Contact = () => {
  return (
    <div>    
        <h1 className='titulo-saludo' >Datos de Contacto</h1>
        <div className='contacto-datos' >
            <br></br>
            <p><b>Nombre:</b> Cristian</p>
            <p><b>Mail:</b> contacto@eNeFeTe.com</p>
            <p><b>Ubicación:</b> Buenos Aires, Argentina</p>
            <Form />
        </div>
    </div>
  );
};

export default Contact;
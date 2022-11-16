import React, { useState } from 'react';

const Form = () => {

  const [data, setData] = useState({ nombre: '', mail: '', mensaje: ''});
  
  const enviarDatos = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({ ...data, [name]: value});
  }

  return (
    <div
        style={{
            minHeight: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
            marginTop: '30px'
        }}>
        <form action='' onSubmit={enviarDatos} >
            <input type='text' style={{width: '300px', height: '40px', fontSize: 'var(--size-font-text)', marginBottom: '10px'}} placeholder='Nombre' name='nombre' value={data.nombre} onChange={handleChange} /><br></br>
            <input type='text' style={{width: '300px', height: '40px', fontSize: 'var(--size-font-text)', marginBottom: '10px'}} placeholder='Mail' name='mail' value={data.mail} onChange={handleChange} /><br></br>          
            <input style={{minHeight: '200px', width: '300px', wordWrap: 'break-word', height: '40px', fontSize: 'var(--size-font-text)', marginBottom: '10px'}} type='text' placeholder='Mensaje' name='mensaje' value={data.mensaje} onChange={handleChange} /><br></br><br></br>
            <button className='buttonAdd' style={{display: 'block', margin: '0 auto'}} onClick={() => {console.log(data)}}>Envíar</button>
        </form>
    </div>
  );
};

export default Form;
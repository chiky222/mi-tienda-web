import React from 'react';

const Form = () => {
  
  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(e.target);
  }  

  return (
    <div
        style={{
            minHeight: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column'
        }}>
        <form action='' onSubmit={enviarDatos} >
            <input type='text' style={{width: '300px'}} placeholder='Nombre' name='nombre' /><br></br>
            <input type='text' style={{width: '300px'}} placeholder='Mail' name='apellido' /><br></br>          
            <input style={{minHeight: '200px', width: '300px', wordWrap: 'break-word'}} type='text' placeholder='Mensaje' name='mensaje' /><br></br><br></br>
            <button className='buttonAdd' style={{display: 'block', margin: '0 auto'}} >Envíar</button>
        </form>
    </div>
  );
};

export default Form;

import React from 'react'
import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({Presupuesto,setPresupuesto ,setIsvaliPresupuesto}) => {

const [mensaje,SetMensaje] = useState('');

    const hanlerPresupuesto = ((e)=>{
        e.preventDefault();
            if (Presupuesto<0) {
                SetMensaje("No es un presupuesto valido");
                return;
                
            }
            SetMensaje('');
            setIsvaliPresupuesto(true);
          
            
    })
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario' onSubmit={hanlerPresupuesto}>
        <div className='campo'>
            <label>Definir presupuesto</label>
            <input className='nuevo-presupuesto' type="text" placeholder="Añade un presupuesto" value={Presupuesto}
            onChange={e=>setPresupuesto(Number(e.target.value))}
            />
        </div>

       <input type="submit" value="Añadir" />

       {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

      </form>
    </div>
  )
}

export default NuevoPresupuesto

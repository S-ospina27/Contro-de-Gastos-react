
import React from 'react'
import { useState,useEffect } from 'react'

const ControlPresupuestos = ({Presupuesto,gastos}) => {
  
  const [disponible, setdisponible] = useState(0);
  const [gastado, setgastado] = useState(0);

  useEffect(() => {

    const totalGastado= gastos.reduce((total,gasto)=> gasto.cantidad + total,0)
    
    const TotalDisponible= Presupuesto-totalGastado;
    setdisponible(TotalDisponible);
    setgastado(totalGastado);
  }, [gastos])






    const FormatiarCantidad =(cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
           <p>Grafica Aqui</p> 
        </div>
      
      <div className='contenido-presupuesto'>
       <p>
        <span>Presupuesto:</span>{ FormatiarCantidad(Presupuesto)};
       </p>

       <p>

        <span> Disponible:</span>{ FormatiarCantidad(disponible)},
       </p>

       <p>
        <span>Gasto:</span>{FormatiarCantidad(gastado)},
       </p>
      </div>
    </div>
  )
}

export default ControlPresupuestos

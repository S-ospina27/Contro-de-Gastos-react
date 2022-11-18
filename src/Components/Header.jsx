
import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuestos from './ControlPresupuestos';


const Header = ({Presupuesto,setPresupuesto ,setIsvaliPresupuesto,isValiPresupuesto,gastos}) => {
  return (
    <header>
       <h1>Planificador de Gastos</h1> 

        {isValiPresupuesto ? 
        (
       <ControlPresupuestos
       Presupuesto={Presupuesto}
       gastos={gastos}
       /> 

        ) 
        :(
        
        <NuevoPresupuesto
        Presupuesto={Presupuesto}
        setPresupuesto={setPresupuesto}
        setIsvaliPresupuesto={setIsvaliPresupuesto}
        />
        
        ) 
        }
    </header>
  )
}

export default Header

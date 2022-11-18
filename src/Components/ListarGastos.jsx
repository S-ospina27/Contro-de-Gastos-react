import React from "react"
import Gasto from "./Gasto"

const ListarGastos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">

        <h2>{gastos.length ?"Gastos" :"No hay gastis"}</h2>

           {gastos.map( (gasto) =>(
            <Gasto
            key={gasto.id}
            gasto={gasto}
            />
           ))}
    </div>
  )
}

export default ListarGastos

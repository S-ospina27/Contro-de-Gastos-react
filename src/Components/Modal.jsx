 import cerrarbtn from '../img/cerrar.svg';
 import Mensaje  from './Mensaje';
 import { useState } from 'react'


const Modal = ({setModal,animarModal,setanimarModal,guardarGasto}) => {
   
  const [mensaje, setmensaje] = useState("")
  const [nombre, setnombre] = useState("");
  const [cantidad, setcantidad] = useState("")
  const [categoria, setcategoria] = useState("")
  
  const handlerSubmit =(e)=>{
  e.preventDefault();

      if ([nombre,cantidad,categoria].includes("")) {
        
        setmensaje("todos los campos son obligatorios");

          setTimeout(() => {
            
            setmensaje("");
          },1000);
          return
      }
    
      guardarGasto({nombre,cantidad,categoria});
      handlerOcultar();
  
  }


  const handlerOcultar = ()=>{
   
    setanimarModal(false);

    setTimeout(() => {
      setModal(false);
    },500);
}



  return (
    <div className="modal">
       <div className="cerrar-modal">
        <img src={cerrarbtn} alt='cerrar-modal' onClick={handlerOcultar}/>
        
        </div> 
        <form className={`formulario ${animarModal?"animar":'cerrar'}`} onSubmit={handlerSubmit}>
          <legend>Nuevo Gsto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input id="nombre" type="text" placeholder="Añade el nombre del gasto" value={nombre} onChange={e => setnombre(e.target.value)}/>
          </div>

          <div className="campo">
            <label htmlFor="cantidad">Cantidad </label>
            <input id="cantidad" type="number" placeholder="Añade cantidad del gasto" value={cantidad} onChange={e => setcantidad(e.target.value)}/>
          </div>

          <div className="campo">
            <label htmlFor="categoria">Categoria </label>
            <select id="categoria" value={categoria} onChange={e=> setcategoria(e.target.value)}>
              <option value="">---Seleccione---</option>
              <option value="Ahorro">Ahorro</option>
              <option value="Comida">Comida</option>
              <option value="Gastos Varios">Gastos Varios</option>
              <option value="Ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="sucripciones">Suscripciones</option>
            </select>
            <input type="submit" value="Añadir GAsto" />
          </div>
        </form>
    </div>
  )
}

export default Modal

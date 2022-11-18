import { useState } from 'react'
import Header from './Components/Header';
import NuevoPresupuesto from './Components/NuevoPresupuesto';
import IconoNuevoGasto from  './img/nuevo-gasto.svg';
import Modal from './Components/Modal';
import {generadId} from "./helpers"
import ListarGastos from './Components/ListarGastos';


function App() {

const [Presupuesto,setPresupuesto]= useState(0);
const [isValiPresupuesto, setIsvaliPresupuesto] = useState(false);
const [modal, setModal] = useState(false)
const [animarModal, setanimarModal] = useState(false)
const [gastos, setgastos] = useState([]);

const handlerNuevoGasto =()=>{

      setModal(true);
      setTimeout(() => {

        setanimarModal(true);
      },500);
}

const guardarGasto =(gasto)=>{
  gasto.id= generadId();
  gasto.fecha= Date.now();
 setgastos([...gastos,gasto]) ;
}
  return (
   
   <div className= { modal ? "fijar" :''}>
    <Header
    Presupuesto={Presupuesto}
    setPresupuesto={setPresupuesto}
    isValiPresupuesto={isValiPresupuesto}
    setIsvaliPresupuesto={setIsvaliPresupuesto}
    gastos={gastos}
    />
     {isValiPresupuesto &&(
          <>
          <main>
            <ListarGastos
            gastos={gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} alt="icono nuevo" onClick={handlerNuevoGasto} />
        
          </div>
        </>
          ) }

    {modal && <Modal
    setModal={setModal}
    animarModal={animarModal}
    setanimarModal={setanimarModal}
    guardarGasto={guardarGasto}

    />  }
   </div>
  )
}

export default App

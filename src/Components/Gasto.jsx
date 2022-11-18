import {formatearfecha} from '../helpers'
import IconoAhorros from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGasto from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const Gasto = ({gasto}) => {



  const DiccionarioIconos ={
    Ahorro:IconoAhorros,
    Comida:IconoComida,
    GastosVarios:IconoGasto ,
     Ocio:IconoOcio,
     salud:IconoSalud,
     sucripciones:IconoSuscripciones
  }

    const {nombre,cantidad,categoria,id,fecha,formatearfecha}= gasto;
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
          <img src={DiccionarioIconos[categoria]}/>
            <div className="descripcion-gasto"  alt="Icono Gasto">

                <p className="categoria">{categoria}</p>

                    <p className="nombre-gasto">{nombre}</p>

                    <p className="cantidad"> {cantidad}</p>

                    <p className="fecha-gasto">{fecha}</p>
                    
            </div>

        </div>
   
      
    </div>
  )
}

export default Gasto

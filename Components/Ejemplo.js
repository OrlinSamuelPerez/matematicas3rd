import { useState } from "react"

export default function Ejemplo(props){
    const [counter, setCounter] = useState(0)
    const [activar, setActivar] = useState(false)
    const handleClick1 = ()=>{
        if( props.datos.length == counter +1){
            setCounter(0)
            setActivar(true)
          }
          else{
           setCounter(counter + 1)
          }
    }
    
    const handleClick2 = ()=>{
        if( counter ==  0){
            setCounter(0)
          }
          else{
           setCounter(counter - 1)
          }
    }
    return(
        <>
        <div className="ejemplo">
            <img src={props.datos[counter]}/>
            <div className='botton-hero izquierdo' onClick={handleClick2}  ><img src='/img/flecha-izquierda.png'/></div>
            <div className='botton-hero derecho' onClick={handleClick1}><img src='/img/flecha-izquierda.png'/></div>
        </div>
        
        {activar == true?
                <div className="siguiente-espacial"><button onClick={props.atras} >Atrás</button><button onClick={()=>props.buttonSiguiente()} >Continuar</button></div>
                :<div className="siguiente-espacial"><button onClick={props.atras} >Atrás</button></div>
            }
        </>
    )
}
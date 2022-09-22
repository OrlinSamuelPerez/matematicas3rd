import { useState } from "react"
import Mensajes from "../Mensajes"

export default function Division(){
    const [counter, setCounter] = useState(0)
    const Data = [
        {numero1:"30", numero2:"2", repuesta:[20,15,30]}
    ]
    const JuegoDivision = (props)=>{
        const validar =(valor)=>{
            const division = parseInt(props.data.numero1) / parseInt(props.data.numero2);
            if(division == valor){
                console.log("Bien campeon")
            }else{
                console.log("Basofia")
            }

        }
        return(
            <div className="division-juego">
                <h1>Resuelve la siguiente division</h1>
                <div className="division-datos">
                    <div>{props.data.numero1}</div>
                    <div>÷</div>
                    <div>{props.data.numero2}</div>
                    <div>_____________________</div>
                </div>
                <div className="division-boton">
                    {props.data.repuesta.map(e=>
                        <div><button onClick={()=>validar(e)}>{e}</button></div>    
                    )}
                </div>
            </div>
        )
    }
    return(
        <div className="Division">
            {/* <JuegoDivision data={Data[counter]}/> */}
            <Mensajes tipoMensaje="negativo"/>
        </div>
    )
}
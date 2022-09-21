import { useState } from "react"

export default function NumerosOrdinales(){
    const [counter, setCounter] = useState(0)
    const arrayDato = [
        {image:"https://i.pinimg.com/564x/49/8f/c0/498fc020c29d4e33af59ae67ecfc3b3b.jpg", pregunta:"En que posicion se encuentra el leon",repuesta:[ {valor:"Primero", validar:false}, {valor:"Cuarto", validar:false}, {valor:"Quinto", validar:false}, {valor:"Segundo", validar:true},  {valor:"Sexto", validar:false}, {valor:"Octavo", validar:false} ] },
        {image:"https://i.pinimg.com/564x/49/8f/c0/498fc020c29d4e33af59ae67ecfc3b3b.jpg", pregunta:"En que posicion se encuentra el leon",repuesta:[ {valor:"Primero", validar:false}, {valor:"Cuarto", validar:false}, {valor:"Quinto", validar:false}, {valor:"Segundo", validar:true},  {valor:"Sexto", validar:false}, {valor:"Octavo", validar:false} ] }
    ]
    const JuegoNumeroOrdinales = (props)=>{
        const validarPregunta = (validar)=>{
            if(validar == true){
                console.log("BIEN MMG")
                setCounter(counter + 1)
            }
            else{
                console.log("Mal poorque eres un manco como yair17")
            }

        }
        return(
            <div className="numeroOrdinales">
                <div>
                    <img src={props.data.image}/>
                </div>
                <div>
                    <h4>{props.data.pregunta}</h4>
                    <div className="numeroOrdinales-repuesta">
                        {props.data.repuesta.map(e=>
                            <div><button onClick={()=>validarPregunta(e.validar)}>{e.valor}</button></div> 
                        )}
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="numeroOrdinale">
           <JuegoNumeroOrdinales data={arrayDato[counter]}/>
        </div>
    )
}
import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
export default function Poligonos(){
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
    const router = useRouter()
    const Tiempo = () => {
        juegoMensajeActivo == "HAZ HECHO UN BUEN TRABAJO "?
            setTimeout(() => {
                setJuegoActivo(false)
                setCounter(counter + 1)
                }, 3000)
            :setTimeout(() => {
                setJuegoActivo(false)
                }, 3000)
        return (
            <div>{juegoMensajeActivo == "HAZ HECHO UN BUEN TRABAJO " ?
                <Feliciades />
                : <IntentaloDeNuevo />
            }</div>
        )
    }
    const allowdrop = (e) => {
        e.preventDefault()
    } 
    const drag = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }

    //Numero 1
    let array = ["", "", "", ""]
    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array[1] != "" && array[2] != "" && array[3] ) {
            if (array[1] == "angulo" && array[2] == "lado" && array[3] == "vertice" ) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa la figura e identifica los elementos del siguiente polígono.",
                    0,
                    counter

                )

            }
            else {
                array = ["", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa la figura e identifica los elementos del siguiente polígono.",
                    0,
                    counter

                )
            }
        }
    }
    const Juego = () => {
        return (
            <div className="poligonos">
                <h3>Observa la figura e identifica los elementos del siguiente polígono.</h3>
                <div>
                    <img src="/img/elementos.png"/>
                </div>
               
                <div className="poligonos-drop poligonos-drop1" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                <div className="poligonos-drop poligonos-drop2" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                <div className="poligonos-drop poligonos-drop3" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                    
                <div className="drag-poligonos">
                    <div className="poligonos-drag" draggable="true" id="lado" onDragStart={drag}>Lado</div>
                    <div className="poligonos-drag" draggable="true" id="angulo" onDragStart={drag}>Ángulo</div>
                    <div className="poligonos-drag" draggable="true" id="vertice" onDragStart={drag}>Vértice</div>
                   

                </div>

            </div>

        )

    }

    //Numero 2
    let array2 = ["", "", "", ""]
    const drop2 = (e) => {
        //Para btener el id arrastrado
        if (array2[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array2[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array2[1] != "" && array2[2] != "" && array2[3] ) {
            if (array2[1] == "angulo" && array2[2] == "lado" && array2[3] == "vertice" ) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa la figura e identifica los elementos del siguiente polígono.",
                    0,
                    counter

                )

            }
            else {
                array2 = ["", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa la figura e identifica los elementos del siguiente polígono.",
                    0,
                    counter

                )
            }
        }
    }
    const Juego2 = () => {
        return (
            <div className="poligonos">
                <h3>Observa la figura e identifica los elementos del siguiente polígono.</h3>
                <div>
                    <img src="/img/elementos2.png"/>
                </div>
               
                <div className="poligonos-drop poligonos-drop4" id="1" onDragOver={allowdrop} onDrop={drop2}></div>
                <div className="poligonos-drop poligonos-drop5" id="2" onDragOver={allowdrop} onDrop={drop2}></div>
                <div className="poligonos-drop poligonos-drop6" id="3" onDragOver={allowdrop} onDrop={drop2}></div>
                    
                <div className="drag-poligonos">
                    <div className="poligonos-drag" draggable="true" id="vertice" onDragStart={drag}>Vértice</div>
                    <div className="poligonos-drag" draggable="true" id="lado" onDragStart={drag}>Lado</div>
                    <div className="poligonos-drag" draggable="true" id="angulo" onDragStart={drag}>Ángulo</div>
                   

                </div>

            </div>

        )

    }

    // Numero 3
    let array3 = ["", "", "", ""]
    const drop3 = (e) => {
        //Para btener el id arrastrado
        if (array3[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array3[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array3[1] != "" && array3[2] != "" && array3[3] ) {
            if (array3[1] == "angulo" && array3[2] == "vertice" && array3[3] == "lado" ) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa la figura e identifica los elementos del siguiente polígono.",
                    0,
                    counter

                )

            }
            else {
                array3 = ["", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa la figura e identifica los elementos del siguiente polígono.",
                    0,
                    counter

                )
            }
        }
    }
    const Juego3 = () => {
        return (
            <div className="poligonos">
                <h3>Observa la figura e identifica los elementos del siguiente polígono.</h3>
                <div>
                    <img id="poligonos-img" src="/img/elementos3.png"/>
                </div>
               
                <div className="poligonos-drop poligonos-drop7" id="1" onDragOver={allowdrop} onDrop={drop3}></div>
                <div className="poligonos-drop poligonos-drop8" id="2" onDragOver={allowdrop} onDrop={drop3}></div>
                <div className="poligonos-drop poligonos-drop9" id="3" onDragOver={allowdrop} onDrop={drop3}></div>
                    
                <div className="drag-poligonos">
                    <div className="poligonos-drag" draggable="true" id="vertice" onDragStart={drag}>Vértice</div>
                    <div className="poligonos-drag" draggable="true" id="lado" onDragStart={drag}>Lado</div>
                    <div className="poligonos-drag" draggable="true" id="angulo" onDragStart={drag}>Ángulo</div>
                   

                </div>

            </div>

        )

    }
    return (
        <div>
            <div className="Contador-poligonos">{counter + 1}/15</div>
            {juegoActivo == false ?
                <div>
                    {counter == 0 ?
                        <div>
                            <Juego/>
                        </div>
                        :counter == 1 ?
                        <div>
                            <Juego2/>
                        </div>
                        :counter == 2 ?
                        <div>
                            <Juego3/>
                        </div>
                        : <h1>Fin</h1>
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
export default function Angulos(){
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

    // numero 1
    let array = ["", "", ""]
    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array[1] != "" && array[2] != "" ) {
            if (array[1] == "transportador" && array[2] == "grado") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Relaciona cada definición con su concepto.",
                    0,
                    counter

                )
            }
            else {

                array = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Relaciona cada definición con su concepto.",
                    0,
                    counter

                )


            }
        }
    }
    const Juego = () => {
        return (
            <div className="poligonos">
                <h3>Relaciona cada definición con su concepto.</h3>
                <div className="grid-poligono">
                    <div>
                        <div className="drag-poligono">
                            <div className="drag-d-poligono" draggable="true" id="grado" onDragStart={drag}>Grado</div>
                            <div className="drag-d-poligono" draggable="true" id="compas" onDragStart={drag}>Compás</div>
                            <div className="drag-d-poligono" draggable="true" id="transportador" onDragStart={drag}>Transportador</div>
                            <div className="drag-d-poligono" draggable="true" id="metro" onDragStart={drag}>Metro</div>
                            

                        </div>
                    </div>
                    <div className="grid-poligono2">
                        <div className="drop-poligono ">
                            <div className="drag-d-poligono1" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="drag-d-poligono1" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                        </div>
                    
                        <div className="drop-poligono">
                            <div className="box-drop-poligono" >Es el instrumento que utilizamos para medir los ángulos.</div>
                            <div className="box-drop-poligono" >Es la unidad de medida de los ángulos.</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

    //numero 2
    let array2 = ["", "", "", "", ""]
    const drop2 = (e) => {
        //Para btener el id arrastrado
        if (array2[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array2[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array2[1] != "" && array2[2] != "" && array2[3] != "" && array2[4] != "" ) {
            if (array2[1] == "recto" && array2[2] == "obtuso" && array2[3] == "agudo" && array2[4] == "llano" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Relaciona cada ángulo de acuerdo con sus atributos.",
                    0,
                    counter

                )
            }
            else {

                array2 = ["", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Relaciona cada ángulo de acuerdo con sus atributos.",
                    0,
                    counter

                )


            }
        }
    }
    const Juego2 = () => {
        return (
            <div className="poligonos">
                <h3>Relaciona cada ángulo de acuerdo con sus atributos.</h3>
                <div className="grid-poligono">
                    <div>
                        <div className="drag-poligono">
                            <div className="drag-d-poligono" draggable="true" id="llano" onDragStart={drag}>Ángulo llano</div>
                            <div className="drag-d-poligono" draggable="true" id="obtuso" onDragStart={drag}>Ángulo obtuso</div>
                            <div className="drag-d-poligono" draggable="true" id="recto" onDragStart={drag}>Ángulo recto</div>
                            <div className="drag-d-poligono" draggable="true" id="agudo" onDragStart={drag}>Ángulo agudo</div>
                            

                        </div>
                    </div>
                    <div className="grid-poligono2">
                        <div className="drop-poligono ">
                            <div className="drag-d-poligono1" id="1" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="drag-d-poligono1" id="2" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="drag-d-poligono1" id="3" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="drag-d-poligono1" id="4" onDragOver={allowdrop} onDrop={drop2}></div>
                        </div>
                    
                        <div className="drop-poligono">
                            <div className="box-drop-poligono" >Es aquel ángulo que mide 90°.</div>
                            <div className="box-drop-poligono" >Es aquel ángulo que mide más de 90°.</div>
                            <div className="box-drop-poligono" >Es aquel ángulo que mide menos de 90°.</div>
                            <div className="box-drop-poligono" >Es aquel ángulo que mide 180°.</div>


                        </div>


                    </div>

                </div>
            </div>

        )

    }

     //numero 3
     let array3 = ["", "", "", "", ""]
     const drop3 = (e) => {
         //Para btener el id arrastrado
         if (array3[parseInt(e.target.id)] == "") {
             let data = e.dataTransfer.getData("text")
             //agrego el arreglo del elemento al elmento soltado
             array3[parseInt(e.target.id)] = data;
             //que se agregue al cuadro sleccioonad
             e.target.appendChild(document.getElementById(data))
         }
         if (array3[1] != "" && array3[2] != "" && array3[3] != "" && array3[4] != "" ) {
             if (array3[1] == "llano" && array3[2] == "recto" && array3[3] == "agudo" && array3[4] == "obtuso" ) {
 
                 setJuegoActivo(true)
                 setSiguienteJuegoActivo(true)
                 setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                 PreguntasAnalisis(
                     router.query.id,
                     true,
                     "Relaciona cada ángulo de acuerdo con sus atributos.",
                     0,
                     counter
 
                 )
             }
             else {
 
                 array3 = ["", "", "", "", ""]
 
                 setJuegoActivo(true)
                 setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
 
                 PreguntasAnalisis(
                     router.query.id,
                     false,
                     "Relaciona cada ángulo de acuerdo con sus atributos.",
                     0,
                     counter
 
                 )
 
 
             }
         }
     }
     const Juego3 = () => {
         return (
             <div className="poligonos">
                 <h3>Relaciona cada ángulo de acuerdo con sus atributos.</h3>
                 <div className="grid-poligono">
                     <div>
                         <div className="drag-poligono">
                             <div className="drag-d-angulo" draggable="true" id="llano" onDragStart={drag}>Ángulo llano</div>
                             <div className="drag-d-angulo" draggable="true" id="obtuso" onDragStart={drag}>Ángulo obtuso</div>
                             <div className="drag-d-angulo" draggable="true" id="recto" onDragStart={drag}>Ángulo recto</div>
                             <div className="drag-d-angulo" draggable="true" id="agudo" onDragStart={drag}>Ángulo agudo</div>
                             
 
                         </div>
                     </div>
                     <div className="grid-angulos2">
                         <div >
                            <div className="box-drop-angulo" ><img src="/img/llano.png"/></div>
                            <div className="drag-d-angulo2" id="1" onDragOver={allowdrop} onDrop={drop3}></div>
                           </div>
                           <div>
                            <div className="box-drop-angulo" ><img src="/img/recto.png"/></div>
                            <div className="drag-d-angulo2" id="2" onDragOver={allowdrop} onDrop={drop3}></div>
                           </div>
                           <div>
                            <div className="box-drop-angulo" ><img src="/img/agudo.png"/></div>
                            
                             <div className="drag-d-angulo2" id="3" onDragOver={allowdrop} onDrop={drop3}></div>
                            </div>
                            <div>
                             <div className="box-drop-angulo" ><img src="/img/obtuso.png"/></div>
                             
                             <div className="drag-d-angulo2" id="4" onDragOver={allowdrop} onDrop={drop3}></div>
                        
 
 
                         </div>
 
 
                     </div>
 
                 </div>
             </div>
 
         )
 
     }

     //numero 4
     const arrayDato = [
        { image: "/img/llano.png", pregunta: "El ángulo que mide 180° es llamado", repuesta: [{ valor: "Ángulo recto", validar: false }, { valor: "Ángulo agudo", validar: false }, { valor: "Ángulo obtuso", validar: false }, { valor: "Ángulo llano", validar: true }] },
        { image: "/img/recto.png", pregunta: "El ángulo que mide 90° es llamado", repuesta: [{ valor: "Ángulo recto", validar: true }, { valor: "Ángulo agudo", validar: false }, { valor: "Ángulo obtuso", validar: false }, { valor: "Ángulo llano", validar: false }] },
        { image: "/img/agudo.png", pregunta: "El ángulo que mide menos de 90° es llamado", repuesta: [{ valor: "Ángulo recto", validar: false }, { valor: "Ángulo agudo", validar: true }, { valor: "Ángulo obtuso", validar: false }, { valor: "Ángulo llano", validar: false }] },
        { image: "/img/obtuso.png", pregunta: "El ángulo que mide más de 90° es llamado", repuesta: [{ valor: "Ángulo recto", validar: false }, { valor: "Ángulo agudo", validar: false }, { valor: "Ángulo obtuso", validar: true }, { valor: "Ángulo llano", validar: false }] },
        { image: "/img/agudos.png", pregunta: "Los ángulos que se muestran en la imagen de al lado según sus medidas, a qué tipo de ángulos pertencen?", repuesta: [{ valor: "Ángulo recto", validar: false }, { valor: "Ángulo agudo", validar: true }, { valor: "Ángulo obtuso", validar: false }, { valor: "Ángulo llano", validar: false }] },
        { image: "/img/complemento.png", pregunta: "¿Cuál es el complemento del ángulo de la izquierda?", repuesta: [{ valor: "50", validar: true }, { valor: "45", validar: false }, { valor: "40", validar: false }, { valor: "55", validar: false }] },
        { image: "/img/complemento2.png", pregunta: "¿Cuál es el complemento del ángulo de la izquierda?", repuesta: [{ valor: "50", validar: false }, { valor: "45", validar: false }, { valor: "60", validar: false }, { valor: "30", validar: true }] },

    ]
    const Juego4 = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Relaciona de acuerdo al tipo de ángulo al que pertenece.",
                    0,
                    counter

                )
            }
            else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Relaciona de acuerdo al tipo de ángulo al que pertenece.",
                    0,
                    counter

                )
            }

        }
        return (
            <div className="juego7-poligono">
                
                <div className="img-poli">
                    <img src={props.data.image} />
                </div>
                <div>
                    <h4>{props.data.pregunta}</h4>
                    <div className="juego7-poligono-repuesta">
                        {props.data.repuesta.map(e =>
                            <div><button onClick={() => validarPregunta(e.validar)}>{e.valor}</button></div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="Contador-poligonos">{counter + 1}/10</div>
            {juegoActivo == false ?
                <div>
                    {counter == 0 ?
                        <div>
                            <Juego4 data={arrayDato[6]}/>

                        </div>
                        :counter == 1 ?
                        <div>
                            <Juego2/>
                        </div>
                        :counter == 2 ?
                        <div>
                            <Juego4 data={arrayDato[4]}/>

                        </div>
                        :counter == 3 ?
                        <div>
                             <Juego4 data={arrayDato[2]}/>
                        </div>
                        :counter == 4 ?
                        <div>
                            <Juego4 data={arrayDato[1]}/>
                        </div>
                        :counter == 5 ?
                        <div>
                            <Juego4 data={arrayDato[0]}/>
                           
                        </div>
                        :counter == 6 ?
                        <div>
                            <Juego4 data={arrayDato[3]}/>
                        </div>
                        :counter == 7 ?
                        <div>
                            <Juego3/>

                        </div>
                        :counter == 8 ?
                        <div>
                            <Juego4 data={arrayDato[5]}/>
                        </div>
                        :counter == 9 ?
                        <div>
                            <Juego/>

                        </div>
                        :  <Fin posicionNivelActual={4}  nivel={"nivel2"} nombre={router.query.id} siguienteNivel="/Geometria/Simetria"  numero={10}/>
                        
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
import { useRouter } from "next/router"
import { useState } from "react"
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis"
import Feliciades from "../Feliciades"
import Fin from "../Fin"
import IntentaloDeNuevo from "../IntentaloDeNuevo"
export default function Longitud(){
    const [counter, setCounter] = useState(0)
    const valorIncial = { decena: 0, centena: 0, unidad: 0, longitud: 0 }
    const [valor, setValor] = useState(valorIncial)
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const router = useRouter()
    
    const Tiempo = () => {
        juegoMensajeActivo == "HAZ HECHO UN BUEN TRABAJO " ?
            setTimeout(() => {
                setJuegoActivo(false)
                setCounter(counter + 1)
            }, 3000)
            : setTimeout(() => {
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
    let array = ["", "", "","","",""]
    
    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "") {
            if (array[1] == "2mil" && array[2] == "5k" && array[3] == "8mil" && array[4] == "10"  && array[5] == "7") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Convierte correctamente las siguientes medidas.",
                    0,
                    counter

                )
            }
            else {

                array = ["", "", "","","",""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Convierte correctamente las siguientes medidas.",
                    0,
                    counter

                )



            }
        }
    }
    
    const Juego = () => {
        return (
           <>
                <h3>Convierte correctamente las siguientes medidas.</h3>
                <div className="grid-longitud">
                    <div className="grid-l">
                      
                            <div className="box-drop-longitud" >20 m</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                    
                            <div className="box-drop-longitud" >5,000 m</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                           
                            <div className="box-drop-longitud" >8 km</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                        
                            <div className="box-drop-longitud" >1,000 cm</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                        
                            <div className="box-drop-longitud" >700 cm</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="5" onDragOver={allowdrop} onDrop={drop}></div>
                        
                        
                    </div>
                    <div className="u-l">
                        <h1>cm</h1>
                        <h1>km</h1>
                        <h1>m</h1>
                        <h1>m</h1>
                        <h1>m</h1>
                      

                    </div>
                  
                        <div className="drag-longitud">
                            <div className="drag-d-longitud" draggable="true" id="2mil" onDragStart={drag}>2,000</div>
                            <div className="drag-d-longitud" draggable="true" id="8mil" onDragStart={drag}>8,000 </div>
                            <div className="drag-d-longitud" draggable="true" id="5k" onDragStart={drag}>5 </div>
                            <div className="drag-d-longitud" draggable="true" id="7" onDragStart={drag}>7 </div>
                            <div className="drag-d-longitud" draggable="true" id="200" onDragStart={drag}>200 </div>
                            <div className="drag-d-longitud" draggable="true" id="800" onDragStart={drag}>800 </div>
                            <div className="drag-d-longitud" draggable="true" id="10" onDragStart={drag}>10 </div>
                            <div className="drag-d-longitud" draggable="true" id="50" onDragStart={drag}>50 </div>
                            <div className="drag-d-longitud" draggable="true" id="100" onDragStart={drag}>100</div>
                            <div className="drag-d-longitud" draggable="true" id="70" onDragStart={drag}>70</div>
                        
                    </div>
                </div>
                </>

        )

    }
    const Ejercicio1 = () => {
        const img = [{ numero: "Kilómetro", validar: false }, { numero: "Metro", validar: true }, { numero: "Centímetro", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "La unidad principal para medir longitud es el:",
                    0,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "La unidad principal para medir longitud es el:",
                    0,
                    counter
                )
            }
        }
        return (
            <div className="medicion">
                <div>
                    <h3>La unidad principal para medir longitud es el: </h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio2 = () => {
        const img = [{ numero: "100 cm", validar: true}, { numero: "1,000 cm", validar: false }, { numero: "10 cm", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "1 metro es igual a:",
                    0,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "1 metro es igual a:",
                    0,
                    counter
                )
            }
        }
        return (
            <div className="medicion">
                <div>
                    <h3>1 metro es igual a:  </h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio3 = () => {
        const img = [{ numero: "100 m", validar: false}, { numero: "10 m", validar: false }, { numero: "1,000 m", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "1 kilómetro es igual a:",
                    0,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "1 kilómetro es igual a:",
                    0,
                    counter
                )
            }
        }
        return (
            <div className="medicion">
                <div>
                    <h3>1 kilómetro es igual a:  </h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio4 = () => {
        const img = [{ img: "/img/regla.png", validar: true }, { img: "/img/termometro.png", validar: false }, { img: "/img/probeta.png", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige uno de los instrumentos que utilizamos para medir la longitud.",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige uno de los instrumentos que utilizamos para medir la longitud.",
                    1,
                    counter

                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige uno de los instrumentos que utilizamos para medir la longitud.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><img onClick={() => validar(e.validar)} src={e.img} /></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio5 = () => {
        const img = [{ img: "/img/balanza.png", validar: false }, { img: "/img/probeta.png", validar: false }, { img: "/img/cinta.png", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige uno de los instrumentos que utilizamos para medir la longitud.",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige uno de los instrumentos que utilizamos para medir la longitud.",
                    1,
                    counter

                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige uno de los instrumentos que utilizamos para medir la longitud.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><img onClick={() => validar(e.validar)} src={e.img} /></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio6 = () => {
        const img = [{ img: "/img/termometro.png", validar: false }, { img: "/img/cintametrica.png", validar: true }, { img: "/img/balanza.png", validar:false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige uno de los instrumentos que utilizamos para medir la longitud.",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige uno de los instrumentos que utilizamos para medir la longitud.",
                    1,
                    counter

                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige uno de los instrumentos que utilizamos para medir la longitud.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><img onClick={() => validar(e.validar)} src={e.img} /></div>
                    )}
                </div>
            </div>
        )
    }
    let array7 = ["", "", "","","",""]
    const drop7 = (e) => {
        //Para btener el id arrastrado
        if (array7[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array7[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array7[1] != "" && array7[2] != "" && array7[3] != "" && array7[4] != "" && array7[5] != "") {
            if (array7[1] == "50" && array7[2] == "8" && array7[3] == "6mil" && array7[4] == "34"  && array7[5] == "42mil") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Convierte correctamente las siguientes medidas.",
                    0,
                    counter

                )
            }
            else {

                array7 = ["", "", "","","",""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Convierte correctamente las siguientes medidas.",
                    0,
                    counter

                )



            }
        }
    }
    const Juego7 = () => {
        return (
           <>
                <h3>Convierte correctamente las siguientes medidas.</h3>
                <div className="grid-longitud">
                    <div className="grid-l">
                      
                            <div className="box-drop-longitud" >5,000 cm</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="1" onDragOver={allowdrop} onDrop={drop7}></div>
                    
                            <div className="box-drop-longitud" >8,000 m</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="2" onDragOver={allowdrop} onDrop={drop7}></div>
                           
                            <div className="box-drop-longitud" >6 km</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="3" onDragOver={allowdrop} onDrop={drop7}></div>
                        
                            <div className="box-drop-longitud" >3,400 cm</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="4" onDragOver={allowdrop} onDrop={drop7}></div>
                        
                            <div className="box-drop-longitud" >42 km</div>
                            <div className="box-drop-longitud" >=</div>
                            <div className="box-drop-longitud" id="5" onDragOver={allowdrop} onDrop={drop7}></div>
                        
                        
                    </div>
                    <div className="u-l">
                        <h1>m</h1>
                        <h1>km</h1>
                        <h1>m</h1>
                        <h1>m</h1>
                        <h1>m</h1>
                      

                    </div>
                  
                        <div className="drag-longitud">
                            <div className="drag-d-longitud" draggable="true" id="2mil" onDragStart={drag}>4,200</div>
                            <div className="drag-d-longitud" draggable="true" id="6mil" onDragStart={drag}>6,000 </div>
                            <div className="drag-d-longitud" draggable="true" id="50" onDragStart={drag}>50 </div>
                            <div className="drag-d-longitud" draggable="true" id="8" onDragStart={drag}>8 </div>
                            <div className="drag-d-longitud" draggable="true" id="3mil4" onDragStart={drag}>3,400 </div>
                            <div className="drag-d-longitud" draggable="true" id="800" onDragStart={drag}>800 </div>
                            <div className="drag-d-longitud" draggable="true" id="34" onDragStart={drag}>34 </div>
                            <div className="drag-d-longitud" draggable="true" id="50" onDragStart={drag}>50 </div>
                            <div className="drag-d-longitud" draggable="true" id="42mil" onDragStart={drag}>42,000</div>
                            <div className="drag-d-longitud" draggable="true" id="70" onDragStart={drag}>70</div>
                        
                    </div>
                </div>
                </>

        )

    }
    let array8 = ["", "", ""]
    const drop8 = (e) => {
        //Para btener el id arrastrado
        if (array8[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array8[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array8[1] != "" && array8[2] != "" ) {
            if (array8[1] == "100" && array8[2] == "55" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "¿Cuánto mide?",
                    2,
                    counter

                )
            }
            else {

                array8 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "¿Cuánto mide?",
                    2,
                    counter

                )



            }
        }
    }
    const Juego8 = () => {
        return (
           <>
                <h3>¿Cuánto mide?</h3>
                <div className="grid-longitud2">
                    <div className="grid-l2">
                      
                            <div className="box-drop-longitud2" ><img src="/img/medir1.png"/></div>
                            <div className="box-drop-longitud2" ><img src="/img/medir2.png"/></div>
                           <div className="grid-sl">
                            
                            <div className="box-drop-longitud3" id="1" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-longitud3">cm</div>
                            
                            <div className="box-drop-longitud3" id="2" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-longitud3" > cm</div>
                            
                            </div>
                        
                    </div>
                   
                  
                        <div className="drag-longitud2">
                            <div className="drag-d-longitud2" draggable="true" id="10" onDragStart={drag}>10</div>
                            <div className="drag-d-longitud2" draggable="true" id="98" onDragStart={drag}>98 </div>
                            <div className="drag-d-longitud2" draggable="true" id="50" onDragStart={drag}>50 </div>
                            <div className="drag-d-longitud2" draggable="true" id="100" onDragStart={drag}>100 </div>
                            <div className="drag-d-longitud2" draggable="true" id="60" onDragStart={drag}>60</div>
                            <div className="drag-d-longitud2" draggable="true" id="55" onDragStart={drag}>55 </div>
                            
                        
                    </div>
                </div>
                </>

        )

    }
    
    let array9 = ["", "", ""]
    const drop9 = (e) => {
        //Para btener el id arrastrado
        if (array9[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array9[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array9[1] != "" && array9[2] != "" ) {
            if (array9[1] == "7" && array9[2] == "33" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "¿Cuánto mide?",
                    2,
                    counter

                )
            }
            else {

                array9 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "¿Cuánto mide?",
                    2,
                    counter

                )



            }
        }
    }
    const Juego9 = () => {
        return (
           <>
                <h3>¿Cuánto mide?</h3>
                <div className="grid-longitud2">
                    <div className="grid-l2">
                      
                            <div className="box-drop-longitud2" ><img src="/img/medir3.png"/></div>
                            <div className="box-drop-longitud2" ><img src="/img/medir4.png"/></div>
                           <div className="grid-sl">
                            
                            <div className="box-drop-longitud3" id="1" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-longitud3">m</div>
                            
                            <div className="box-drop-longitud3" id="2" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-longitud3" > m</div>
                            
                            </div>
                        
                    </div>
                   
                  
                        <div className="drag-longitud2">
                            <div className="drag-d-longitud2" draggable="true" id="44" onDragStart={drag}>44</div>
                            <div className="drag-d-longitud2" draggable="true" id="77" onDragStart={drag}>77 </div>
                            <div className="drag-d-longitud2" draggable="true" id="33" onDragStart={drag}>33 </div>
                            <div className="drag-d-longitud2" draggable="true" id="9" onDragStart={drag}>9 </div>
                            <div className="drag-d-longitud2" draggable="true" id="7" onDragStart={drag}>7</div>
                            <div className="drag-d-longitud2" draggable="true" id="55" onDragStart={drag}>55 </div>
                            
                        
                    </div>
                </div>
                </>

        )

    }

    let array10 = ["", "", ""]
    const drop10 = (e) => {
        //Para btener el id arrastrado
        if (array10[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array10[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array10[1] != "" && array10[2] != "" ) {
            if ((array10[1] == "6" && array10[2] == "Km" )||(array10[1] == "6mil" && array10[2] == "M" ) ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "¿Cuál es la distancia que hay desde la casa a la escuela?",
                    2,
                    counter

                )
            }
            else {

                array10 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "¿Cuál es la distancia que hay desde la casa a la escuela?",
                    2,
                    counter

                )



            }
        }
    }
    const Juego10 = () => {
        return (
           <>
                <h3>¿Cuál es la distancia que hay desde la casa a la escuela?</h3>
                <div className="grid-medir">
                    <div className="grid-medir2">
                      
                            <div className="box-drop-medir" ><img src="/img/medir5.png"/></div>
                           <div className="grid-medir-3">
                           <div className="letra" >Cantidad</div>
                           <div className="letra" >Unidad de Medida</div>

                            <div className="box-drop-medir-4" id="1" onDragOver={allowdrop} onDrop={drop10}></div>
                             
                            <div className="box-drop-medir-4" id="2" onDragOver={allowdrop} onDrop={drop10}></div>
                            </div>
                         
                        
                    </div>
                   
                  
                        <div className="drag-medir2">
                            <div className="drag-d-medir2" draggable="true" id="6" onDragStart={drag}>6</div>
                            <div className="drag-d-medir2" draggable="true" id="60" onDragStart={drag}>60 </div>
                            <div className="drag-d-medir2" draggable="true" id="Km" onDragStart={drag}>Km </div>
                            <div className="drag-d-medir2" draggable="true" id="6mil" onDragStart={drag}>6,000 </div>
                            <div className="drag-d-medir2" draggable="true" id="3" onDragStart={drag}>3 </div>
                            <div className="drag-d-medir2" draggable="true" id="Cm" onDragStart={drag}>Cm </div>
                            <div className="drag-d-medir2" draggable="true" id="4mil" onDragStart={drag}>4,000</div>
                            <div className="drag-d-medir2" draggable="true" id="40" onDragStart={drag}>40 </div>
                            <div className="drag-d-medir2" draggable="true" id="M" onDragStart={drag}>M </div>
                            <div className="drag-d-medir2" draggable="true" id="30" onDragStart={drag}>30 </div>

                            
                        
                    </div>
                </div>
                </>

        )

    }
    let array11 = ["", "", ""]
    const drop11 = (e) => {
        //Para btener el id arrastrado
        if (array11[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array11[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array11[1] != "" && array11[2] != "" ) {
            if ((array11[1] == "16" && array11[2] == "Km" )||(array11[1] == "16mil" && array11[2] == "M" ) ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "¿Cuál es la distancia que hay desde la casa al súpermercado?",
                    2,
                    counter

                )
            }
            else {

                array11 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "¿Cuál es la distancia que hay desde la casa al súpermercado?",
                    2,
                    counter

                )



            }
        }
    }
    const Juego11 = () => {
        return (
           <>
                <h3>¿Cuál es la distancia que hay desde la casa al súpermercado?</h3>
                <div className="grid-medir">
                    <div className="grid-medir2">
                      
                            <div className="box-drop-medir" ><img src="/img/medir6.png"/></div>
                           <div className="grid-medir-3">
                           <div className="letra" >Cantidad</div>
                           <div className="letra" >Unidad de Medida</div>

                            <div className="box-drop-medir-4" id="1" onDragOver={allowdrop} onDrop={drop11}></div>
                             
                            <div className="box-drop-medir-4" id="2" onDragOver={allowdrop} onDrop={drop11}></div>
                            </div>
                         
                        
                    </div>
                   
                  
                        <div className="drag-medir2">
                            <div className="drag-d-medir2" draggable="true" id="6mil" onDragStart={drag}>6,000</div>
                            <div className="drag-d-medir2" draggable="true" id="16" onDragStart={drag}>16 </div>
                            <div className="drag-d-medir2" draggable="true" id="Km" onDragStart={drag}>Km </div>
                            <div className="drag-d-medir2" draggable="true" id="16mil" onDragStart={drag}>16,000 </div>
                            <div className="drag-d-medir2" draggable="true" id="160" onDragStart={drag}>160 </div>
                            <div className="drag-d-medir2" draggable="true" id="Cm" onDragStart={drag}>Cm </div>
                            <div className="drag-d-medir2" draggable="true" id="mil6" onDragStart={drag}>1,600</div>
                            <div className="drag-d-medir2" draggable="true" id="60" onDragStart={drag}>60 </div>
                            <div className="drag-d-medir2" draggable="true" id="M" onDragStart={drag}>M </div>
                            <div className="drag-d-medir2" draggable="true" id="30" onDragStart={drag}>30 </div>

                            
                        
                    </div>
                </div>
                </>

        )

    }
    let array12 = ["", "", ""]
    const drop12 = (e) => {
        //Para btener el id arrastrado
        if (array12[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array12[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array12[1] != "" && array12[2] != "" ) {
            if ((array12[1] == "7" && array12[2] == "Km" )||(array12[1] == "7mil" && array12[2] == "M" ) ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "¿Cuál es la distancia que hay desde la casa al hospital?",
                    2,
                    counter

                )
            }
            else {

                array12 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "¿Cuál es la distancia que hay desde la casa al hospital?",
                    2,
                    counter

                )



            }
        }
    }
    const Juego12 = () => {
        return (
           <>
                <h3>¿Cuál es la distancia que hay desde la casa al hospital?</h3>
                <div className="grid-medir">
                    <div className="grid-medir2">
                      
                            <div className="box-drop-medir" ><img src="/img/medir7.png"/></div>
                           <div className="grid-medir-3">
                           <div className="letra" >Cantidad</div>
                           <div className="letra" >Unidad de Medida</div>

                            <div className="box-drop-medir-4" id="1" onDragOver={allowdrop} onDrop={drop12}></div>
                             
                            <div className="box-drop-medir-4" id="2" onDragOver={allowdrop} onDrop={drop12}></div>
                            </div>
                         
                        
                    </div>
                   
                  
                        <div className="drag-medir2">
                            <div className="drag-d-medir2" draggable="true" id="7mil" onDragStart={drag}>7,000</div>
                            <div className="drag-d-medir2" draggable="true" id="17" onDragStart={drag}>17 </div>
                            <div className="drag-d-medir2" draggable="true" id="Km" onDragStart={drag}>Km </div>
                            <div className="drag-d-medir2" draggable="true" id="17mil" onDragStart={drag}>17,000 </div>
                            <div className="drag-d-medir2" draggable="true" id="170" onDragStart={drag}>170 </div>
                            <div className="drag-d-medir2" draggable="true" id="Cm" onDragStart={drag}>Cm </div>
                            <div className="drag-d-medir2" draggable="true" id="mil7" onDragStart={drag}>1,700</div>
                            <div className="drag-d-medir2" draggable="true" id="70" onDragStart={drag}>70 </div>
                            <div className="drag-d-medir2" draggable="true" id="M" onDragStart={drag}>M </div>
                            <div className="drag-d-medir2" draggable="true" id="7" onDragStart={drag}>7 </div>

                            
                        
                    </div>
                </div>
                </>

        )

    }
    let array13 = ["", "", ""]
    const drop13 = (e) => {
        //Para btener el id arrastrado
        if (array13[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array13[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array13[1] != "" && array13[2] != "" ) {
            if ((array13[1] == "4" && array13[2] == "Km" )||(array13[1] == "4mil" && array13[2] == "M" ) ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Jaimito salió corriendo desde el parque y va a la cancha de baloncesto, si ha corrido 2 Km, ¿Qué distancia le falta?",
                    2,
                    counter

                )
            }
            else {

                array13 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Jaimito salió corriendo desde el parque y va a la cancha de baloncesto, si ha corrido 2 Km, ¿Qué distancia le falta?",
                    2,
                    counter

                )



            }
        }
    }
    const Juego13 = () => {
        return (
           <>
                <h3>Jaimito salió corriendo desde el parque y va a la cancha de baloncesto, si ha corrido 2 Km, ¿Qué distancia le falta?</h3>
                <div className="grid-medir">
                    <div className="grid-medir2">
                      
                            <div className="box-drop-medir" ><img src="/img/medir8.png"/></div>
                           <div className="grid-medir-3">
                           <div className="letra" >Cantidad</div>
                           <div className="letra" >Unidad de Medida</div>

                            <div className="box-drop-medir-4" id="1" onDragOver={allowdrop} onDrop={drop13}></div>
                             
                            <div className="box-drop-medir-4" id="2" onDragOver={allowdrop} onDrop={drop13}></div>
                            </div>
                         
                        
                    </div>
                   
                  
                        <div className="drag-medir2">
                            <div className="drag-d-medir2" draggable="true" id="4mil" onDragStart={drag}>4,000</div>
                            <div className="drag-d-medir2" draggable="true" id="14" onDragStart={drag}>14 </div>
                            <div className="drag-d-medir2" draggable="true" id="Km" onDragStart={drag}>Km </div>
                            <div className="drag-d-medir2" draggable="true" id="15mil" onDragStart={drag}>15,000 </div>
                            <div className="drag-d-medir2" draggable="true" id="6" onDragStart={drag}>6 </div>
                            <div className="drag-d-medir2" draggable="true" id="Cm" onDragStart={drag}>Cm </div>
                            <div className="drag-d-medir2" draggable="true" id="mil4" onDragStart={drag}>1,400</div>
                            <div className="drag-d-medir2" draggable="true" id="6mil" onDragStart={drag}>6,000 </div>
                            <div className="drag-d-medir2" draggable="true" id="M" onDragStart={drag}>M </div>
                            <div className="drag-d-medir2" draggable="true" id="4" onDragStart={drag}>4 </div>

                            
                        
                    </div>
                </div>
                </>

        )

    }
    let array14 = ["", "", ""]
    const drop14 = (e) => {
        //Para btener el id arrastrado
        if (array14[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array14[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array14[1] != "" && array14[2] != "" ) {
            if ((array14[1] == "3" && array14[2] == "Km" )||(array14[1] == "3mil" && array14[2] == "M" ) ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Marcos salió de su casa a la escuela, si ha corrido 2,500 M, ¿Qué distancia le falta?",
                    2,
                    counter

                )
            }
            else {

                array14 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Marcos salió de su casa a la escuela, si ha corrido 2,500 M, ¿Qué distancia le falta?",
                    2,
                    counter

                )



            }
        }
    }
    const Juego14 = () => {
        return (
           <>
                <h3>Marcos salió de su casa a la escuela, si ha corrido 2,500 M, ¿Qué distancia le falta?</h3>
                <div className="grid-medir">
                    <div className="grid-medir2">
                      
                            <div className="box-drop-medir" ><img src="/img/medir9.png"/></div>
                           <div className="grid-medir-3">
                           <div className="letra" >Cantidad</div>
                           <div className="letra" >Unidad de Medida</div>

                            <div className="box-drop-medir-4" id="1" onDragOver={allowdrop} onDrop={drop14}></div>
                             
                            <div className="box-drop-medir-4" id="2" onDragOver={allowdrop} onDrop={drop14}></div>
                            </div>
                         
                        
                    </div>
                   
                  
                        <div className="drag-medir2">
                            <div className="drag-d-medir2" draggable="true" id="3mil" onDragStart={drag}>3,000</div>
                            <div className="drag-d-medir2" draggable="true" id="30" onDragStart={drag}>30 </div>
                            <div className="drag-d-medir2" draggable="true" id="Km" onDragStart={drag}>Km </div>
                            <div className="drag-d-medir2" draggable="true" id="5mil5" onDragStart={drag}>5,500 </div>
                            <div className="drag-d-medir2" draggable="true" id="3" onDragStart={drag}>3 </div>
                            <div className="drag-d-medir2" draggable="true" id="Cm" onDragStart={drag}>Cm </div>
                            <div className="drag-d-medir2" draggable="true" id="300" onDragStart={drag}>300</div>
                            <div className="drag-d-medir2" draggable="true" id="55" onDragStart={drag}>55 </div>
                            <div className="drag-d-medir2" draggable="true" id="M" onDragStart={drag}>M </div>
                            <div className="drag-d-medir2" draggable="true" id="550" onDragStart={drag}>550 </div>

                            
                        
                    </div>
                </div>
                </>

        )

    }

    
    return (
        <div>
            <div className="Contador-secuencia">{counter + 1}/15</div>

            {juegoActivo == false ?
                <div className="medicion">
                    {counter == 0 ?
                        <Ejercicio1 />
                        : counter == 1 ?
                        <Juego14 />
                        : counter == 2 ?
                        <Ejercicio3 />
                        : counter == 3 ?
                        <Juego12 />
                        : counter == 4 ?
                        <Ejercicio5 />
                        : counter == 5 ?
                        <Juego10 />
                        : counter == 6 ?
                        <Juego8 />
                        : counter == 7 ?
                        <Juego13 />
                        : counter == 8 ?
                        <Juego />
                        : counter == 9 ?
                        <Juego9 />
                        : counter == 10 ?
                        <Ejercicio6 />
                        : counter == 11 ?
                        <Juego11 />
                        : counter == 12 ?
                        <Ejercicio4 />
                        : counter == 13 ?
                        <Juego7 />
                        : counter == 14 ?
                        <Ejercicio2 />
                        : <Fin posicionNivelActual={2}  nivel={"nivel3"} nombre={router.query.id} siguienteNivel="/Medicion/Perimetro"  numero={15}/>
                        
                    }
                </div>
                : <Tiempo/>
            }
        </div>
    )
}
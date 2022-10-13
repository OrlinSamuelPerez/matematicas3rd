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

    //Numero 4
    let array4 = ["", "", "", ""]
    const drop4 = (e) => {
        //Para btener el id arrastrado
        if (array4[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array4[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array4[1] != "" && array4[2] != "" && array4[3] ) {
            if (array4[1] == "lado" && array4[2] == "vertice" && array4[3] == "angulo" ) {
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
                array4 = ["", "", "", ""]
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
    const Juego4 = () => {
        return (
            <div className="poligonos">
                <h3>Observa la figura e identifica los elementos del siguiente polígono.</h3>
                <div>
                    <img id="poligonos-img2" src="/img/elementos4.png"/>
                </div>
               
                <div className="poligonos-drop poligonos-drop10" id="1" onDragOver={allowdrop} onDrop={drop4}></div>
                <div className="poligonos-drop poligonos-drop11" id="2" onDragOver={allowdrop} onDrop={drop4}></div>
                <div className="poligonos-drop poligonos-drop12" id="3" onDragOver={allowdrop} onDrop={drop4}></div>
                    
                <div className="drag-poligonos">
                    <div className="poligonos-drag" draggable="true" id="vertice" onDragStart={drag}>Vértice</div>
                    <div className="poligonos-drag" draggable="true" id="lado" onDragStart={drag}>Lado</div>
                    <div className="poligonos-drag" draggable="true" id="angulo" onDragStart={drag}>Ángulo</div>
                   

                </div>

            </div>

        )

    }

    // Numero 5
    let array5 = ["", "", "", "", "", ""]
    const drop5 = (e) => {
        //Para btener el id arrastrado
        if (array5[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array5[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array5[1] != "" && array5[2] != "" && array5[3] != "" && array5[4] != "" && array5[5] != "") {
            if (array5[1] == "polignosregulares" && array5[2] == "triangulos" && array5[3] == "pentagonos" && array5[4] == "hexagonos" && array5[5] == "cuadrilateros") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Relaciona las siguientes operaciones y sus resultados.",
                    2,
                    counter

                )
            }
            else {

                array5 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Relaciona las siguientes operaciones y sus resultados.",
                    2,
                    counter

                )


            }
        }
    }
    const Juego5 = () => {
        return (
            <div className="poligonos">
                <h3>Relaciona cada polígono de acuerdo con sus atributos.</h3>
                <div className="grid-poligono">
                    <div>
                        <div className="drag-poligono">
                            <div className="drag-d-poligono" draggable="true" id="triangulos" onDragStart={drag}>Triángulos</div>
                            <div className="drag-d-poligono" draggable="true" id="pentagonos" onDragStart={drag}>Pentágonos</div>
                            <div className="drag-d-poligono" draggable="true" id="cuadrilateros" onDragStart={drag}>Cuadriláteros</div>
                            <div className="drag-d-poligono" draggable="true" id="hexagonos" onDragStart={drag}>Hexágonos</div>
                            <div className="drag-d-poligono" draggable="true" id="polignosregulares" onDragStart={drag}>Polígonos Regulares</div>
                            

                        </div>
                    </div>
                    <div className="grid-poligono2">
                        <div className="drop-poligono ">
                            <div className="drag-d-poligono1" id="1" onDragOver={allowdrop} onDrop={drop5}></div>
                            <div className="drag-d-poligono1" id="2" onDragOver={allowdrop} onDrop={drop5}></div>
                            <div className="drag-d-poligono1" id="3" onDragOver={allowdrop} onDrop={drop5}></div>
                            <div className="drag-d-poligono1" id="4" onDragOver={allowdrop} onDrop={drop5}></div>
                            <div className="drag-d-poligono1" id="5" onDragOver={allowdrop} onDrop={drop5}></div>
                        </div>
                    
                        <div className="drop-poligono">
                            <div className="box-drop-poligono" >Son aquellos polígonos que tienen todos sus lados y ángulos iguales.</div>
                            <div className="box-drop-poligono" >Son aquellos polígonos que tienen tres lados.</div>
                            <div className="box-drop-poligono" >Son aquellos polígonos que tienen cinco lados.</div>
                            <div className="box-drop-poligono" >Son aquellos polígonos que tienen seis lados.</div>
                            <div className="box-drop-poligono" >Son aquellos polígonos que tienen cuatros lados.</div>


                        </div>


                    </div>

                </div>
            </div>

        )

    }

    // Numero 6
    let array6 = ["", "", "", "", "", "", "", ""]

    const drop6 = (e) => {
        //Para btener el id arrastrado
        if (array6[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array6[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            console.log(data)
            console.log(array6)
        }
        if (array6[1] != "" && array6[2] != "" && array6[3] != "" && array6[4] != "" && array6[5] != "" && array6[6] != "" && array6[7] != "") {
            if ((array6[1] == "http://localhost:3000/img/cuadrilatero.png" || array6[1]== "http://localhost:3000/img/cuadrilatero2.png") && array6[2] == "http://localhost:3000/img/pentagono.png" && (array6[3] == "http://localhost:3000/img/triangulo2.png" || array6[3] == "http://localhost:3000/img/triangulo.png") && array6[4] == "http://localhost:3000/img/octagono.png" && array6[5] == "http://localhost:3000/img/hexagono.png" && (array6[6] == "http://localhost:3000/img/triangulo.png" || array6[6] == "http://localhost:3000/img/triangulo2.png") && (array6[7] == "http://localhost:3000/img/cuadrilatero2.png" || array6[7] == "http://localhost:3000/img/cuadrilatero.png")) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Ordena los animales en la posicion correcta.",
                    0,
                    counter

                )

            }
            else {
                array6 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Ordena los animales en la posicion correcta.",
                    0,
                    counter

                )



            }
        }
    }

    const Juego6 = () => {
        return (
            <div className="poligonos">
                <h3>Clasifica los siguientes polígonos.</h3>
                
                <div className="grid-poligono01">
                <div className="grid-cla">
                    <div>Cuadrilátero</div>
                    <div>Pentágono</div>
                    <div>Triángulo</div>
                    <div>Octágono</div>
                    <div>Hexágono</div>
                    <div>Triángulo</div>
                    <div>Cuadrilátero</div>
                </div>
                <div className="drop-poligono1">
                    <div className="box-drop-poligono1" id="1" onDragOver={allowdrop} onDrop={drop6}></div>
                    <div className="box-drop-poligono1" id="2" onDragOver={allowdrop} onDrop={drop6}></div>
                    <div className="box-drop-poligono1" id="3" onDragOver={allowdrop} onDrop={drop6}></div>
                    <div className="box-drop-poligono1" id="4" onDragOver={allowdrop} onDrop={drop6}></div>
                    <div className="box-drop-poligono1" id="5" onDragOver={allowdrop} onDrop={drop6}></div>
                    <div className="box-drop-poligono1" id="6" onDragOver={allowdrop} onDrop={drop6}></div>
                    <div className="box-drop-poligono1" id="7" onDragOver={allowdrop} onDrop={drop6}></div>



                </div>
               
            </div>
            <div >
            <div className="grid-img" >
                    <div className="poligonos-img" draggable="true" id="/img/hexagono.png" onDragStart={drag}><img className="img-orden1" src="/img/hexagono.png" /></div>
                    <div className="poligonos-img" draggable="true" id="/img/triangulo2.png" onDragStart={drag}><img className="img-orden1"  src="/img/triangulo2.png" /></div>
                    <div className="poligonos-img" draggable="true" id="/img/cuadrilatero.png" onDragStart={drag}><img className="img-orden1" src="/img/cuadrilatero.png" /></div>
                    <div className="poligonos-img" draggable="true" id="/img/pentagono.png" onDragStart={drag}><img className="img-orden1" src="/img/pentagono.png" /></div>
                    <div className="poligonos-img" draggable="true" id="/img/triangulo.png" onDragStart={drag}><img className="img-orden1" src="/img/triangulo.png" /></div>
                    <div className="poligonos-img" draggable="true" id="/img/cuadrilatero2.png" onDragStart={drag}><img className="img-orden1" src="/img/cuadrilatero2.png" /></div>
                    <div className="poligonos-img" draggable="true" id="/img/octagono.png" onDragStart={drag}><img className="img-orden1" src="/img/octagono.png" /></div>


                </div>
            </div>
            </div>
        )

    }

    //Numero 7 -16
    const arrayDato = [
        { image: "/img/hexagono.png", pregunta: "De acuerdo con la cantidad de lados, ¿A qué clasificación de polígonos pertenece?", repuesta: [{ valor: "Cuadrilátero", validar: false }, { valor: "Pentágono", validar: false }, { valor: "Triángulo", validar: false }, { valor: "Hexágono", validar: true }, { valor: "Octágono", validar: false }, { valor: "Heptágono", validar: false }] },
        { image: "/img/triangulo2.png", pregunta: "De acuerdo con la cantidad de lados, ¿A qué clasificación de polígonos pertenece?", repuesta: [{ valor: "Cuadrilátero", validar: false }, { valor: "Pentágono", validar: false }, { valor: "Triángulo", validar: true }, { valor: "Hexágono", validar: false }, { valor: "Octágono", validar: false }, { valor: "Heptágono", validar: false }] },
        { image: "/img/heptagono.png", pregunta: "De acuerdo con la cantidad de lados, ¿A qué clasificación de polígonos pertenece?", repuesta: [{ valor: "Cuadrilátero", validar: false }, { valor: "Pentágono", validar: false }, { valor: "Triángulo", validar: false }, { valor: "Hexágono", validar: false }, { valor: "Octágono", validar: false }, { valor: "Heptágono", validar: true }] },
        { image: "/img/cuadrilatero.png", pregunta: "De acuerdo con la cantidad de lados, ¿A qué clasificación de polígonos pertenece?", repuesta: [{ valor: "Cuadrilátero", validar: true }, { valor: "Pentágono", validar: false }, { valor: "Triángulo", validar: false }, { valor: "Hexágono", validar: false }, { valor: "Octágono", validar: false }, { valor: "Heptágono", validar: false }] },
        { image: "/img/pentagono.png",pregunta: "De acuerdo con la cantidad de lados, ¿A qué clasificación de polígonos pertenece?", repuesta: [{ valor: "Cuadrilátero", validar: false }, { valor: "Pentágono", validar: true }, { valor: "Triángulo", validar: false }, { valor: "Hexágono", validar: false }, { valor: "Octágono", validar: false }, { valor: "Heptágono", validar: false }] },
        { image: "/img/figura1.png",pregunta: "Observa la imagen de la izquierda y de acuerdo con la cantidad de lados, ¿A qué clasificación de polígonos pertenece?", repuesta: [{ valor: "Cuadrilátero", validar: false }, { valor: "Pentágono", validar: true }, { valor: "Triángulo", validar: false }, { valor: "Hexágono", validar: false }, { valor: "Octágono", validar: false }, { valor: "Heptágono", validar: false }] },
        { image: "/img/figura2.png",pregunta: "Observa la imagen de la izquierda y de acuerdo con la cantidad de lados, ¿A qué clasificación de polígonos pertenece?", repuesta: [{ valor: "Cuadrilátero", validar: true }, { valor: "Pentágono", validar: false }, { valor: "Triángulo", validar: false }, { valor: "Hexágono", validar: false }, { valor: "Octágono", validar: false }, { valor: "Heptágono", validar: false }] },

    ]
    const Juego7 = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el orden que ocupa el animal.",
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
                    "Selecciona el orden que ocupa el animal.",
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

    //Numero 12-16
     
    return (
        <div>
            <div className="Contador-poligonos">{counter + 1}/20</div>
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
                        :counter == 3 ?
                        <div>
                            <Juego4/>
                        </div>
                        :counter == 4 ?
                        <div>
                            <Juego5/>
                        </div>
                        :counter == 5 ?
                        <div>
                            <Juego6/>
                        </div>
                        :counter == 6 ?
                        <div>
                            <Juego7 data={arrayDato[0]} />
                        </div>
                        :counter == 7 ?
                        <div>
                            <Juego7 data={arrayDato[1]} />
                        </div>
                        :counter == 8 ?
                        <div>
                            <Juego7 data={arrayDato[2]} />
                        </div>
                         :counter == 9 ?
                         <div>
                             <Juego7 data={arrayDato[3]} />
                         </div>
                         :counter == 10 ?
                         <div>
                             <Juego7 data={arrayDato[4]} />
                         </div>
                         :counter == 11 ?
                         <div>
                             <Juego7 data={arrayDato[5]} />
                         </div>
                         :counter == 12 ?
                         <div>
                             <Juego7 data={arrayDato[6]} />
                         </div>
                         : <Fin posicionNivelActual={2} nivel={"nivel2"} nombre={router.query.id} siguienteNivel="/Geometria/Congruencia" numero={13} />
                        
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
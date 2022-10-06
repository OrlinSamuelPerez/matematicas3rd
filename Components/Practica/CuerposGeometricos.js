import { arrayRemove } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
export default function CuerposGeometricos(){
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
    //numero 1
    let array = ["", "", "", "", "", "", ""]

    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            e.target.style.backgroundSize = "80%"
            e.target.style.backgroundPosition = "center"
            e.target.style.backgroundRepeat = "no-repeat"

            console.log(data)
            console.log(array)
        }
        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" ) {
            if (array[1] == "http://localhost:3000/img/esfera.png"  && array[2] == "http://localhost:3000/img/piramide.png" && array[3] == "http://localhost:3000/img/cilindro.png" && array[4] == "http://localhost:3000/img/cubo.png" && array[5] == "http://localhost:3000/img/prisma.png" && array[6] == "http://localhost:3000/img/cono.png" ) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Clasifica los siguientes cuerpos geométricos.",
                    0,
                    counter

                )

            }
            else {
                array = ["", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Clasifica los siguientes cuerpos geométricos.",
                    0,
                    counter

                )



            }
        }
    }

    const Juego1 = () => {
        return (
            <div className="cuerposgeometricos">
                <h3>Clasifica los siguientes cuerpos geométricos.</h3>
                
                <div className="grid-cuerposgeometricos01">
                <div className="grid-cla2">
                    <div>Esfera</div>
                    <div>Pirámide</div>
                    <div>Cilindro</div>
                    <div>Cubo</div>
                    <div>Prisma</div>
                    <div>Cono</div>
                    
                </div>
                <div className="drop-cuerpogeometrico1">
                    <div className="box-drop-cuerpogeometrico1 " id="1" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop-cuerpogeometrico1 " id="2" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop-cuerpogeometrico1 " id="3" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop-cuerpogeometrico1 " id="4" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop-cuerpogeometrico1 " id="5" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop-cuerpogeometrico1 " id="6" onDragOver={allowdrop} onDrop={drop}></div>



                </div>
               
            </div>
            <div >
            <div className="grid-imgcg" >
                    <div className="cg-img" draggable="true" id="/img/cubo.png" onDragStart={drag}><img className="img-orden1" src="/img/cubo.png" /></div>
                    <div className="cg-img" draggable="true" id="/img/cono.png" onDragStart={drag}><img className="img-orden1"  src="/img/cono.png" /></div>
                    <div className="cg-img" draggable="true" id="/img/prisma.png" onDragStart={drag}><img className="img-orden1" src="/img/prisma.png" /></div>
                    <div className="cg-img" draggable="true" id="/img/esfera.png" onDragStart={drag}><img className="img-orden1" src="/img/esfera.png" /></div>
                    <div className="cg-img" draggable="true" id="/img/piramide.png" onDragStart={drag}><img className="img-orden1" src="/img/piramide.png" /></div>
                    <div className="cg-img" draggable="true" id="/img/cilindro.png" onDragStart={drag}><img className="img-orden1" src="/img/cilindro.png" /></div>


                </div>
            </div>
            </div>
        )

    }
    // numero 2

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
            if (array5[1] == "piramide" && array5[2] == "cono" && array5[3] == "esfera" && array5[4] == "cubo" && array5[5] == "cilindro") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Relaciona cada cuerpo geométrico de acuerdo con sus atributos.",
                    1,
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
                    "Relaciona cada cuerpo geométrico de acuerdo con sus atributos.",
                    1,
                    counter

                )


            }
        }
    }
    const Juego2 = () => {
        return (
            <div className="poligonos">
                <h3>Relaciona cada cuerpo geométrico de acuerdo con sus atributos.</h3>
                <div className="grid-poligono">
                    <div>
                        <div className="drag-poligono">
                            <div className="drag-d-poligono" draggable="true" id="esfera" onDragStart={drag}>Esfera</div>
                            <div className="drag-d-poligono" draggable="true" id="cubo" onDragStart={drag}>Cubo</div>
                            <div className="drag-d-poligono" draggable="true" id="piramide" onDragStart={drag}>Pirámide</div>
                            <div className="drag-d-poligono" draggable="true" id="cono" onDragStart={drag}>Cono</div>
                            <div className="drag-d-poligono" draggable="true" id="cilindro" onDragStart={drag}>Cilindro</div>
                            

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
                            <div className="box-drop-cg" >Es un poliedro cuya base es un polígono cualquiera y cuyas caras laterales son triángulos con un vértice en común.</div>
                            <div className="box-drop-cg" >Es un cuerpo geométrico que tiene un círculo como única base y una superficie lateral curva.</div>
                            <div className="box-drop-cg" >Es un semicírculo que gira sobre su propio diámetro.</div>
                            <div className="box-drop-cg" >Es una figura tridimencional que tiene 6 caras, 12 aristas y 8 vértices.</div>
                            <div className="box-drop-cg" >Es un cuerpo geométrico que está formado por un rectángulo que gira alrededor de uno de sus lados.</div>


                        </div>


                    </div>

                </div>
            </div>

        )

    }
 
    // numero 3 - 8
    const arrayDato = [
        { image: "/img/cono.png", pregunta: "¿Qué nombre recibe el cuerpo geométrico de la figura de la izquierda?", repuesta: [{ valor: "Cono", validar: true }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },
        { image: "/img/cilindro.png", pregunta: "¿Qué nombre recibe el cuerpo geométrico de la figura de la izquierda?", repuesta: [{ valor: "Cono", validar: false }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: true }, { valor: "Prisma", validar: false }] },
        { image: "/img/piramide.png", pregunta: "¿Qué nombre recibe el cuerpo geométrico de la figura de la izquierda?", repuesta: [{ valor: "Cono", validar: false }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: true }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },
        { image: "/img/cubo.png", pregunta: "¿Qué nombre recibe el cuerpo geométrico de la figura de la izquierda?", repuesta: [{ valor: "Cono", validar: false }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: true }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },
        { image: "/img/prisma.png",pregunta: "¿Qué nombre recibe el cuerpo geométrico de la figura de la izquierda?", repuesta: [{ valor: "Cono", validar: false }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: true }] },
        { image: "/img/esfera.png",pregunta: "¿Qué nombre recibe el cuerpo geométrico de la figura de la izquierda?", repuesta:[{ valor: "Cono", validar: false }, { valor: "Esfera", validar: true }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },

    ]
    const Juego3 = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Clasifica los siguientes cuerpos geométricos.",
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
                    "Clasifica los siguientes cuerpos geométricos.",
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

    // numero 9
    let array9 = ["", "", "", ""]
    const drop9 = (e) => {
        //Para btener el id arrastrado
        if (array9[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array9[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array9[1] != "" && array9[2] != "" && array9[3] ) {
            if (array9[1] == "vertice" && array9[2] == "cara" && array9[3] == "arista" ) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa la figura e identifica los elementos del siguiente cuerpo geométrico.",
                    0,
                    counter

                )

            }
            else {
                array9 = ["", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa la figura e identifica los elementos del siguiente cuerpo geométrico.",
                    0,
                    counter

                )
            }
        }
    }
    const Juego9 = () => {
        return (
            <div className="poligonos">
                <h3>Observa la figura e identifica los elementos del siguiente cuerpo geométricos.</h3>
                <div>
                    <img id="img-cg" src="/img/partes.png"/>
                </div>
               
                <div className="poligonos-drop poligonos-drop01" id="1" onDragOver={allowdrop} onDrop={drop9}></div>
                <div className="poligonos-drop poligonos-drop02" id="2" onDragOver={allowdrop} onDrop={drop9}></div>
                <div className="poligonos-drop poligonos-drop03" id="3" onDragOver={allowdrop} onDrop={drop9}></div>
                    
                <div className="drag-poligonos">
                    <div className="poligonos-drag" draggable="true" id="cara" onDragStart={drag}>Cara</div>
                    <div className="poligonos-drag" draggable="true" id="vertice" onDragStart={drag}>Vértice</div>
                    <div className="poligonos-drag" draggable="true" id="arista" onDragStart={drag}>Arista</div>
                   

                </div>

            </div>

        )

    }

     // numero 10
     let array10 = ["", "", "", "",""]
     const drop10 = (e) => {
         //Para btener el id arrastrado
         if (array10[parseInt(e.target.id)] == "") {
             let data = e.dataTransfer.getData("text")
             //agrego el arreglo del elemento al elmento soltado
             array10[parseInt(e.target.id)] = data;
             //que se agregue al cuadro sleccioonad
             e.target.appendChild(document.getElementById(data))
         }
         if (array10[1] != "" && array10[2] != "" && array10[3] != "" && array10[4] != ""  ) {
             if (array10[1] == "vertice" && array10[2] == "cara" && array10[3] == "arista"&& array10[4] == "base" ) {
                 setJuegoActivo(true)
                 setSiguienteJuegoActivo(true)
                 setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                 PreguntasAnalisis(
                     router.query.id,
                     true,
                     "Observa la figura e identifica los elementos del siguiente cuerpo geométrico.",
                     0,
                     counter
 
                 )
 
             }
             else {
                 array10 = ["", "", "", "",""]
                 setJuegoActivo(true)
                 setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                 PreguntasAnalisis(
                     router.query.id,
                     false,
                     "Observa la figura e identifica los elementos del siguiente cuerpo geométrico.",
                     0,
                     counter
 
                 )
             }
         }
     }
     const Juego10 = () => {
         return (
             <div className="poligonos">
                 <h3>Observa la figura e identifica los elementos del siguiente cuerpo geométricos.</h3>
                 <div>
                     <img id="img-cg" src="/img/partes2.png"/>
                 </div>
                
                 <div className="poligonos-drop poligonos-drop04" id="1" onDragOver={allowdrop} onDrop={drop10}></div>
                 <div className="poligonos-drop poligonos-drop05" id="2" onDragOver={allowdrop} onDrop={drop10}></div>
                 <div className="poligonos-drop poligonos-drop06" id="3" onDragOver={allowdrop} onDrop={drop10}></div>
                 <div className="poligonos-drop poligonos-drop07" id="4" onDragOver={allowdrop} onDrop={drop10}></div>
                     
                 <div className="drag-cg">
                     <div className="cg-drag" draggable="true" id="cara" onDragStart={drag}>Cara</div>
                     <div className="cg-drag" draggable="true" id="vertice" onDragStart={drag}>Vértice</div>
                     <div className="cg-drag" draggable="true" id="arista" onDragStart={drag}>Arista</div>
                     <div className="cg-drag" draggable="true" id="base" onDragStart={drag}>Base</div>
                    
 
                 </div>
 
             </div>
 
         )
 
     }

     // numero 11
     const arrayDato2 = [
        { image: "/img/cubo.png", pregunta: "¿Cuántos vértices tiene un cubo?", repuesta: [{ valor: "8 vértices", validar: true }, { valor: "4 vértices", validar: false }, { valor: "6 vértices", validar: false }, { valor: "1 vértice", validar: false }, { valor: "2 vértices", validar: false }, { valor: "3 vértices", validar: false }] },
        { image: "/img/cubo.png", pregunta: "¿Cuántas caras tiene un cubo?",  repuesta: [{ valor: "8 caras", validar: false }, { valor: "4 caras", validar: false }, { valor: "6 caras", validar: true }, { valor: "1 vértice", validar: false }, { valor: "2 caras", validar: false }, { valor: "3 caras", validar: false }] },
        { image: "/img/cubo.png", pregunta: "¿Cuántas aristas tiene un cubo?",  repuesta: [{ valor: "18 aristas", validar: false }, { valor: "14 aristas", validar: false }, { valor: "16 aristas", validar: false }, { valor: "11 vértice", validar: false }, { valor: "12 aristas", validar: true }, { valor: "13 aristas", validar: false }] },
        
        { image: "/img/formas.png",pregunta: "Los objetos que aparecen en la imágen de la izquierda tienen forma de: ", repuesta: [{ valor: "Cono", validar: false }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: true }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },
        { image: "/img/formas2.png",pregunta: "Los objetos que aparecen en la imágen de la izquierda tienen forma de: ", repuesta:[{ valor: "Cono", validar: false }, { valor: "Esfera", validar: true }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },
        { image: "/img/formas3.png",pregunta: "Los objetos que aparecen en la imágen de la izquierda tienen forma de: ", repuesta:[{ valor: "Cono", validar: true }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },
        { image: "/img/formas4.png",pregunta: "Los objetos que aparecen en la imágen de la izquierda tienen forma de: ", repuesta:[{ valor: "Cono", validar: false }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: false }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: true }, { valor: "Prisma", validar: false }] },
        { image: "/img/formas5.png",pregunta: "Los objetos que aparecen en la imágen de la izquierda tienen forma de: ", repuesta:[{ valor: "Cono", validar: false }, { valor: "Esfera", validar: false }, { valor: "Pirámide", validar: true }, { valor: "Cubo", validar: false }, { valor: "Cilindro", validar: false }, { valor: "Prisma", validar: false }] },

    ]
    const Juego11 = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Clasifica los siguientes cuerpos geométricos.",
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
                    "Clasifica los siguientes cuerpos geométricos.",
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
    const arrayDato3 = [
        { pregunta: "Selecciona el objeto con forma de esfera.", repuesta: [{ valor: "/img/f1.png", validar: false }, { valor: "/img/f2.png", validar: false }, { valor: "/img/f3.png", validar: false }, { valor:  "/img/f4.png", validar: false }, { valor:  "/img/f5.png", validar: false }, { valor: "/img/f6.png", validar: true }, { valor: "/img/f7.png", validar: false }, { valor: "/img/f8.png", validar: false }] },
        { pregunta: "Selecciona el objeto con forma de cilindro.", repuesta: [{ valor: "/img/f1.png", validar: false }, { valor: "/img/f2.png", validar: false }, { valor: "/img/f3.png", validar: false }, { valor:  "/img/f4.png", validar: true }, { valor:  "/img/f5.png", validar: false }, { valor: "/img/f6.png", validar: false }, { valor: "/img/f7.png", validar: false }, { valor: "/img/f8.png", validar: false }] },

    ]
    const Juego19 = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Clasifica los siguientes cuerpos geométricos.",
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
                    "Clasifica los siguientes cuerpos geométricos.",
                    0,
                    counter

                )
            }

        }
        return (
            <div className="poligonos">
                
                <div>
                    <h3>{props.data.pregunta}</h3>
                    <div className="juego19-cg">
                        {props.data.repuesta.map(e =>
                            <div><button id="btn-cg" onClick={() => validarPregunta(e.validar)}><img src={e.valor}/></button></div>
                        )}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div>
            <div className="Contador-poligonos">{counter + 1}/20</div>
            {juegoActivo == false ?
                <div>
                    {counter == 0 ?
                        <div>
                            <Juego1/>
                        </div>
                        :counter == 1 ?
                        <div>
                            <Juego19 data={arrayDato3[1]}/>
                            
                        </div>
                        :counter == 2 ?
                        <div>
                            <Juego3 data={arrayDato[0]}/>
                        </div>
                         :counter == 3 ?
                         <div>
                             <Juego11 data={arrayDato2[7]}/>
                            
                         </div>
                          :counter == 4 ?
                          <div>
                              <Juego3 data={arrayDato[2]}/>
                          </div>
                          :counter == 5 ?
                          <div>
                             <Juego11 data={arrayDato2[5]}/>
                              
                          </div>
                           :counter == 6 ?
                           <div>
                               <Juego3 data={arrayDato[4]}/>
                           </div>
                            :counter == 7 ?
                            <div>
                                <Juego11 data={arrayDato2[3]}/>
                               
                            </div>
                            :counter == 8 ?
                            <div>
                                <Juego9/>
                            </div>
                            :counter == 9 ?
                            <div>
                                 <Juego11 data={arrayDato2[1]}/>
                              
                            </div>
                            :counter == 10 ?
                            <div>
                                <Juego11 data={arrayDato2[0]}/>
                            </div>
                           :counter == 11 ?
                           <div>
                               <Juego10/> 
                           </div>
                           :counter == 12 ?
                           <div>
                               <Juego11 data={arrayDato2[2]}/>
                           </div>
                           :counter == 13 ?
                           <div>
                                <Juego3 data={arrayDato[5]}/>
                           </div>
                             :counter == 14 ?
                             <div>
                                 <Juego11 data={arrayDato2[4]}/>
                             </div>
                             :counter == 15 ?
                             <div>
                                <Juego3 data={arrayDato[3]}/>
                             </div>
                             :counter == 16 ?
                             <div>
                                 <Juego11 data={arrayDato2[6]}/>
                             </div>
                             :counter == 17 ?
                             <div>
                                 <Juego3 data={arrayDato[1]}/>
                             </div>
                              :counter == 18 ?
                              <div>
                                  <Juego19 data={arrayDato3[0]}/>
                              </div>
                              :counter == 19 ?
                              <div>
                                  <Juego2/>
                              </div>
                            : <Fin posicionNivelActual={6}  nivel={"nivel2"} nombre={router.query.id} siguienteNivel="/Medicion/Longitud"  numero={20}/>
                              
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
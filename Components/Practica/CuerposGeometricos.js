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
                    0,
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
                    0,
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
                            <Juego2/>
                        </div>
                        :<h1>fin</h1>
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
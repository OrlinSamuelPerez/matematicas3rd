import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
export default function Perimetro() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
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
    const arrayDato = [
        { image: "/img/perimetro3.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "90 cm", validar: false }, { valor: "173 cm", validar: false }, { valor: "290cm", validar: false }, { valor: "296 cm", validar: true }, { valor: "256 cm", validar: false }, { valor: "180 cm", validar: false }] },
        { image: "/img/perimetro4.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "308 cm", validar: false }, { valor: "318 cm", validar: false }, { valor: "100  cm", validar: false }, { valor: "433 cm", validar: true }, { valor: "384 cm", validar: false }, { valor: "536 cm", validar: false }] },
        { image: "/img/perimetro5.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "69 cm", validar: false }, { valor: "14 cm", validar: false }, { valor: "54 cm", validar: false }, { valor: "52 cm", validar: false }, { valor: "61 cm", validar: false }, { valor: "97 cm", validar: true }] },
        { image: "/img/perimetro6.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "100 cm", validar: true }, { valor: "30 cm", validar: false }, { valor: "70 cm", validar: false }, { valor: "35 cm", validar: false }, { valor: "15 cm", validar: false }, { valor: "95 cm", validar: false }] },
        { image: "/img/perimetro7.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "475 cm", validar: false }, { valor: "450 cm", validar: true }, { valor: "350 cm", validar: false }, { valor: "125 cm", validar: false }, { valor: "425 cm", validar: false }, { valor: "350 cm", validar: false }] },
        { image: "/img/perimetro8.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "170 m", validar: false }, { valor: "180 m", validar: true }, { valor: "140 m", validar: false }, { valor: "70 m", validar: false }, { valor: "130 m", validar: false }, { valor: "190 m", validar: false }] },
        { image: "/img/perimetro9.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "360 m", validar: true }, { valor: "285 m", validar: false }, { valor: "225 m", validar: false }, { valor: "160 m", validar: false }, { valor: "150 m", validar: false }, { valor: "260 m", validar: false }] },
        { image: "/img/perimetro10.png", pregunta: "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.", repuesta: [{ valor: "50 m", validar: false }, { valor: "77 m", validar: false }, { valor: "100 m", validar: false }, { valor: "126 m", validar: true }, { valor: "116 m", validar: false }, { valor: "120 m", validar: false }] },

    ]
    const Juego = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.",
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
                    "Calcula el perímetro de la siguiente figura y elige la respuesta correcta.",
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

    // juego 1
    const allowdrop = (e) => {
        e.preventDefault()
    }
    const drag = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    let array = ["", "",]

    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array[1] != "") {
            if (array[1] == "154") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Calcula el perímetro de la siguiente figura.",
                    0,
                    counter

                )
            }
            else {

                array = ["", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Calcula el perímetro de la siguiente figura.",
                    0,
                    counter

                )



            }
        }
    }
    const Juego1 = () => {


        return (
            <div className="juego7-poligono">
                <div className="img-poli">
                    <img src="/img/perimetro1.png" />
                </div>
                <div>
                    <h4>Calcula el perímetro de la siguiente figura.</h4>
                    <div className="juego-perimetro-repuesta">
                        <div className="box-drop-perimetro" >52 cm</div>
                        <div className="box-drop-perimetro1" >+</div>
                        <div className="box-drop-perimetro" >52 cm</div>
                        <div className="box-drop-perimetro1" >+</div>
                        <div className="box-drop-perimetro" >50 cm</div>

                        <div className="box-drop-perimetro" >=</div>
                        <div className="box-drop-perimetro" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                    </div>
                    <div className="juego-perimetro-repuesta" >
                        <div className="perimetro-drag" draggable="true" id="150" onDragStart={drag}>150 cm</div>
                        <div className="perimetro-drag" draggable="true" id="154" onDragStart={drag}>154 cm</div>
                        <div className="perimetro-drag" draggable="true" id="104" onDragStart={drag}>104 cm</div>
                        <div className="perimetro-drag" draggable="true" id="102" onDragStart={drag}>102 cm</div>
                        <div className="perimetro-drag" draggable="true" id="100" onDragStart={drag}>100 cm</div>

                    </div>
                </div>
            </div>
        )
    }
    let array2 = ["", "",]

    const drop2 = (e) => {
        //Para btener el id arrastrado
        if (array2[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array2[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array2[1] != "") {
            if (array2[1] == "329") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Calcula el perímetro de la siguiente figura.",
                    0,
                    counter

                )
            }
            else {

                array2 = ["", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Calcula el perímetro de la siguiente figura.",
                    0,
                    counter

                )



            }
        }
    }
    const Juego2 = () => {


        return (
            <div className="juego7-poligono">
                <div className="img-poli">
                    <img src="/img/perimetro2.png" />
                </div>
                <div>
                    <h4>Calcula el perímetro de la siguiente figura.</h4>
                    <div className="juego-perimetro-repuesta">
                        <div className="box-drop-perimetro" >94 cm</div>
                        <div className="box-drop-perimetro1" >+</div>
                        <div className="box-drop-perimetro" >153 cm</div>
                        <div className="box-drop-perimetro1" >+</div>
                        <div className="box-drop-perimetro" >82 cm</div>

                        <div className="box-drop-perimetro" >=</div>
                        <div className="box-drop-perimetro" id="1" onDragOver={allowdrop} onDrop={drop2}></div>
                    </div>
                    <div className="juego-perimetro-repuesta" >
                        <div className="perimetro-drag" draggable="true" id="229" onDragStart={drag}>229 cm</div>
                        <div className="perimetro-drag" draggable="true" id="129" onDragStart={drag}>129 cm</div>
                        <div className="perimetro-drag" draggable="true" id="304" onDragStart={drag}>304 cm</div>
                        <div className="perimetro-drag" draggable="true" id="329" onDragStart={drag}>329 cm</div>
                        <div className="perimetro-drag" draggable="true" id="340" onDragStart={drag}>340 cm</div>

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
                            <Juego1 />

                        </div>
                        : counter == 1 ?
                            <div>
                                <Juego2 />

                            </div>
                            : counter == 2 ?
                                <div>
                                    <Juego data={arrayDato[2]} />
                                </div>
                                : counter == 3 ?
                                    <div>
                                        <Juego data={arrayDato[6]} />

                                    </div>
                                    : counter == 4 ?
                                        <div>
                                            <Juego data={arrayDato[4]} />
                                        </div>
                                        : counter == 5 ?
                                            <div>
                                                <Juego data={arrayDato[7]} />
                                            </div>
                                            : counter == 6 ?
                                                <div>
                                                    <Juego data={arrayDato[1]} />

                                                </div>
                                                : counter == 7 ?
                                                    <div>
                                                        <Juego data={arrayDato[5]} />

                                                    </div>
                                                    : counter == 8 ?
                                                        <div>
                                                            <Juego data={arrayDato[0]} />
                                                        </div>
                                                        : counter == 9 ?
                                                            <div>
                                                                <Juego data={arrayDato[3]} />
                                                            </div>
                                                            : <Fin posicionNivelActual={3} nivel={"nivel3"} nombre={router.query.id} siguienteNivel="/EstadisticaElemental/DatosEstadisticos" numero={10} />

                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
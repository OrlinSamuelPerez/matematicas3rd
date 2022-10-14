import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
export default function Simetria() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)


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
    const router = useRouter()

    const Juego = (props) => {
        const comprobar = (validar) => {
            if (validar == fotos[counter2].validar) {
                setCounter2(counter2+1)
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona si la imagen es simetrica.",
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
                    "Selecciona si la imagen es simetrica.",
                    0,
                    counter

                )

            }
        }

        return (
            <div className="simetria">
                <h3>{fotos[counter2].titulo}</h3>
                <div>
                    <img src={fotos[counter2].img} />
                </div>
                <div className="simetria-sino">
                    <button onClick={() => comprobar("simetrico")}>SI</button>
                    <button onClick={() => comprobar("asimetrico")}>NO</button>
                </div>

            </div>
        )
    }
    const fotos = [
        { titulo: "La siguiente imagen es simetrica", img: "/img/estrella-simetrica.png", validar: "simetrico" },
        { titulo: "La siguiente imagen es simetrica", img: "/img/mariposa.png", validar: "asimetrico" },
        { titulo: "La siguiente imagen es simetrica", img: "/img/corazon.png", validar: "simetrico" },
        { titulo: "La siguiente imagen es simetrica", img: "/img/circulo-sime.png", validar: "asimetrico" },
        { titulo: "La siguiente imagen es simetrica", img: "/img/diferentescuadros.png", validar: "asimetrico" },
    ]
    const arrayDato = [
        { pregunta: "Selecciona la imágen simétrica", repuesta: [{ valor: "/img/estrella-simetrica.png", validar: true }, { valor: "/img/mariposa.png", validar: false }, { valor: "/img/circulo-sime.png", validar: false }, { valor: "/img/diferentescuadros.png", validar: false }] },
        { pregunta: "Selecciona la imágen simétrica", repuesta: [{ valor: "/img/cuadro-asimetrico.png", validar: false }, { valor: "/img/mariposa.png", validar: false }, { valor: "/img/corazon.png", validar: true }, { valor: "/img/diferentescuadros.png", validar: false }] },
        { pregunta: "Selecciona la imágen simétrica", repuesta: [{ valor: "/img/cuadro-asimetrico.png", validar: false }, { valor: "/img/cuadro-simetrico.png", validar: true }, { valor: "/img/circulo-sime.png", validar: false }, { valor: "/img/diferentescuadros.png", validar: false }] },
        { pregunta: "Selecciona la imágen simétrica", repuesta: [{ valor: "/img/cuadro-asimetrico.png", validar: false }, { valor: "/img/circulo-sime.png", validar: false }, { valor: "/img/triangulosimetrico.png", validar: true }, { valor: "/img/diferentescuadros.png", validar: false }] },
        { pregunta: "Selecciona la imágen simétrica", repuesta: [{ valor: "/img/cuadro-asimetrico.png", validar: false }, { valor: "/img/circulo-sime.png", validar: false }, { valor: "/img/diferentescuadros.png", validar: false }, { valor: "/img/fig-simetrica.png", validar: true }] },

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
                    "Selecciona la imagen simetrica.",
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
                    "Selecciona la imagen simetrica.",
                    0,
                    counter

                )
            }

        }
        return (
            <div className="juego7-simetria">

                <div>
                    <h4>{props.data.pregunta}</h4>
                    <div className="juego7-poligono-repuesta">
                        {props.data.repuesta.map(e =>
                            <div><button onClick={() => validarPregunta(e.validar)}><img src={e.valor} /></button></div>
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
                        <Juego data={fotos[0]} />

                        : counter == 1 ?
                            <Juego7 data={arrayDato[0]} />

                            : counter == 2 ?
                                <Juego data={fotos[1]} />


                                : counter == 3 ?
                                    <Juego7 data={arrayDato[2]} />

                                    : counter == 4 ?
                                        <Juego data={fotos[3]} />

                                        : counter == 5 ?
                                            <Juego7 data={arrayDato[4]} />
                                            : counter == 6 ?
                                                <Juego data={fotos[4]} />

                                                : counter == 7 ?
                                                    <Juego7 data={arrayDato[1]} />
                                                    : counter == 8 ?
                                                        <Juego data={fotos[2]} />

                                                        : counter == 9 ?
                                                            <Juego7 data={arrayDato[3]} />
                                                            : <Fin posicionNivelActual={5} nivel={"nivel2"} nombre={router.query.id} siguienteNivel="/Geometria/CuerposGeometricos" numero={10} />
                                                           
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )

}
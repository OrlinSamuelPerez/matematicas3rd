import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import { useRouter } from "next/router";
import Feliciades from "../Feliciades";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
import Fin from "../Fin";
export default function NumeroPares() {
    const [estadoJuego, setEstadoJuego] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [cambiar, setCambiar] = useState(false)
    const [counter, setCounter] = useState(0)
    const router = useRouter()

    const ImagenesDinamica = () => {
        const imagen = [
            "https://i.pinimg.com/564x/1f/f2/b7/1ff2b779b96d5cb29e2b45151480588c.jpg",
            "https://i.pinimg.com/564x/26/d9/ad/26d9adba72f9b3b1dc8e03aa7806f49e.jpg",
            "https://i.pinimg.com/564x/c2/9e/dc/c29edc4f49bfbe64960816ef4b2e87a6.jpg",
            "https://i.pinimg.com/564x/01/b0/30/01b0305cfecafbb3337a274e6730cf8a.jpg",
            "https://i.pinimg.com/564x/93/4c/09/934c0940c70cae8c9f7f9d78e9fb36b8.jpg"
        ]
        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }

        const imagenPosicion = imagen[random(0, 4)]
        const cantidadDeImagenesPantalla = random(6, 10)
        const array = []
        for (var i = 1; i < cantidadDeImagenesPantalla + 1; i++) {
            array.push("")
        }
       
        const validar = (valor) => {
            if (array.length % 2 == 0 && valor == "par") {
                setEstadoJuego(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCambiar(true)

                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Cuenta las imágenes y determina si el resultado es un número par o impar.",
                    0,
                    counter

                )
            } else if (array.length % 2 != 0 && valor == "impar") {
                setEstadoJuego(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCambiar(true)

                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Cuenta las imágenes y determina si el resultado es un número par o impar.",
                    0,
                    counter

                )

            }
            else {
                if (array.length % 2 == 0) {
                    setEstadoJuego(true)
                setCambiar(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                    PreguntasAnalisis(
                        router.query.id,
                        false,
                        "Cuenta las imágenes y determina si el resultado es un número par o impar.",
                        0,
                        counter
    
                    )

                } if (array.length % 2 != 0) {
                    setEstadoJuego(true)
                setCambiar(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                    PreguntasAnalisis(
                        router.query.id,
                        false,
                        "Cuenta las imágenes y determina si el resultado es un número par o impar.",
                        0,
                        counter
    
                    )

                }
            }
        }
        return (
            <div className="Numerospi">
                <h3 >Cuenta las imágenes y determina si el resultado es un número par o impar.</h3>
                <div className="imagennumerospares">
                    {array.map(e =>
                        <div><img src={imagenPosicion} /></div>
                    )}
                </div>
                <div>
                    <button onClick={() => validar("par")}>Par</button>
                    <button onClick={() => validar("impar")}>Impar</button>
                </div>
            </div>
        )
    }
  

    const Ejercicio11 = () => {
        const img = [{ numero: "8,627", validar: true }, { numero: "3,522", validar: false }, { numero: "6,222 ", validar: false },]
        const validar = (validar) => {
            if (validar == true) {
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCambiar(true)

            } else {
                
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                setCambiar(true)
                
            }
        }
        return (
            <div className="Numerospi">
                <div>
                    <h3>Selecciona el número impar.</h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio12 = () => {
        const img = [{ numero: "5,627", validar: false }, { numero: "3,545", validar: false }, { numero: "6,222 ", validar: true },]
        const validar = (validar) => {
            if (validar == true) {
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCambiar(true)

                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número par.",
                    0,
                    counter

                )
            } else {
                setCambiar(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Selecciona el número par.",
                    0,
                    counter

                )
            }
        }
        return (
            <div className="Numerospi">
                <div>
                    <h3>Selecciona el número par.</h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio13 = () => {
        const img = [{ numero: "359", validar: false }, { numero: "578", validar: true }, { numero: "325 ", validar: false },]
        const validar = (validar) => {
            if (validar == true) {
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCambiar(true)

                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número par.",
                    0,
                    counter

                )
            } else {
                setCambiar(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Selecciona el número par.",
                    0,
                    counter

                )
                console.log("Falso")
            }
        }
        return (
            <div className="Numerospi">
                <div>
                    <h3>Selecciona el número par.</h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio14 = () => {
        const img = [{ numero: "788", validar: false }, { numero: "247", validar: true }, { numero: "526 ", validar: false },]
        const validar = (validar) => {
            if (validar == true) {
                setCambiar(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
            } else {
                setCambiar(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
            }
        }
        return (
            <div className="Numerospi">
                <div>
                    <h3>Selecciona el número impar.</h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio15 = () => {
        const img = [{ numero: "788", validar: true }, { numero: "247", validar: false }, { numero: "529 ", validar: false },]
        const validar = (validar) => {
            if (validar == true) {
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCambiar(true)

                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número par.",
                    0,
                    counter

                )
            } else {
                setCambiar(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Selecciona el número par.",
                    0,
                    counter

                )
            }
        }
        return (
            <div className="Numerospi">
                <div>
                    <h3>Selecciona el número par.</h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio16 = () => {
        const img = [{ numero: "58,786", validar: false }, { numero: "24,852", validar: false }, { numero: "52,997 ", validar: true },]
        const validar = (validar) => {
            if (validar == true) {
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCambiar(true)

                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
            } else {
                setCambiar(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Selecciona el número impar",
                    0,
                    counter

                )
            }
        }
        return (
            <div className="Numerospi">
                <div>
                    <h3>Selecciona el número impar.</h3>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Tiempo = () => {
        juegoMensajeActivo == "HAZ HECHO UN BUEN TRABAJO "?
            setTimeout(() => {
                if(estadoJuego == true){
                    setEstadoJuego(false)
                }
                setCounter(counter + 1)
                setCambiar(false)

                }, 3000)
            :setTimeout(() => {
                if(estadoJuego == true){
                    setEstadoJuego(false)
                }
                setCambiar(false)
                setCounter(counter + 1)

                }, 3000)
        return (
            <div>{juegoMensajeActivo == "HAZ HECHO UN BUEN TRABAJO " ?
                <Feliciades />
                : <IntentaloDeNuevo />
            }</div>
        )
    }
    return (
        <div >
            <div className="Contador-secuencia">{counter + 1}/16</div>

            {cambiar == false?
                counter == 2 ?
                    <Ejercicio11 /> :
                    counter == 5 ?
                        <Ejercicio12 />
                        : counter == 9 ?
                            <Ejercicio13 />
                            : counter == 11 ?
                                <Ejercicio14 />
                                : counter == 13 ?
                                    <Ejercicio15 />
                                    : counter == 15 ?
                                        <Ejercicio16 />
                                        : counter == 16 ?
                                            <Fin posicionNivelActual={4}  nivel={"nivel1"} nombre={router.query.id} siguienteNivel="/Numeracion/SignosComparacion"  numero={16}/>
                                            : estadoJuego == false ?
                                                <ImagenesDinamica />
                                                :<h1>s</h1>
                :<Tiempo/>

            }
        </div>
    )
}
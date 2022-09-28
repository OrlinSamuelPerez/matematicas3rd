import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import { useRouter } from "next/router";
export default function NumeroPares() {
    const [estadoJuego, setEstadoJuego] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
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
                setMensajeJuegoActivo("FELICIDADES EL NUMERO ERA PAR")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Cuenta las imágenes y determina si el resultado es un número par o impar.",
                    0,
                    counter

                )
                setCounter(counter + 1)
            } else if (array.length % 2 != 0 && valor == "impar") {
                setEstadoJuego(true)
                setMensajeJuegoActivo("FELICIDADES EL NUMERO ERA IMPAR")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Cuenta las imágenes y determina si el resultado es un número par o impar.",
                    0,
                    counter

                )
                setCounter(counter + 1)

            }
            else {
                if (array.length % 2 == 0) {
                    setEstadoJuego(true)
                    setMensajeJuegoActivo("INCORRECTO EL NUMERO ERA PAR")
                    PreguntasAnalisis(
                        router.query.id,
                        false,
                        "Cuenta las imágenes y determina si el resultado es un número par o impar.",
                        0,
                        counter
    
                    )
                } if (array.length % 2 != 0) {
                    setEstadoJuego(true)
                    setMensajeJuegoActivo("INCORRECTO EL NUMERO ERA IMPAR")
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
    const Tiempo = () => {
        setTimeout(() => { setEstadoJuego(false) }, 2000)
        return (
            <h1 className="juegomensaje">{juegoMensajeActivo}</h1>
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
                setCounter(counter + 1)
            } else {
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
                console.log("Falso")
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
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número par.",
                    0,
                    counter

                )
                setCounter(counter + 1)
            } else {
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
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número par.",
                    0,
                    counter

                )
                setCounter(counter + 1)
            } else {
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
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
                setCounter(counter + 1)
            } else {
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
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número par.",
                    0,
                    counter

                )
                setCounter(counter + 1)
            } else {
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
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Selecciona el número impar.",
                    0,
                    counter

                )
                setCounter(counter + 1)
            } else {
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
    return (
        <div >
            <div className="Contador-secuencia">{counter + 1}/16</div>

            {
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
                                            <h1>Fin</h1>
                                            : estadoJuego == false ?
                                                <ImagenesDinamica />
                                                : <Tiempo />

            }
        </div>
    )
}
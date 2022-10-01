import { useRouter } from "next/router"
import { useState } from "react"
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis"
import Feliciades from "../Feliciades"
import Fin from "../Fin"
import IntentaloDeNuevo from "../IntentaloDeNuevo"

export default function ValorPosicion() {
    const [counter, setCounter] = useState(0)
    const valorIncial = { decena: 0, centena: 0, unidad: 0, suma: 0 }
    const [valor, setValor] = useState(valorIncial)
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const router = useRouter()
    const handleChange = (e) => {
        const { name, value } = e.target
        setValor({ ...valor, [name]: value })

    }
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
    const comprobarPregunta = (centena, decena, unidad, suma) => {

        if (centena == valor.centena && decena == valor.decena && unidad == valor.unidad && suma == valor.suma) {
            setJuegoActivo(true)
            setSiguienteJuegoActivo(true)
            setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
            PreguntasAnalisis(
                router.query.id,
                true,
                "Completa con la descomposicion y composicion correcta.",
                1,
                counter

            )
        } else {
            setJuegoActivo(true)
            setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            PreguntasAnalisis(
                router.query.id,
                false,
                "Completa con la descomposicion y composicion correcta.",
                1,
                counter

            )
        }


    }
    const comprobarPregunta2 = (unidadMillar, centena, decena, unidad, suma) => {

        if (unidadMillar == valor.unidadMillar && centena == valor.centena && decena == valor.decena && unidad == valor.unidad && suma == valor.suma) {
            setJuegoActivo(true)
            setSiguienteJuegoActivo(true)
            setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
            PreguntasAnalisis(
                router.query.id,
                true,
                "Completa con la descomposicion y composicion correcta.",
                1,
                counter

            )
        } else {
            setJuegoActivo(true)
            setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            PreguntasAnalisis(
                router.query.id,
                false,
                "Completa con la descomposicion y composicion correcta.",
                1,
                counter

            )
        }


    }
    const Ejercicio1 = () => {
        const img = [{ img: "/img/1.png", validar: true }, { img: "/img/2.png", validar: false }, { img: "/img/3.png", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige la imagen que tiene 1 unidad.",
                    2,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige la imagen que tiene 1 unidad.",
                    2,
                    counter

                )
            }
        }
        return (
            <div className="unidad2">
                <p>La unidad es el elemento entero más pequeño que se utiliza para contar y para representar cifras.</p>
                
                    <h4>Elige la imagen que tiene 1 unidad.</h4>
                
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><img onClick={() => validar(e.validar)} src={e.img} /></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio2 = () => {
        const img = [{ img: "/img/1.png", validar: false }, { img: "/img/2.png", validar: true }, { img: "/img/3.png", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige la imagen que tiene 4 unidades.",
                    2,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige la imagen que tiene 4 unidades.",
                    2,
                    counter

                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige la imagen que tiene 4 unidades</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><img onClick={() => validar(e.validar)} src={e.img} /></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio3 = () => {
        const img = [{ numero: "Centena", validar: true }, { numero: "Decena", validar: false }, { numero: "Unidad ", validar: false },]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "En el número 5,782; ¿Qué valor posicional ocupa el dígito 7?.",
                    2,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "En el número 5,782; ¿Qué valor posicional ocupa el dígito 7?.",
                    2,
                    counter

                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>En el número 5,782; ¿Qué valor posicional ocupa el dígito 7?</h4>
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
        const img = [{ numero: "Centena de Millar", validar: false }, { numero: "Decena de Millar", validar: false }, { numero: "Unidad de Millar", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "En el número 15,783; el dígito 5 ocupa el lugar posicional de la:.",
                    2,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "En el número 15,783; el dígito 5 ocupa el lugar posicional de la:.",
                    2,
                    counter

                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>En el número 15,783; el dígito 5 ocupa el lugar posicional de la: </h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio5 = () => {
        const img = [{ numero: "4", validar: true }, { numero: "5", validar: false }, { numero: "2", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "¿Cuántos dígitos posee el número 3,525?",
                    0,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "¿Cuántos dígitos posee el número 3,525?",
                    0,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>¿Cuántos dígitos posee el número 3,525?</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio6 = () => {
        const img = [{ numero: "5", validar: false }, { numero: "1", validar: true }, { numero: "8", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "En el número 15,783; ¿Cuál dígito ocupa el lugar posicional de la decena de millar?",
                    2,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "En el número 15,783; ¿Cuál dígito ocupa el lugar posicional de la decena de millar?",
                    2,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>En el número 15,783; ¿Cuál dígito ocupa el lugar posicional de la decena de millar? </h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio7 = () => {
        const img = [{ numero: "5", validar: true }, { numero: "3", validar: false }, { numero: "4", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "¿Cuántos dígitos posee el número 15,875?",
                    0,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "¿Cuántos dígitos posee el número 15,875?",
                    0,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>¿Cuántos dígitos posee el número 15,875?</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio8 = () => {
        const img = [{ numero: "230", validar: true }, { numero: "340", validar: false }, { numero: "220", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige el número que está formado por 2 centenas y 3 decenas.",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige el número que está formado por 2 centenas y 3 decenas.",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige el número que está formado por 2 centenas y 3 decenas.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio9 = () => {
        const img = [{ numero: "1,750", validar: false }, { numero: "750", validar: true }, { numero: "75", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige el número que está formado por 7 centenas y 5 decenas.",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige el número que está formado por 7 centenas y 5 decenas.",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige el número que está formado por 7 centenas y 5 decenas.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio10 = () => {
        const img = [{ numero: "6", validar: false }, { numero: "2", validar: false }, { numero: "3", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "En el número 326, ¿Cuál dígito ocupa el valor posicional de la centena?",
                    2,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "En el número 326, ¿Cuál dígito ocupa el valor posicional de la centena?",
                    2,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>En el número 326, ¿Cuál dígito ocupa el valor posicional de la centena?</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio11 = () => {
        const img = [{ numero: "Centena", validar: true }, { numero: "Decena", validar: false }, { numero: "Unidad", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "En el número 78,524; el dígito 5 ocupa el valor posicional de la:",
                    2,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "En el número 78,524; el dígito 5 ocupa el valor posicional de la:",
                    2,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>En el número 78,524; el dígito 5 ocupa el valor posicional de la: </h4>


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
        const img = [{ numero: "25,200", validar: false }, { numero: "25,020", validar: true }, { numero: "25,002", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige el número formado por 2 decenas de millar, 5 unidades de millar y 2 decenas.",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige el número formado por 2 decenas de millar, 5 unidades de millar y 2 decenas.",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige el número formado por 2 decenas de millar, 5 unidades de millar y 2 decenas.</h4>
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
        const img = [{ numero: "302", validar: true }, { numero: "320", validar: false }, { numero: "203", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Elige el número formado por 3 centenas y 2 unidades.",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Elige el número formado por 3 centenas y 2 unidades.",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>Elige el número formado por 3 centenas y 2 unidades.</h4>

                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }

    //rev
    const Ejercicio14 = () => {

        return (
            <div className="unidad2">
                <div>
                    <h4>Escribe el número representado y su composición</h4>
                </div>
                <div className="grid-valorposicion">

                    <div ><img src="/img/img1.png" /></div>
                    <div>
                        <input type="number" onChange={handleChange} value={valor.centena} name="centena" max={9} min={0} />C +
                        <input type="number" onChange={handleChange} value={valor.decena} name="decena" max={9} min={0} />D +
                        <input type="number" onChange={handleChange} value={valor.unidad} name="unidad" max={9} min={0} />U <br></br>
                        <input type="number" onChange={handleChange} value={valor.suma} name="suma" min={0} /><br></br>
                        <button onClick={()=>comprobarPregunta(1, 2, 6, 126)} >Comprobar</button>
                    </div>
                </div>



            </div>
        )
    }



    const Ejercicio15 = () => {

        return (
            <div className="unidad2">
                <div>
                    <h4>Escribe el número representado y su composición</h4>
                </div>
                <div className="grid-valorposicion2">

                    <div ><img src="/img/img2.png" /></div>
                    <div>
                        <input type="number" onChange={handleChange} value={valor.unidadMillar} name="unidadMillar" max={9} min={0} />UM +
                        <input type="number" onChange={handleChange} value={valor.centena} name="centena" max={9} min={0} />C +
                        <input type="number" onChange={handleChange} value={valor.decena} name="decena" max={9} min={0} />D +
                        <input type="number" onChange={handleChange} value={valor.unidad} name="unidad" max={9} min={0} />U <br></br>
                        <input type="number" onChange={handleChange} value={valor.suma} name="suma" min={0} /><br></br>
                        <button onClick={()=>comprobarPregunta2(1,2,5, 6, 1256)} >Comprobar</button>
                    </div>
                </div>



            </div>
        )
    }
    const Ejercicio16 = () => {

        return (
            <div className="unidad2">
            <div>
                <h4>Escribe el número representado y su composición</h4>
            </div>
            <div className="grid-valorposicion">

                <div ><img src="/img/img3.png" /></div>
                <div>
                    <input type="number" onChange={handleChange} value={valor.centena} name="centena" max={9} min={0} />UM +
                    <input type="number" onChange={handleChange} value={valor.decena} name="decena" max={9} min={0} />C +
                    <input type="number" onChange={handleChange} value={valor.unidad} name="unidad" max={9} min={0} />D <br></br>
                    <input type="number" onChange={handleChange} value={valor.suma} name="suma" min={0} /><br></br>
                    <button onClick={()=>comprobarPregunta(1, 1, 3, 1130)} >Comprobar</button>
                </div>
            </div>



        </div>
        )
    }
    //rev hasta aqui 

    const Ejercicio17 = () => {
        const img = [{ numero: "5,000 + 300 + 2", validar: false }, { numero: "500 + 30 + 2", validar: true }, { numero: "5,000 + 30 + 2", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "La descomposición del número 532 es:",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "La descomposición del número 532 es:",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>La descomposición del número 532 es:</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio18 = () => {
        const img = [{ numero: "5,000 + 300 + 2", validar: false }, { numero: "500 + 30 + 2", validar: false }, { numero: "5,000 + 30 + 2", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "La descomposición del número 5,032 es:",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "La descomposición del número 5,032 es:",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>La descomposición del número 5,032 es:</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio19 = () => {
        const img = [{ numero: "5,000 + 300 + 2", validar: true }, { numero: "500 + 30 + 2", validar: false }, { numero: "5,000 + 30 + 2", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "La descomposición del número 5,302 es:",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "La descomposición del número 5,302 es:",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>La descomposición del número 5,302 es:</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio20 = () => {
        const img = [{ numero: "70,000 + 5,000 + 500 + 20 +8", validar: true }, { numero: "70,000 + 500 + 20 +8", validar: false }, { numero: "70,000 + 5,000 + 20 +8", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "La descomposición del número 75,528 es:",
                    1,
                    counter

                )
            } else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "La descomposición del número 75,528 es:",
                    1,
                    counter
                )
            }
        }
        return (
            <div className="unidad2">
                <div>
                    <h4>La descomposición del número 75,528 es:</h4>
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
        <div>
            <div className="Contador-secuencia">{counter + 1}/20</div>

            {juegoActivo == false ?
                <div className="valorposicion">
                    {counter == 0 ?
                        <Ejercicio1 />
                        : counter == 1 ?
                            <Ejercicio12 />
                            : counter == 2 ?
                                <Ejercicio3 />
                                : counter == 3 ?
                                    <Ejercicio14 />
                                    : counter == 4 ?
                                        <Ejercicio5 />
                                        : counter == 5 ?
                                            <Ejercicio16 />
                                            : counter == 6 ?
                                                <Ejercicio7 />
                                                : counter == 7 ?
                                                    <Ejercicio18 />
                                                    : counter == 8 ?
                                                        <Ejercicio9 />
                                                        : counter == 9 ?
                                                            <Ejercicio20 />
                                                            : counter == 10 ?
                                                                <Ejercicio11 />
                                                                : counter == 11 ?
                                                                    <Ejercicio2 />
                                                                    : counter == 12 ?
                                                                        <Ejercicio13 />
                                                                        : counter == 13 ?
                                                                            <Ejercicio4 />
                                                                            : counter == 14 ?
                                                                                <Ejercicio15 />
                                                                                : counter == 15 ?
                                                                                    <Ejercicio6 />
                                                                                    : counter == 16 ?
                                                                                        <Ejercicio17 />
                                                                                        : counter == 17 ?
                                                                                            <Ejercicio8 />
                                                                                            : counter == 18 ?
                                                                                                <Ejercicio19 />
                                                                                                : counter == 19 ?
                                                                                                    <Ejercicio10 />
                                                                                                    : <Fin posicionNivelActual={3}  nivel={"nivel1"} nombre={router.query.id} siguienteNivel="/Numeracion/Numeros_pares_impares"  numero={20}/>
                    }
                </div>
                : <Tiempo/>
            }
        </div>
    )
}
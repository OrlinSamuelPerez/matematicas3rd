import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
export default function NumerosOrdinales() {
    const [counter, setCounter] = useState(0)
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const router = useRouter()
    const handleClick1 = () => {
        setCounter(counter + 1)
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
    const drag = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const allowdrop = (e) => {
        e.preventDefault()
    }
    //del 1 al 6
    const arrayDato = [
        { image: "/img/ordenar1.png", pregunta: "Cuenta de izquierda a derecha y responde: ¿En qué posición se encuentra el pato?", repuesta: [{ valor: "Cuarto", validar: false }, { valor: "Sexto", validar: false }, { valor: "Quinto", validar: false }, { valor: "Tercero", validar: true }, { valor: "Primero", validar: false }, { valor: "Segundo", validar: false }] },
        { image: "/img/ordenar1.png", pregunta: "Cuenta de izquierda a derecha y responde: ¿En qué posición se encuentra el mono?", repuesta: [{ valor: "Sexto", validar: false }, { valor: "Cuarto", validar: false }, { valor: "Quinto", validar: true }, { valor: "Tercero", validar: false }, { valor: "Segundo", validar: false }, { valor: "Primero", validar: false }] },
        { image: "/img/ordenar1.png", pregunta: "Cuenta de izquierda a derecha y responde: ¿En qué posición se encuentra el perro?", repuesta: [{ valor: "Segundo", validar: false }, { valor: "Tercero", validar: false }, { valor: "Sexto", validar: false }, { valor: "Primero", validar: true }, { valor: "Quinto", validar: false }, { valor: "Cuarto", validar: false }] },
        { image: "/img/ordenar1.png", pregunta: "Cuenta de izquierda a derecha y responde: ¿En qué posición se encuentra el elefante?", repuesta: [{ valor: "Sexto", validar: true }, { valor: "Cuarto", validar: false }, { valor: "Quinto", validar: true }, { valor: "Tercero", validar: false }, { valor: "Segundo", validar: false }, { valor: "Primero", validar: false }] },
        { image: "/img/ordenar1.png", pregunta: "Cuenta de izquierda a derecha y responde: ¿En qué posición se encuentra el caballo?", repuesta: [{ valor: "Sexto", validar: false }, { valor: "Cuarto", validar: true }, { valor: "Quinto", validar: true }, { valor: "Tercero", validar: false }, { valor: "Segundo", validar: false }, { valor: "Primero", validar: false }] },
        { image: "/img/ordenar1.png", pregunta: "Cuenta de izquierda a derecha y responde: ¿En qué posición se encuentra el gato?", repuesta: [{ valor: "Sexto", validar: false }, { valor: "Cuarto", validar: false }, { valor: "Quinto", validar: true }, { valor: "Tercero", validar: false }, { valor: "Segundo", validar: true }, { valor: "Primero", validar: false }] },

    ]
    const Juego1 = (props) => {

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
            <div className="juego21-resta">
                <div className="numor">
                    <img src={props.data.image} />
                </div>
                <div>
                    <h4>{props.data.pregunta}</h4>
                    <div className="juego21-resta-repuesta">
                        {props.data.repuesta.map(e =>
                            <div><button onClick={() => validarPregunta(e.validar)}>{e.valor}</button></div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    // numero 7

    let array = ["", "", "", "", "", "", "", ""]

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
        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" && array[7] != "") {
            if (array[1] == "http://localhost:3000/img/gato.png" && array[2] == "http://localhost:3000/img/perro.png" && array[3] == "http://localhost:3000/img/pato.png" && array[4] == "http://localhost:3000/img/elefante.png" && array[5] == "http://localhost:3000/img/caballo.png" && array[6] == "http://localhost:3000/img/mono.png" && array[7] == "http://localhost:3000/img/tortuga.png") {
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
                array = ["", "", "", "", "", "", "", ""]
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

    const Juego7 = () => {
        return (
            <div className="secuencia drop-numeroordinales">
                <h3>Lee el siguiente párrafo y ordena los animales siguiendo el orden que dice.</h3>
                <p>Al terminar la carrera el caballo obtuvo el quinto lugar, el pato el tercer lugar, el perro el segundo lugar, el gato el primer lugar,
                    el elefante el cuarto lugar, el mono el sexto lugar y la tortuga el séptimo lugar. <br></br> Nota: Inicie organizando de izquierda a derecha
                </p>


                <div className="drop imagen-drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="/img/caballo.png" onDragStart={drag}><img className="img-orden" src="/img/caballo.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/pato.png" onDragStart={drag}><img className="img-orden" src="/img/pato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/tortuga.png" onDragStart={drag}><img className="img-orden" src="/img/tortuga.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/perro.png" onDragStart={drag}><img className="img-orden" src="/img/perro.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/elefante.png" onDragStart={drag}><img className="img-orden" src="/img/elefante.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/gato.png" onDragStart={drag}><img className="img-orden" src="/img/gato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/mono.png" onDragStart={drag}><img className="img-orden" src="/img/mono.png" /></div>


                </div>

            </div>

        )

    }
    // numero 8

    let array8 = ["", "", "", "", "", "", "", ""]

    const drop8 = (e) => {
        //Para btener el id arrastrado
        if (array8[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array8[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            console.log(data)
            console.log(array8)
        }
        if (array8[1] != "" && array8[2] != "" && array8[3] != "" && array8[4] != "" && array8[5] != "" && array8[6] != "" && array8[7] != "") {
            if (array8[1] == "http://localhost:3000/img/caballo.png" && array8[2] == "http://localhost:3000/img/tortuga.png" && array8[3] == "http://localhost:3000/img/mono.png" && array8[4] == "http://localhost:3000/img/gato.png" && array8[5] == "http://localhost:3000/img/pato.png" && array8[6] == "http://localhost:3000/img/perro.png" && array8[7] == "http://localhost:3000/img/elefante.png") {
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
                array8 = ["", "", "", "", "", "", "", ""]
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

    const Juego8 = () => {
        return (
            <div className="secuencia drop-numeroordinales">
                <h3>Lee el siguiente párrafo y ordena los animales siguiendo el orden que dice.</h3>
                <p>Al terminar la carrera el caballo obtuvo el primer lugar, el pato el quinto lugar, el perro el sexto lugar, el gato el cuarto lugar,
                    el elefante el séptimo lugar, el mono el tercer lugar y la tortuga el segundo lugar.
                    <br></br>Nota: Empieze a organizarlos de izquierda a derecha.
                </p>


                <div className="drop imagen-drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop8}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop8}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop8}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop8}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop8}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop8}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop8}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="/img/caballo.png" onDragStart={drag}><img className="img-orden" src="/img/caballo.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/pato.png" onDragStart={drag}><img className="img-orden" src="/img/pato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/tortuga.png" onDragStart={drag}><img className="img-orden" src="/img/tortuga.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/perro.png" onDragStart={drag}><img className="img-orden" src="/img/perro.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/elefante.png" onDragStart={drag}><img className="img-orden" src="/img/elefante.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/gato.png" onDragStart={drag}><img className="img-orden" src="/img/gato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/mono.png" onDragStart={drag}><img className="img-orden" src="/img/mono.png" /></div>


                </div>

            </div>

        )

    }
    // numero 9

    let array9 = ["", "", "", "", "", "", "", ""]

    const drop9 = (e) => {
        //Para btener el id arrastrado
        if (array9[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array9[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            console.log(data)
            console.log(array9)
        }
        if (array9[1] != "" && array9[2] != "" && array9[3] != "" && array9[4] != "" && array9[5] != "" && array9[6] != "" && array9[7] != "") {
            if (array9[1] == "http://localhost:3000/img/mono.png" && array9[2] == "http://localhost:3000/img/gato.png" && array9[3] == "http://localhost:3000/img/pato.png" && array9[4] == "http://localhost:3000/img/tortuga.png" && array9[5] == "http://localhost:3000/img/elefante.png" && array9[6] == "http://localhost:3000/img/caballo.png" && array9[7] == "http://localhost:3000/img/perro.png") {
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
                array9 = ["", "", "", "", "", "", "", ""]
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

    const Juego9 = () => {
        return (
            <div className="secuencia drop-numeroordinales">
                <h3>Lee el siguiente párrafo y ordena los animales siguiendo el orden que dice.</h3>
                <p>Al terminar la carrera el mono obtuvo el primer lugar, el elefante el quinto lugar, el caballo el sexto lugar, la tortuga el cuarto lugar,
                    el perro el séptimo lugar, el pato el tercer lugar y el gato el segundo lugar.
                    <br></br>Nota: Empieza a organizarlos de izquierda a derecha.

                </p>


                <div className="drop imagen-drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop9}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop9}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop9}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop9}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop9}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop9}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop9}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="/img/caballo.png" onDragStart={drag}><img className="img-orden" src="/img/caballo.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/pato.png" onDragStart={drag}><img className="img-orden" src="/img/pato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/tortuga.png" onDragStart={drag}><img className="img-orden" src="/img/tortuga.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/perro.png" onDragStart={drag}><img className="img-orden" src="/img/perro.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/elefante.png" onDragStart={drag}><img className="img-orden" src="/img/elefante.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/gato.png" onDragStart={drag}><img className="img-orden" src="/img/gato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/mono.png" onDragStart={drag}><img className="img-orden" src="/img/mono.png" /></div>


                </div>

            </div>

        )

    }

    // numero 10

    let array10 = ["", "", "", "", "", "", "", ""]

    const drop10 = (e) => {
        //Para btener el id arrastrado
        if (array10[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array10[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            console.log(data)
            console.log(array10)
        }
        if (array10[1] != "" && array10[2] != "" && array10[3] != "" && array10[4] != "" && array10[5] != "" && array10[6] != "" && array10[7] != "") {
            if (array10[1] == "http://localhost:3000/img/perro.png" && array10[2] == "http://localhost:3000/img/mono.png" && array10[3] == "http://localhost:3000/img/elefante.png" && array10[4] == "http://localhost:3000/img/caballo.png" && array10[5] == "http://localhost:3000/img/pato.png" && array10[6] == "http://localhost:3000/img/gato.png" && array10[7] == "http://localhost:3000/img/tortuga.png") {
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
                array10 = ["", "", "", "", "", "", "", ""]
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

    const Juego10 = () => {
        return (
            <div className="secuencia drop-numeroordinales">
                <h3>Lee el siguiente párrafo y ordena los animales siguiendo el orden que dice.</h3>
                <p>Al terminar la carrera el perro obtuvo el primer lugar, el pato el quinto lugar, el gato el sexto lugar, el caballo el cuarto lugar,
                    la tortuga el séptimo lugar, el elefante el tercer lugar y el mono el segundo lugar.
                    <br></br>Nota: Empieza a organizarlos de izquierda a derecha.
                </p>


                <div className="drop imagen-drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop10}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop10}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop10}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop10}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop10}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop10}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop10}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="/img/caballo.png" onDragStart={drag}><img className="img-orden" src="/img/caballo.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/pato.png" onDragStart={drag}><img className="img-orden" src="/img/pato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/tortuga.png" onDragStart={drag}><img className="img-orden" src="/img/tortuga.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/perro.png" onDragStart={drag}><img className="img-orden" src="/img/perro.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/elefante.png" onDragStart={drag}><img className="img-orden" src="/img/elefante.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/gato.png" onDragStart={drag}><img className="img-orden" src="/img/gato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/mono.png" onDragStart={drag}><img className="img-orden" src="/img/mono.png" /></div>


                </div>

            </div>

        )

    }

    //Numero 11
    let array11 = ["", "", "", "", "", "", "", ""]

    const drop11 = (e) => {
        //Para btener el id arrastrado
        if (array11[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array11[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            console.log(data)
            console.log(array11)
        }
        if (array11[1] != "" && array11[2] != "" && array11[3] != "" && array11[4] != "" && array11[5] != "" && array11[6] != "" && array11[7] != "") {
            if (array11[1] == "http://localhost:3000/img/elefante.png" && array11[2] == "http://localhost:3000/img/mono.png" && array11[3] == "http://localhost:3000/img/pato.png" && array11[4] == "http://localhost:3000/img/caballo.png" && array11[5] == "http://localhost:3000/img/gato.png" && array11[6] == "http://localhost:3000/img/perro.png" && array11[7] == "http://localhost:3000/img/tortuga.png") {
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
                array11 = ["", "", "", "", "", "", "", ""]
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

    const Juego11 = () => {
        return (
            <div className="secuencia drop-numeroordinales">
                <h3>Lee el siguiente párrafo y ordena los animales siguiendo el orden que dice.</h3>
                <p>Al terminar la carrera el elefante obtuvo el primer lugar, el gato el quinto lugar, el perro el sexto lugar, el caballo el cuarto lugar,
                    la tortuga el séptimo lugar, el pato el tercer lugar y el mono el segundo lugar.
                    <br></br>Nota: Empieza a organizarlos de izquierda a derecha.

                </p>


                <div className="drop imagen-drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop11}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop11}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop11}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop11}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop11}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop11}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop11}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="/img/caballo.png" onDragStart={drag}><img className="img-orden" src="/img/caballo.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/pato.png" onDragStart={drag}><img className="img-orden" src="/img/pato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/tortuga.png" onDragStart={drag}><img className="img-orden" src="/img/tortuga.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/perro.png" onDragStart={drag}><img className="img-orden" src="/img/perro.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/elefante.png" onDragStart={drag}><img className="img-orden" src="/img/elefante.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/gato.png" onDragStart={drag}><img className="img-orden" src="/img/gato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/mono.png" onDragStart={drag}><img className="img-orden" src="/img/mono.png" /></div>


                </div>

            </div>

        )

    }

    // Numero 12

    let array12 = ["", "", "", "", "", "", "", ""]

    const drop12 = (e) => {
        //Para btener el id arrastrado
        if (array12[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array12[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            console.log(data)
            console.log(array12)
        }
        if (array12[1] != "" && array12[2] != "" && array12[3] != "" && array12[4] != "" && array12[5] != "" && array12[6] != "" && array12[7] != "") {
            if (array12[1] == "http://localhost:3000/img/mono.png" && array12[2] == "http://localhost:3000/img/caballo.png" && array12[3] == "http://localhost:3000/img/tortuga.png" && array12[4] == "http://localhost:3000/img/elefante.png" && array12[5] == "http://localhost:3000/img/perro.png" && array12[6] == "http://localhost:3000/img/pato.png" && array12[7] == "http://localhost:3000/img/gato.png") {
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
                array12 = ["", "", "", "", "", "", "", ""]
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

    const Juego12 = () => {
        return (
            <div className="secuencia drop-numeroordinales">
                <h3>Lee el siguiente párrafo y ordena los animales siguiendo el orden que dice.</h3>
                <p>Al terminar la carrera el mono obtuvo el primer lugar, el perro el quinto lugar, el pato el sexto lugar, el elefante el cuarto lugar,
                    el gato el séptimo lugar, la tortuga el tercer lugar y el caballo el segundo lugar.
                    <br></br>Nota: Empieza a organizarlos de izquierda a derecha.

                </p>


                <div className="drop imagen-drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop12}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop12}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop12}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop12}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop12}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop12}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop12}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="/img/caballo.png" onDragStart={drag}><img className="img-orden" src="/img/caballo.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/pato.png" onDragStart={drag}><img className="img-orden" src="/img/pato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/tortuga.png" onDragStart={drag}><img className="img-orden" src="/img/tortuga.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/perro.png" onDragStart={drag}><img className="img-orden" src="/img/perro.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/elefante.png" onDragStart={drag}><img className="img-orden" src="/img/elefante.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/gato.png" onDragStart={drag}><img className="img-orden" src="/img/gato.png" /></div>
                    <div className="drag-d" draggable="true" id="/img/mono.png" onDragStart={drag}><img className="img-orden" src="/img/mono.png" /></div>


                </div>

            </div>

        )

    }

    //juego 13
    let array13 = ["", "", "", "", "", "", "", ""]

    const drop13 = (e) => {
        //Para btener el id arrastrado
        if (array13[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array13[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array13[1] != "" && array13[2] != "" && array13[3] != "" && array13[4] != "" && array13[5] != "" && array13[6] != "" && array13[7] != "") {
            if (array13[1] == "P" && (array13[2] == "R" || array13[2] == "R2") && array13[3] == "I" && array13[4] == "M" && array13[5] == "E" && (array13[6] == "R" || array13[6] == "R2") && array13[7] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 1°.",
                    1,
                    counter

                )

            }
            else {
                array13 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 1°.",
                    1,
                    counter

                )



            }
        }
    }

    const Juego13 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 1°.</h3>



                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop13}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop13}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop13}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop13}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop13}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop13}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop13}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d" draggable="true" id="P" onDragStart={drag}>P</div>
                    <div className="drag-d" draggable="true" id="R2" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Juego 14
    let array14 = ["", "", "", "", "", ""]

    const drop14 = (e) => {
        //Para btener el id arrastrado
        if (array14[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array14[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array14[1] != "" && array14[2] != "" && array14[3] != "" && array14[4] != "" && array14[5] != "") {
            if (array14[1] == "S" && array14[2] == "E" && array14[3] == "X" && array14[4] == "T" && array14[5] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 6°.",
                    1,
                    counter

                )

            }
            else {
                array14 = ["", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 6°.",
                    1,
                    counter

                )



            }
        }
    }

    const Juego14 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 6°.</h3>

                <div className="drop-no4">
                    <div className="box-drop-no4" id="1" onDragOver={allowdrop} onDrop={drop14}></div>
                    <div className="box-drop-no4" id="2" onDragOver={allowdrop} onDrop={drop14}></div>
                    <div className="box-drop-no4" id="3" onDragOver={allowdrop} onDrop={drop14}></div>
                    <div className="box-drop-no4" id="4" onDragOver={allowdrop} onDrop={drop14}></div>
                    <div className="box-drop-no4" id="5" onDragOver={allowdrop} onDrop={drop14}></div>

                </div>
                <div className="drag">
                    <div className="drag-d-no4" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d-no4" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d-no4" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d-no4" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d-no4" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d-no4" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d-no4" draggable="true" id="P" onDragStart={drag}>P</div>
                    <div className="drag-d-no4" draggable="true" id="X" onDragStart={drag}>X</div>
                    <div className="drag-d-no4" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d-no4" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d-no4" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d-no4" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d-no4" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d-no4" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Juego 15
    let array15 = ["", "", "", "", "", "", ""]

    const drop15 = (e) => {
        //Para btener el id arrastrado
        if (array15[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array15[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array15[1] != "" && array15[2] != "" && array15[3] != "" && array15[4] != "" && array15[5] != "" && array15[6] != "") {
            if ((array15[1] == "N" || array15[1] == "N2") && (array15[2] == "O" || array15[2] == "O2") && array15[3] == "V" && array15[4] == "E" && (array15[5] == "N" || array15[5] == "N2") && (array15[6] == "O" || array15[6] == "O2")) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 9°.",
                    1,
                    counter

                )

            }
            else {
                array15 = ["", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 9°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego15 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 9°.</h3>

                <div className="drop-no2">
                    <div className="box-drop-no2" id="1" onDragOver={allowdrop} onDrop={drop15}></div>
                    <div className="box-drop-no2" id="2" onDragOver={allowdrop} onDrop={drop15}></div>
                    <div className="box-drop-no2" id="3" onDragOver={allowdrop} onDrop={drop15}></div>
                    <div className="box-drop-no2" id="4" onDragOver={allowdrop} onDrop={drop15}></div>
                    <div className="box-drop-no2" id="5" onDragOver={allowdrop} onDrop={drop15}></div>
                    <div className="box-drop-no2" id="6" onDragOver={allowdrop} onDrop={drop15}></div>
                </div>
                <div className="drag">
                    <div className="drag-d-no2" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d-no2" draggable="true" id="N2" onDragStart={drag}>N</div>
                    <div className="drag-d-no2" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d-no2" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d-no2" draggable="true" id="O2" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="R2" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d-no2" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d-no2" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d-no2" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d-no2" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d-no2" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Juego 16
    let array16 = ["", "", "", "", "", "", ""]

    const drop16 = (e) => {
        //Para btener el id arrastrado
        if (array16[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array16[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array16[1] != "" && array16[2] != "" && array16[3] != "" && array16[4] != "" && array16[5] != "" && array16[6] != "") {
            if (array16[1] == "D" && array16[2] == "E" && array16[3] == "C" && array16[4] == "I" && array16[5] == "M" && (array16[6] == "O" || array16[6] == "O2")) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 10°.",
                    1,
                    counter

                )

            }
            else {
                array16 = ["", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 10°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego16 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 10°.</h3>

                <div className="drop-no2">
                    <div className="box-drop-no2" id="1" onDragOver={allowdrop} onDrop={drop16}></div>
                    <div className="box-drop-no2" id="2" onDragOver={allowdrop} onDrop={drop16}></div>
                    <div className="box-drop-no2" id="3" onDragOver={allowdrop} onDrop={drop16}></div>
                    <div className="box-drop-no2" id="4" onDragOver={allowdrop} onDrop={drop16}></div>
                    <div className="box-drop-no2" id="5" onDragOver={allowdrop} onDrop={drop16}></div>
                    <div className="box-drop-no2" id="6" onDragOver={allowdrop} onDrop={drop16}></div>
                </div>
                <div className="drag">
                    <div className="drag-d-no2" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d-no2" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d-no2" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d-no2" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d-no2" draggable="true" id="O2" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="R2" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d-no2" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d-no2" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d-no2" draggable="true" id="E" onDragStart={drag}>É</div>
                    <div className="drag-d-no2" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d-no2" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    // Numero 17
    let array17 = ["", "", "", "", "", "", ""]

    const drop17 = (e) => {
        //Para btener el id arrastrado
        if (array17[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array17[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array17[1] != "" && array17[2] != "" && array17[3] != "" && array17[4] != "" && array17[5] != "" && array17[6] != "") {
            if ((array17[1] == "O" || array17[1] == "O2") && array17[2] == "C" && array17[3] == "T" && array17[4] == "A" && array17[5] == "V" && (array17[6] == "O" || array17[6] == "O2")) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 8°.",
                    1,
                    counter

                )

            }
            else {
                array17 = ["", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 8°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego17 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 8°.</h3>

                <div className="drop-no2">
                    <div className="box-drop-no2" id="1" onDragOver={allowdrop} onDrop={drop17}></div>
                    <div className="box-drop-no2" id="2" onDragOver={allowdrop} onDrop={drop17}></div>
                    <div className="box-drop-no2" id="3" onDragOver={allowdrop} onDrop={drop17}></div>
                    <div className="box-drop-no2" id="4" onDragOver={allowdrop} onDrop={drop17}></div>
                    <div className="box-drop-no2" id="5" onDragOver={allowdrop} onDrop={drop17}></div>
                    <div className="box-drop-no2" id="6" onDragOver={allowdrop} onDrop={drop17}></div>
                </div>
                <div className="drag">
                    <div className="drag-d-no2" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d-no2" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d-no2" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d-no2" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d-no2" draggable="true" id="O2" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="R2" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d-no2" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d-no2" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d-no2" draggable="true" id="A" onDragStart={drag}>A</div>
                    <div className="drag-d-no2" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d-no2" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }
    // Numero 18
    let array18 = ["", "", "", "", "", "", "", "", ""]

    const drop18 = (e) => {
        //Para btener el id arrastrado
        if (array18[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array18[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array18[1] != "" && array18[2] != "" && array18[3] != "" && array18[4] != "" && array18[5] != "" && array18[6] != "" && array18[7] != "" && array18[8] != "") {
            if (array18[1] == "V" && (array18[2] == "I" || array18[2] == "I2") && array18[3] == "G" && array18[4] == "E" && array18[5] == "S" && (array18[6] == "I" || array18[6] == "I2") && array18[7] == "M" && array18[8] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 20°.",
                    1,
                    counter

                )

            }
            else {
                array18 = ["", "", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 20°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego18 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 20°.</h3>

                <div className="drop-no3">
                    <div className="box-drop-no3" id="1" onDragOver={allowdrop} onDrop={drop18}></div>
                    <div className="box-drop-no3" id="2" onDragOver={allowdrop} onDrop={drop18}></div>
                    <div className="box-drop-no3" id="3" onDragOver={allowdrop} onDrop={drop18}></div>
                    <div className="box-drop-no3" id="4" onDragOver={allowdrop} onDrop={drop18}></div>
                    <div className="box-drop-no3" id="5" onDragOver={allowdrop} onDrop={drop18}></div>
                    <div className="box-drop-no3" id="6" onDragOver={allowdrop} onDrop={drop18}></div>
                    <div className="box-drop-no3" id="7" onDragOver={allowdrop} onDrop={drop18}></div>
                    <div className="box-drop-no3" id="8" onDragOver={allowdrop} onDrop={drop18}></div>


                </div>
                <div className="drag-no3">
                    <div className="drag-d-no3" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d-no3" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d-no3" draggable="true" id="G" onDragStart={drag}>G</div>
                    <div className="drag-d-no3" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d-no3" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d-no3" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d-no3" draggable="true" id="I2" onDragStart={drag}>I</div>
                    <div className="drag-d-no3" draggable="true" id="E" onDragStart={drag}>É</div>
                    <div className="drag-d-no3" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d-no3" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d-no3" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d-no3" draggable="true" id="A" onDragStart={drag}>A</div>
                    <div className="drag-d-no3" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d-no3" draggable="true" id="R" onDragStart={drag}>R</div>




                </div>

            </div>

        )

    }

    //numero 19
    let array19 = ["", "", "", "", "", "", "", ""]

    const drop19 = (e) => {
        //Para btener el id arrastrado
        if (array19[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array19[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array19[1] != "" && array19[2] != "" && array19[3] != "" && array19[4] != "" && array19[5] != "" && array19[6] != "" && array19[7] != "") {
            if (array19[1] == "S" && array19[2] == "E" && array19[3] == "G" && array19[4] == "U" && array19[5] == "N" && array19[6] == "D" && array19[7] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 2°.",
                    1,
                    counter

                )

            }
            else {
                array19 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 2°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego19 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 2°.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop19}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop19}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop19}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop19}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop19}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop19}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop19}></div>

                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d" draggable="true" id="G" onDragStart={drag}>G</div>
                    <div className="drag-d" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d" draggable="true" id="P" onDragStart={drag}>P</div>
                    <div className="drag-d" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Numero 20
    let array20 = ["", "", "", "", "", "", "", ""]

    const drop20 = (e) => {
        //Para btener el id arrastrado
        if (array20[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array20[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array20[1] != "" && array20[2] != "" && array20[3] != "" && array20[4] != "" && array20[5] != "" && array20[6] != "" && array20[7] != "") {
            if (array20[1] == "S" && array20[2] == "E" && array20[3] == "P" && array20[4] == "T" && array20[5] == "I" && array20[6] == "M" && array20[7] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 7°.",
                    1,
                    counter

                )

            }
            else {
                array20 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 7°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego20 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 7°.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop20}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop20}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop20}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop20}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop20}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop20}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop20}></div>

                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d" draggable="true" id="G" onDragStart={drag}>G</div>
                    <div className="drag-d" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d" draggable="true" id="P" onDragStart={drag}>P</div>
                    <div className="drag-d" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d" draggable="true" id="E" onDragStart={drag}>É</div>
                    <div className="drag-d" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Numero21
    let array21 = ["", "", "", "", "", "", "", ""]

    const drop21 = (e) => {
        //Para btener el id arrastrado
        if (array21[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array21[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array21[1] != "" && array21[2] != "" && array21[3] != "" && array21[4] != "" && array21[5] != "" && array21[6] != "" && array21[7] != "") {
            if (array21[1] == "T" && (array21[2] == "E" || array21[2] == "E2") && (array21[3] == "R" || array21[3] == "R2") && array21[4] == "C" && (array21[5] == "E" || array21[5] == "E2") && (array21[6] == "R" || array21[6] == "R2") && array21[7] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 3°.",
                    1,
                    counter

                )

            }
            else {
                array21 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 3°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego21 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 3°.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop21}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop21}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop21}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop21}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop21}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop21}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop21}></div>

                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d" draggable="true" id="R2" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="E2" onDragStart={drag}>E</div>
                    <div className="drag-d" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d" draggable="true" id="P" onDragStart={drag}>P</div>
                    <div className="drag-d" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Numero 22
    let array22 = ["", "", "", "", "", "", ""]

    const drop22 = (e) => {
        //Para btener el id arrastrado
        if (array22[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array22[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array22[1] != "" && array22[2] != "" && array22[3] != "" && array22[4] != "" && array22[5] != "" && array22[6] != "") {
            if (array22[1] == "Q" && array22[2] == "U" && array22[3] == "I" && array22[4] == "N" && array22[5] == "T" && array22[6] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 5°.",
                    1,
                    counter

                )

            }
            else {
                array22 = ["", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 5°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego22 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 5°.</h3>

                <div className="drop-no2">
                    <div className="box-drop-no2" id="1" onDragOver={allowdrop} onDrop={drop22}></div>
                    <div className="box-drop-no2" id="2" onDragOver={allowdrop} onDrop={drop22}></div>
                    <div className="box-drop-no2" id="3" onDragOver={allowdrop} onDrop={drop22}></div>
                    <div className="box-drop-no2" id="4" onDragOver={allowdrop} onDrop={drop22}></div>
                    <div className="box-drop-no2" id="5" onDragOver={allowdrop} onDrop={drop22}></div>
                    <div className="box-drop-no2" id="6" onDragOver={allowdrop} onDrop={drop22}></div>

                </div>
                <div className="drag">
                    <div className="drag-d-no2" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d-no2" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d-no2" draggable="true" id="Q" onDragStart={drag}>Q</div>
                    <div className="drag-d-no2" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d-no2" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d-no2" draggable="true" id="P" onDragStart={drag}>P</div>
                    <div className="drag-d-no2" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d-no2" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d-no2" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d-no2" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d-no2" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d-no2" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Numero 23
    let array23 = ["", "", "", "", "", "", ""]

    const drop23 = (e) => {
        //Para btener el id arrastrado
        if (array23[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array23[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array23[1] != "" && array23[2] != "" && array23[3] != "" && array23[4] != "" && array23[5] != "" && array23[6] != "") {
            if (array23[1] == "C" && array23[2] == "U" && array23[3] == "A" && array23[4] == "R" && array23[5] == "T" && array23[6] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 4°.",
                    1,
                    counter

                )

            }
            else {
                array23 = ["", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 4°.",
                    1,
                    counter

                )
            }
        }
    }

    const Juego23 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 4°.</h3>

                <div className="drop-no2">
                    <div className="box-drop-no2" id="1" onDragOver={allowdrop} onDrop={drop23}></div>
                    <div className="box-drop-no2" id="2" onDragOver={allowdrop} onDrop={drop23}></div>
                    <div className="box-drop-no2" id="3" onDragOver={allowdrop} onDrop={drop23}></div>
                    <div className="box-drop-no2" id="4" onDragOver={allowdrop} onDrop={drop23}></div>
                    <div className="box-drop-no2" id="5" onDragOver={allowdrop} onDrop={drop23}></div>
                    <div className="box-drop-no2" id="6" onDragOver={allowdrop} onDrop={drop23}></div>

                </div>
                <div className="drag">
                    <div className="drag-d-no2" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d-no2" draggable="true" id="M" onDragStart={drag}>M</div>
                    <div className="drag-d-no2" draggable="true" id="Q" onDragStart={drag}>Q</div>
                    <div className="drag-d-no2" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d-no2" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d-no2" draggable="true" id="U" onDragStart={drag}>U</div>
                    <div className="drag-d-no2" draggable="true" id="P" onDragStart={drag}>P</div>
                    <div className="drag-d-no2" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d-no2" draggable="true" id="A" onDragStart={drag}>A</div>
                    <div className="drag-d-no2" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d-no2" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d-no2" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d-no2" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d-no2" draggable="true" id="N" onDragStart={drag}>N</div>




                </div>

            </div>

        )

    }

    //Numero 24
    let array24 = ["", "", "", "", "", "", "", "", "", ""]

    const drop24 = (e) => {
        //Para btener el id arrastrado
        if (array24[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array24[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
            console.log(data)
        }
        if (array24[1] != "" && array24[2] != "" && array24[3] != "" && array24[4] != "" && array24[5] != "" && array24[6] != "" && array24[7] != "" && array24[8] != "" && array24[9] != "") {
            if (array24[1] == "T" && (array24[2] == "R" || array24[2] == "R2") && (array24[3] == "I" || array24[3] == "I2") && array24[4] == "G" && array24[5] == "E2" && array24[6] == "S" && (array24[7] == "I" || array24[7] == "I2") && array24[8] == "M" && array24[9] == "O") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Escribe correctamente el numero ordinal 30°.",
                    1,
                    counter

                )

            }
            else {
                array24 = ["", "", "", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Escribe correctamente el numero ordinal 30°.",
                    1,
                    counter

                )
            }
        }
    }
    const Juego24 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice las letras necesarias para escribir en letras el número ordinal 30°.</h3>

                <div className="drop-no">
                    <div className="box-drop-no" id="1" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="2" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="3" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="4" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="5" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="6" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="7" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="8" onDragOver={allowdrop} onDrop={drop24}></div>
                    <div className="box-drop-no" id="9" onDragOver={allowdrop} onDrop={drop24}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="T" onDragStart={drag}>T</div>
                    <div className="drag-d" draggable="true" id="R2" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="E2" onDragStart={drag}>É</div>
                    <div className="drag-d" draggable="true" id="C" onDragStart={drag}>C</div>
                    <div className="drag-d" draggable="true" id="O" onDragStart={drag}>O</div>
                    <div className="drag-d" draggable="true" id="G" onDragStart={drag}>G</div>
                    <div className="drag-d" draggable="true" id="D" onDragStart={drag}>D</div>
                    <div className="drag-d" draggable="true" id="R" onDragStart={drag}>R</div>
                    <div className="drag-d" draggable="true" id="S" onDragStart={drag}>S</div>
                    <div className="drag-d" draggable="true" id="V" onDragStart={drag}>V</div>
                    <div className="drag-d" draggable="true" id="I" onDragStart={drag}>I</div>
                    <div className="drag-d" draggable="true" id="E" onDragStart={drag}>E</div>
                    <div className="drag-d" draggable="true" id="I2" onDragStart={drag}>I</div>
                    <div className="drag-d" draggable="true" id="M" onDragStart={drag}>M</div>




                </div>

            </div>

        )

    }
    return (
        <div>
            <div className="Contador-secuencia">{counter + 1}/24</div>

            {juegoActivo == false ?
                <div>
                    {counter == 0 ?
                        <div>
                            <Juego1 data={arrayDato[0]} />
                            {juegoSiguienActivo == true ?
                                <div className="siguiente-espacial"></div>
                                : <span>.</span>}
                        </div>
                        : counter == 1 ?
                            <div>
                                <Juego7 />
                                {juegoSiguienActivo == true ?
                                    <div className="siguiente-espacial"></div>
                                    : <span>.</span>}
                            </div>
                            : counter == 2 ?
                                <div>
                                    <Juego13 />
                                    {juegoSiguienActivo == true ?
                                        <div className="siguiente-espacial"></div>
                                        : <span>.</span>}
                                </div>
                                : counter == 3 ?
                                    <div>
                                        <Juego1 data={arrayDato[1]} />
                                        {juegoSiguienActivo == true ?
                                            <div className="siguiente-espacial"></div>
                                            : <span>.</span>}
                                    </div>
                                    : counter == 4 ?
                                        <div>
                                            <Juego24 />
                                            {juegoSiguienActivo == true ?
                                                <div className="siguiente-espacial"></div>
                                                : <span>.</span>}
                                        </div>
                                        : counter == 5 ?
                                            <div>
                                                <Juego8 />
                                                {juegoSiguienActivo == true ?
                                                    <div className="siguiente-espacial"></div>
                                                    : <span>.</span>}
                                            </div>
                                            : counter == 6 ?
                                                <div>
                                                    <Juego15 />
                                                    {juegoSiguienActivo == true ?
                                                        <div className="siguiente-espacial"></div>
                                                        : <span>.</span>}
                                                </div>
                                                : counter == 7 ?
                                                    <div>
                                                        <Juego9 />
                                                        {juegoSiguienActivo == true ?
                                                            <div className="siguiente-espacial"></div>
                                                            : <span>.</span>}
                                                    </div>
                                                    : counter == 8 ?
                                                        <div>
                                                            <Juego1 data={arrayDato[2]} />
                                                            {juegoSiguienActivo == true ?
                                                                <div className="siguiente-espacial"></div>
                                                                : <span>.</span>}
                                                        </div>
                                                        : counter == 9 ?
                                                            <div>
                                                                <Juego10 />
                                                                {juegoSiguienActivo == true ?
                                                                    <div className="siguiente-espacial"></div>
                                                                    : <span>.</span>}
                                                            </div>
                                                            : counter == 10 ?
                                                                <div>
                                                                    <Juego1 data={arrayDato[3]} />
                                                                    {juegoSiguienActivo == true ?
                                                                        <div className="siguiente-espacial"></div>
                                                                        : <span>.</span>}
                                                                </div>
                                                                : counter == 11 ?
                                                                    <div>
                                                                        <Juego16 />
                                                                        {juegoSiguienActivo == true ?
                                                                            <div className="siguiente-espacial"></div>
                                                                            : <span>.</span>}
                                                                    </div>
                                                                    : counter == 12 ?
                                                                        <div>
                                                                            <Juego1 data={arrayDato[4]} />
                                                                            {juegoSiguienActivo == true ?
                                                                                <div className="siguiente-espacial"></div>
                                                                                : <span>.</span>}
                                                                        </div>
                                                                        : counter == 13 ?
                                                                            <div>
                                                                                <Juego17 />
                                                                                {juegoSiguienActivo == true ?
                                                                                    <div className="siguiente-espacial"></div>
                                                                                    : <span>.</span>}
                                                                            </div>
                                                                            : counter == 14 ?
                                                                                <div>
                                                                                    <Juego11 />
                                                                                    {juegoSiguienActivo == true ?
                                                                                        <div className="siguiente-espacial"></div>
                                                                                        : <span>.</span>}
                                                                                </div>
                                                                                : counter == 15 ?
                                                                                    <div>
                                                                                        <Juego20 />
                                                                                        {juegoSiguienActivo == true ?
                                                                                            <div className="siguiente-espacial"></div>
                                                                                            : <span>.</span>}
                                                                                    </div>
                                                                                    : counter == 16 ?
                                                                                        <div>
                                                                                            <Juego22 />
                                                                                            {juegoSiguienActivo == true ?
                                                                                                <div className="siguiente-espacial"></div>
                                                                                                : <span>.</span>}
                                                                                        </div>
                                                                                        : counter == 17 ?
                                                                                            <div>
                                                                                                <Juego1 data={arrayDato[5]} />
                                                                                                {juegoSiguienActivo == true ?
                                                                                                    <div className="siguiente-espacial"></div>
                                                                                                    : <span>.</span>}
                                                                                            </div>
                                                                                            : counter == 18 ?
                                                                                                <div>
                                                                                                    <Juego19 />
                                                                                                    {juegoSiguienActivo == true ?
                                                                                                        <div className="siguiente-espacial"></div>
                                                                                                        : <span>.</span>}
                                                                                                </div>
                                                                                                : counter == 19 ?
                                                                                                    <div>
                                                                                                        <Juego18 />
                                                                                                        {juegoSiguienActivo == true ?
                                                                                                            <div className="siguiente-espacial"></div>
                                                                                                            : <span>.</span>}
                                                                                                    </div>
                                                                                                    : counter == 20 ?
                                                                                                        <div>
                                                                                                            <Juego21 />
                                                                                                            {juegoSiguienActivo == true ?
                                                                                                                <div className="siguiente-espacial"></div>
                                                                                                                : <span>.</span>}
                                                                                                        </div>
                                                                                                        : counter == 21 ?
                                                                                                            <div>
                                                                                                                <Juego12 />
                                                                                                                {juegoSiguienActivo == true ?
                                                                                                                    <div className="siguiente-espacial"></div>
                                                                                                                    : <span>.</span>}
                                                                                                            </div>
                                                                                                            : counter == 22 ?
                                                                                                                <div>
                                                                                                                    <Juego23 />
                                                                                                                    {juegoSiguienActivo == true ?
                                                                                                                        <div className="siguiente-espacial"></div>
                                                                                                                        : <span>.</span>}
                                                                                                                </div>
                                                                                                                : counter == 23 ?
                                                                                                                    <div>
                                                                                                                        <Juego14 />
                                                                                                                        {juegoSiguienActivo == true ?
                                                                                                                            <div className="siguiente-espacial"></div>
                                                                                                                            : <span>.</span>}
                                                                                                                    </div>
                                                                                                                    : <Fin posicionNivelActual={6} nivel={"nivel1"} nombre={router.query.id} siguienteNivel="/Numeracion/Adicion" numero={24} />


                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";

export default function Resta() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
    const router = useRouter()
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
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
    // numero 1
    let array = ["", "", ""]
    const drag = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array[1] != "" && array[2] != "") {
            if (array[1] == "uno" && array[2] == "siete") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop = (e) => {
        e.preventDefault()
    }
    const Juego = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >8</div>
                            <div className="box-drop-resta" >9</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >2</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 2
    let array2 = ["", "", ""]
    const drag2 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop2 = (e) => {
        //Para btener el id arrastrado
        if (array2[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array2[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array2[1] != "" && array2[2] != "") {
            if (array2[1] == "cuatro" && array2[2] == "uno") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array2 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop2 = (e) => {
        e.preventDefault()
    }
    const Juego2 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >4</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >3</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop2} onDrop={drop2}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop2} onDrop={drop2}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag2}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag2}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag2}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag2}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag2}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag2}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag2}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag2}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag2}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag2}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 3
    let array3 = ["", "", ""]
    const drag3 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop3 = (e) => {
        //Para btener el id arrastrado
        if (array3[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array3[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array3[1] != "" && array3[2] != "") {
            if (array3[1] == "cinco" && array3[2] == "tres") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array3 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop3 = (e) => {
        e.preventDefault()
    }
    const Juego3 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >3</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >0</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop3} onDrop={drop3}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop3} onDrop={drop3}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag3}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag3}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag3}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag3}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag3}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag3}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag3}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag3}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag3}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag3}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 4
    let array4 = ["", "", ""]
    const drag4 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop4 = (e) => {
        //Para btener el id arrastrado
        if (array4[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array4[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array4[1] != "" && array4[2] != "") {
            if (array4[1] == "dos" && array4[2] == "tres") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array4 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop4 = (e) => {
        e.preventDefault()
    }
    const Juego4 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >5</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >2</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop4} onDrop={drop4}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop4} onDrop={drop4}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag4}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag4}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag4}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag4}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag4}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag4}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag4}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag4}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag4}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag4}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 5
    let array5 = ["", "", ""]
    const drag5 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop5 = (e) => {
        //Para btener el id arrastrado
        if (array5[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array5[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array5[1] != "" && array5[2] != "") {
            if (array5[1] == "uno" && array5[2] == "tres") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array5 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop5 = (e) => {
        e.preventDefault()
    }
    const Juego5 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >3</div>
                            <div className="box-drop-resta" >4</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >1</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop5} onDrop={drop5}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop5} onDrop={drop5}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag5}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag5}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag5}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag5}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag5}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag5}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag5}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag5}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag5}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag5}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 6
    let array6 = ["", "", ""]
    const drag6 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop6 = (e) => {
        //Para btener el id arrastrado
        if (array6[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array6[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array6[1] != "" && array6[2] != "") {
            if (array6[1] == "siete" && array6[2] == "cinco") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )
            }
            else {

                array6 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop6 = (e) => {
        e.preventDefault()
    }
    const Juego6 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >0</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >5</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop6} onDrop={drop6}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop6} onDrop={drop6}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag6}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag6}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag6}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag6}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag6}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag6}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag6}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag6}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag6}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag6}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 7
    let array7 = ["", "", ""]
    const drag7 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop7 = (e) => {
        //Para btener el id arrastrado
        if (array7[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array7[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array7[1] != "" && array7[2] != "" ) {
            if (array7[1] == "uno" && array7[2] == "ocho" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )
            }
            else {

                array7 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop7 = (e) => {
        e.preventDefault()
    }
    const Juego7 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >5</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >7</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop7} onDrop={drop7}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop7} onDrop={drop7}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag7}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag7}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag7}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag7}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag7}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag7}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag7}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag7}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag7}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag7}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 8
    let array8 = ["", "", ""]
    const drag8 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
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
            if (array8[1] == "dos" && array8[2] == "ocho" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
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
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop8 = (e) => {
        e.preventDefault()
    }
    const Juego8 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >7</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >6</div>
                            <div className="box-drop-resta" >9</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop8} onDrop={drop8}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop8} onDrop={drop8}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag8}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag8}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag8}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag8}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag8}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag8}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag8}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag8}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag8}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag8}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 9
    let array9 = ["", "", ""]
    const drag9 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop9 = (e) => {
        //Para btener el id arrastrado
        if (array9[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array9[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array9[1] != "" && array9[2] != "") {
            if (array9[1] == "tres" && array9[2] == "siete" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
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
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop9 = (e) => {
        e.preventDefault()
    }
    const Juego9 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >8</div>
                            <div className="box-drop-resta" >6</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >9</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop9} onDrop={drop9}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop9} onDrop={drop9}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag9}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag9}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag9}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag9}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag9}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag9}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag9}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag9}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag9}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag9}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 10
    let array10 = ["", "", ""]
    const drag10 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
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
            if (array10[1] == "uno" && array10[2] == "nueve" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
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
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop10 = (e) => {
        e.preventDefault()
    }
    const Juego10 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >6</div>
                            <div className="box-drop-resta" >7</div>
                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >8</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop10} onDrop={drop10}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop10} onDrop={drop10}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag10}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag10}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag10}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag10}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag10}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag10}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag10}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag10}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag10}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag10}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 11
    let array11 = ["", "", "", ""]
    const drag11 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop11 = (e) => {
        //Para btener el id arrastrado
        if (array11[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array11[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array11[1] != "" && array11[2] != "" && array11[3] != "") {
            if (array11[1] == "uno" && array11[2] == "cero" && array11[3] == "cuatro") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )
            }
            else {

                array11 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop11 = (e) => {
        e.preventDefault()
    }
    const Juego11 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >2</div>

                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >6</div>
                            <div className="box-drop-resta" >3</div>
                            <div className="box-drop-resta" >8</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop11} onDrop={drop11}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop11} onDrop={drop11}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop11} onDrop={drop11}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag11}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag11}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag11}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag11}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag11}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag11}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag11}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag11}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag11}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag11}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 12
    let array12 = ["", "", "", ""]
    const drag12 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop12 = (e) => {
        //Para btener el id arrastrado
        if (array12[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array12[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array12[1] != "" && array12[2] != "" && array12[3] != "") {
            if (array12[1] == "tres" && array12[2] == "siete" && array12[3] == "cinco") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )
            }
            else {

                array12 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop12 = (e) => {
        e.preventDefault()
    }
    const Juego12 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >4</div>

                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >3</div>
                            <div className="box-drop-resta" >9</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop12} onDrop={drop12}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop12} onDrop={drop12}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop12} onDrop={drop12}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag12}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag12}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag12}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag12}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag12}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag12}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag12}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag12}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag12}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag12}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 13
    let array13 = ["", "", "", ""]
    const drag13 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop13 = (e) => {
        //Para btener el id arrastrado
        if (array13[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array13[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array13[1] != "" && array13[2] != "" && array13[3] != "") {
            if (array13[1] == "tres" && array13[2] == "seis" && array13[3] == "nueve") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )
            }
            else {

                array13 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop13 = (e) => {
        e.preventDefault()
    }
    const Juego13 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >8</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >7</div>

                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >8</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop13} onDrop={drop13}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop13} onDrop={drop13}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop13} onDrop={drop13}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag13}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag13}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag13}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag13}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag13}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag13}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag13}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag13}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag13}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag13}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 14
    let array14 = ["", "", "", ""]
    const drag14 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop14 = (e) => {
        //Para btener el id arrastrado
        if (array14[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array14[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array14[1] != "" && array14[2] != "" && array14[3] != "") {
            if (array14[1] == "uno" && array14[2] == "dos" && array14[3] == "nueve") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )
            }
            else {

                array14 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop14 = (e) => {
        e.preventDefault()
    }
    const Juego14 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >3</div>

                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >4</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop14} onDrop={drop14}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop14} onDrop={drop14}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop14} onDrop={drop14}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag14}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag14}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag14}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag14}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag14}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag14}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag14}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag14}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag14}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag14}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 15
    let array15 = ["", "", "", ""]
    const drag15 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop15 = (e) => {
        //Para btener el id arrastrado
        if (array15[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array15[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array15[1] != "" && array15[2] != "" && array15[3] != "" ) {
            if (array15[1] == "dos" && array15[2] == "ocho" && array15[3] == "nueve" ) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )
            }
            else {

                array15 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta tomando prestado.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop15 = (e) => {
        e.preventDefault()
    }
    const Juego15 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. Nota: Esta resta es tomando prestado.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta">
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >5</div>

                        </div>
                        <div className="drop-resta-1">
                            <div className="box-drop-resta" >-</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >3</div>
                            <div className="box-drop-resta" >6</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-resta">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop15} onDrop={drop15}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop15} onDrop={drop15}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop15} onDrop={drop15}></div>


                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag15}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag15}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag15}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag15}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag15}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag15}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag15}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag15}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag15}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag15}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 16
    let array16 = ["", "", "", "", "", ""]
    const drag16 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop16 = (e) => {
        //Para btener el id arrastrado
        if (array16[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array16[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array16[1] != "" && array16[2] != "" && array16[3] != "" && array16[4] != "" && array16[5] != "") {
            if (array16[1] == "seis" && array16[2] == "tres" && array16[3] == "uno" && array16[4] == "cero" && array16[5] == "dos") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {
 
                array16 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop16 = (e) => {
        e.preventDefault()
    }
    const Juego16 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. </h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >6</div>
                            <div className="box-drop-resta" >8</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >8</div>

                        </div>
                        <div className="drop-resta-3">
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >2</div>

                        </div>
                        <div>
                            <div className="box-drop-resta-s" >-</div>
                        </div>
                        <div className="drop-resta-4">

                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >4</div>

                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-resta" id="4" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-resta" id="5" onDragOver={allowdrop16} onDrop={drop16}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag16}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag16}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag16}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag16}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag16}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag16}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag16}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag16}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag16}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag16}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 17
    let array17 = ["", "", "", "", "", ""]
    const drag17 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop17 = (e) => {
        //Para btener el id arrastrado
        if (array17[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array17[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array17[1] != "" && array17[2] != "" && array17[3] != "" && array17[4] != "" && array17[5] != "") {
            if (array17[1] == "tres" && array17[2] == "cero" && array17[3] == "dos" && array17[4] == "cuatro" && array17[5] == "uno") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array17 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop17 = (e) => {
        e.preventDefault()
    }
    const Juego17 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >8</div>
                            <div className="box-drop-resta" >8</div>
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >6</div>

                        </div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >6</div>
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >3</div>
                            <div className="box-drop-resta" >4</div>


                        </div>
                        <div>
                            <div className="box-drop-resta-s" >-</div>
                        </div>
                        <div className="drop-resta-3">

                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >1</div>


                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-resta" id="4" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-resta" id="5" onDragOver={allowdrop17} onDrop={drop17}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag17}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag17}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag17}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag17}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag17}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag17}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag17}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag17}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag17}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag17}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 18
    let array18 = ["", "", "", "", "", ""]
    const drag18 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop18 = (e) => {
        //Para btener el id arrastrado
        if (array18[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array18[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array18[1] != "" && array18[2] != "" && array18[3] != "" && array18[4] != "" && array18[5] != "") {
            if (array18[1] == "tres" && array18[2] == "uno" && array18[3] == "cinco" && array18[4] == "seis" && array18[5] == "siete") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array18 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop18 = (e) => {
        e.preventDefault()
    }
    const Juego18 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >6</div>
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >8</div>

                        </div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >3</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >1</div>


                        </div>
                        <div>
                            <div className="box-drop-resta-s" >-</div>
                        </div>
                        <div className="drop-resta-2">

                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >0</div>



                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-resta" id="4" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-resta" id="5" onDragOver={allowdrop18} onDrop={drop18}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag18}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag18}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag18}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag18}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag18}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag18}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag18}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag18}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag18}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag18}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 19
    let array19 = ["", "", "", "", "", ""]
    const drag19 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop19 = (e) => {
        //Para btener el id arrastrado
        if (array19[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array19[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array19[1] != "" && array19[2] != "" && array19[3] != "" && array19[4] != "" && array19[5] != "") {
            if (array19[1] == "cinco" && array19[2] == "cuatro" && array19[3] == "siete" && array19[4] == "uno" && array19[5] == "cero") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array19 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop19 = (e) => {
        e.preventDefault()
    }
    const Juego19 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta. </h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >9</div>
                            <div className="box-drop-resta" >8</div>
                            <div className="box-drop-resta" >7</div>
                            <div className="box-drop-resta" >5</div>

                        </div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >4</div>


                        </div>
                        <div>
                            <div className="box-drop-resta-s" >-</div>
                        </div>
                        <div className="drop-resta-2">

                            <div className="box-drop-resta" >2</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >1</div>



                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-resta" id="4" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-resta" id="5" onDragOver={allowdrop19} onDrop={drop19}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag19}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag19}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag19}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag19}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag19}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag19}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag19}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag19}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag19}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag19}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 20
    let array20 = ["", "", "", "", "", ""]
    const drag20 = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const drop20 = (e) => {
        //Para btener el id arrastrado
        if (array20[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array20[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array20[1] != "" && array20[2] != "" && array20[3] != "" && array20[4] != "" && array20[5] != "") {
            if (array20[1] == "cuatro" && array20[2] == "uno" && array20[3] == "tres" && array20[4] == "cero" && array20[5] == "dos") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )
            }
            else {

                array20 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Completa correctamente la siguiente resta.",
                    2,
                    counter

                )



            }
        }
    }
    const allowdrop20 = (e) => {
        e.preventDefault()
    }
    const Juego20 = () => {
        return (
            <div className="Numerospi">
                <h3>Completa correctamente la siguiente resta.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >6</div>
                            <div className="box-drop-resta" >5</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >5</div>

                        </div>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >4</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >2</div>


                        </div>
                        <div>
                            <div className="box-drop-resta-s" >-</div>
                        </div>
                        <div className="drop-resta-2">

                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >1</div>
                            <div className="box-drop-resta" >0</div>
                            <div className="box-drop-resta" >1</div>



                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-resta-2">
                            <div className="box-drop-resta" id="1" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-resta" id="2" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-resta" id="3" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-resta" id="4" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-resta" id="5" onDragOver={allowdrop20} onDrop={drop20}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-resta">
                            <div className="drag-d-resta" draggable="true" id="dos" onDragStart={drag20}>2</div>
                            <div className="drag-d-resta" draggable="true" id="uno" onDragStart={drag20}>1</div>
                            <div className="drag-d-resta" draggable="true" id="tres" onDragStart={drag20}>3</div>
                            <div className="drag-d-resta" draggable="true" id="seis" onDragStart={drag20}>6</div>
                            <div className="drag-d-resta" draggable="true" id="cinco" onDragStart={drag20}>5</div>
                            <div className="drag-d-resta" draggable="true" id="cuatro" onDragStart={drag20}>4</div>
                            <div className="drag-d-resta" draggable="true" id="ocho" onDragStart={drag20}>8</div>
                            <div className="drag-d-resta" draggable="true" id="nueve" onDragStart={drag20}>9</div>
                            <div className="drag-d-resta" draggable="true" id="siete" onDragStart={drag20}>7</div>
                            <div className="drag-d-resta" draggable="true" id="cero" onDragStart={drag20}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    const arrayDato = [
        { image: "/img/practica1.png", pregunta: "Ana y su amiga deben nadar 150 metros, si ya nadaron 40 metros ¿Cuántos metros le faltan?", repuesta: [{ valor: "100", validar: false }, { valor: "110", validar: true }, { valor: "101", validar: false }, { valor: "50", validar: false }, { valor: "75", validar: false }, { valor: "120", validar: false }] },
        { image: "/img/practica2.png", pregunta: "Keila fue a comprar 4 botellas de agua, todas por $60, si paga con un billete de 100 ¿Cuánto le quedará?", repuesta: [{ valor: "$61", validar: false }, { valor: "$60", validar: false }, { valor: "$52", validar: false }, { valor: "$40", validar: true }, { valor: "$29", validar: false }, { valor: "$42", validar: false }] },
        { image: "/img/practica3.png", pregunta: "Carla y su padre han sembrado 60 flores en el jardín, pero se marchitaron 12 flores ¿Cuántas flores quedan?", repuesta: [{ valor: "48 flores", validar: true }, { valor: "49 flores", validar: false }, { valor: "40 flores", validar: false }, { valor: "50 flores", validar: false }, { valor: "12 flores", validar: false }, { valor: "30 flores", validar: false }] },
        { image: "/img/practica4.png", pregunta: "En un pinar habian 5,345 pinos. Un incendio quemó 1,378, ¿Cuántos pinos quedaron?", repuesta: [{ valor: "2,300", validar: false }, { valor: "3,000", validar: false }, { valor: "3,007", validar: false }, { valor: "3,796", validar: false }, { valor: "3,769", validar: false }, { valor: "3,967", validar: true }] },
        { image: "/img/practica5.png", pregunta: "En un camión cisterna hay 9,700 litros de agua. Si hace dos paradas dejando en la primera 1,500 litros y en la segunda 725 litros ¿Cuántos litros de agua le quedan al camión?", repuesta: [{ valor: "475 litros", validar: false }, { valor: "775 litros", validar: false }, { valor: "7,000 litros", validar: false }, { valor: "7,475 litros", validar: true }, { valor: "7,455 litros", validar: false }, { valor: "7,445 litros", validar: false }] },
        { image: "/img/practica1.png", pregunta: " Ana y su amiga deben nadar 850 metros, si ya nadaron 203 metros ¿Cuántos metros le faltan?", repuesta: [{ valor: "764 metros", validar: false }, { valor: "674 metros", validar: false }, { valor: "647 metros", validar: true }, { valor: "70 metros", validar: false }, { valor: "175 metros", validar: false }, { valor: "47 metros", validar: false }] },
        { image: "/img/practica2.png", pregunta: "Keila fue a comprar 4 botellas de agua, todas por $80, si paga con un billete de 200 ¿Cuánto le quedará?", repuesta: [{ valor: "$100", validar: false }, { valor: "$150", validar: false }, { valor: "$125", validar: false }, { valor: "$120", validar: true }, { valor: "$110", validar: false }, { valor: "$105", validar: false }] },
        { image: "/img/practica3.png", pregunta: "Carla y su padre han sembrado 250 flores en el jardín, pero se marchitaron 33 flores ¿Cuántas flores quedan?", repuesta: [{ valor: "239", validar: false }, { valor: "210", validar: false }, { valor: "122", validar: false }, { valor: "217", validar: true }, { valor: "219", validar: false }, { valor: "218", validar: false }] },
        { image: "/img/practica4.png", pregunta: "En un pinar habian 8,500 pinos. Un incendio quemó 1,500, ¿Cuántos pinos quedaron?", repuesta: [{ valor: "3,900", validar: false }, { valor: "7,000", validar: true }, { valor: "7,500", validar: false }, { valor: "6,000", validar: false }, { valor: "5,400", validar: false }, { valor: "8,000", validar: false }] },
        { image: "/img/practica5.png", pregunta: "En un camión cisterna hay 12,120 litros de agua. Si hace dos paradas dejando en la primera 2,340 litros y en la segunda 1,205 litros ¿Cuántos litros de agua le quedan al camión?", repuesta: [{ valor: "8,475 litros", validar: false }, { valor: "3,775 litros", validar: false }, { valor: "7,575 litros", validar: false }, { valor: "8,575 litros", validar: true }, { valor: "6,405 litros", validar: false }, { valor: "7,445 litros", validar: false }] },

    ]
    const Juego21 = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Resuelve problemas a partir de la imagen..",
                    3,
                    counter

                )
            }
            else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Resuelve problemas a partir de la imagen..",
                    3,
                    counter

                )
            }

        }
        return (
            <div className="juego21-resta">
                <div>
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
    return (
        <div>
            <div className="Contador-secuencia">{counter + 1}/30</div>
            {juegoActivo == false ?
                <div>
                    {counter == 0 ?
                        <div>
                            <Juego />
                            {juegoSiguienActivo == true ?
                                <div className="siguiente-espacial"></div>
                                : <span>.</span>}
                        </div>
                        : counter == 1 ?
                            <div>
                                <Juego2 />
                                {juegoSiguienActivo == true ?
                                    <div className="siguiente-espacial"></div>
                                    : <span>.</span>}
                            </div>
                            : counter == 2 ?
                                <div>
                                      <Juego21 data={arrayDato[9]} />
                                    
                                    {juegoSiguienActivo == true ?
                                        <div className="siguiente-espacial"></div>
                                        : <span>.</span>}
                                </div>
                                : counter == 3 ?
                                    <div>
                                        <Juego4 />
                                        {juegoSiguienActivo == true ?
                                            <div className="siguiente-espacial"></div>
                                            : <span>.</span>}
                                    </div>
                                    : counter == 4 ?
                                        <div>
                                            <Juego7 />
                                            {juegoSiguienActivo == true ?
                                                <div className="siguiente-espacial"></div>
                                                : <span>.</span>}
                                        </div>
                                        : counter == 5 ?
                                            <div>
                                                <Juego21 data={arrayDato[7]} />
                                                
                                                {juegoSiguienActivo == true ?
                                                    <div className="siguiente-espacial"></div>
                                                    : <span>.</span>}
                                            </div>
                                            : counter == 6 ?
                                                <div>
                                                    <Juego5 />
                                                    {juegoSiguienActivo == true ?
                                                        <div className="siguiente-espacial"></div>
                                                        : <span>.</span>}
                                                </div>
                                                : counter == 7 ?
                                                    <div>
                                                        <Juego8 />
                                                        {juegoSiguienActivo == true ?
                                                            <div className="siguiente-espacial"></div>
                                                            : <span>.</span>}
                                                    </div>
                                                    : counter == 8 ?
                                                        <div>
                                                            <Juego21 data={arrayDato[5]} />
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
                                                                    <Juego15 />
                                                                    {juegoSiguienActivo == true ?
                                                                        <div className="siguiente-espacial"></div>
                                                                        : <span>.</span>}
                                                                </div>
                                                                : counter == 11 ?
                                                                    <div>
                                                                      <Juego21 data={arrayDato[3]} />
                                                                        {juegoSiguienActivo == true ?
                                                                            <div className="siguiente-espacial"></div>
                                                                            : <span>.</span>}
                                                                    </div>
                                                                    : counter == 12 ?
                                                                        <div>
                                                                            <Juego16 />
                                                                            {juegoSiguienActivo == true ?
                                                                                <div className="siguiente-espacial"></div>
                                                                                : <span>.</span>}
                                                                        </div>
                                                                        : counter == 13 ?
                                                                            <div>
                                                                                <Juego14 />
                                                                                {juegoSiguienActivo == true ?
                                                                                    <div className="siguiente-espacial"></div>
                                                                                    : <span>.</span>}
                                                                            </div>
                                                                            : counter == 14 ?
                                                                                <div>
                                                                                      <Juego21 data={arrayDato[1]} />
                                                                                    {juegoSiguienActivo == true ?
                                                                                        <div className="siguiente-espacial"></div>
                                                                                        : <span>.</span>}
                                                                                </div>
                                                                                : counter == 15 ?
                                                                                    <div>
                                                                                        <Juego13 />
                                                                                        {juegoSiguienActivo == true ?
                                                                                            <div className="siguiente-espacial"></div>
                                                                                            : <span>.</span>}
                                                                                    </div>
                                                                                    : counter == 16 ?
                                                                                        <div>
                                                                                            <Juego17 />
                                                                                            {juegoSiguienActivo == true ?
                                                                                                <div className="siguiente-espacial"></div>
                                                                                                : <span>.</span>}
                                                                                        </div>

                                                                                        : counter == 17 ?
                                                                                            <div>
                                                                                                  <Juego21 data={arrayDato[0]} />
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
                                                                                                        <Juego20 />
                                                                                                        {juegoSiguienActivo == true ?
                                                                                                            <div className="siguiente-espacial"></div>
                                                                                                            : <span>.</span>}
                                                                                                    </div>
                                                                                                    : counter == 20 ?
                                                                                                        <div>
                                                                                                            <Juego18 />
                                                                                                          
                                                                                                            {juegoSiguienActivo == true ?
                                                                                                                <div className="siguiente-espacial"></div>
                                                                                                                : <span>.</span>}
                                                                                                        </div>
                                                                                                        : counter == 21 ?
                                                                                                            <div>
                                                                                                                <Juego11 />
                                                                                                              
                                                                                                                {juegoSiguienActivo == true ?
                                                                                                                    <div className="siguiente-espacial"></div>
                                                                                                                    : <span>.</span>}
                                                                                                            </div>
                                                                                                            : counter == 22 ?
                                                                                                                <div>
                                                                                                                    <Juego21 data={arrayDato[2]} />
                                                                                                                    {juegoSiguienActivo == true ?
                                                                                                                        <div className="siguiente-espacial"></div>
                                                                                                                        : <span>.</span>}
                                                                                                                </div>
                                                                                                                : counter == 23 ?
                                                                                                                    <div>
                                                                                                                           <Juego12 />
                                                                                                                       
                                                                                                                        {juegoSiguienActivo == true ?
                                                                                                                            <div className="siguiente-espacial"></div>
                                                                                                                            : <span>.</span>}
                                                                                                                    </div>
                                                                                                                    : counter == 24 ?
                                                                                                                        <div>
                                                                                                                            <Juego21 data={arrayDato[4]} />
                                                                                                                            {juegoSiguienActivo == true ?
                                                                                                                                <div className="siguiente-espacial"></div>
                                                                                                                                : <span>.</span>}
                                                                                                                        </div>
                                                                                                                        : counter == 25 ?
                                                                                                                            <div>
                                                                                                                                  <Juego9 />
                                                                                                                              
                                                                                                                                {juegoSiguienActivo == true ?
                                                                                                                                    <div className="siguiente-espacial"></div>
                                                                                                                                    : <span>.</span>}
                                                                                                                            </div>
                                                                                                                            : counter == 26 ?
                                                                                                                                <div>
                                                                                                                                    <Juego21 data={arrayDato[6]} />
                                                                                                                                    {juegoSiguienActivo == true ?
                                                                                                                                        <div className="siguiente-espacial"></div>
                                                                                                                                        : <span>.</span>}
                                                                                                                                </div>
                                                                                                                                : counter == 27 ?
                                                                                                                                    <div>
                                                                                                                                        <Juego6 />
                                                                                                                                        {juegoSiguienActivo == true ?
                                                                                                                                            <div className="siguiente-espacial"></div>
                                                                                                                                            : <span>.</span>}
                                                                                                                                    </div>
                                                                                                                                    : counter == 28 ?
                                                                                                                                        <div>
                                                                                                                                            <Juego21 data={arrayDato[8]} />
                                                                                                                                            {juegoSiguienActivo == true ?
                                                                                                                                                <div className="siguiente-espacial"></div>
                                                                                                                                                : <span>.</span>}
                                                                                                                                        </div>
                                                                                                                                        : counter == 29 ?
                                                                                                                                            <div>
                                                                                                                                              <Juego3 />
                                                                                                                                                {juegoSiguienActivo == true ?
                                                                                                                                                    <div className="siguiente-espacial"></div>
                                                                                                                                                    : <span>.</span>}
                                                                                                                                            </div>
                                                                                                                                            : <h1>Fin</h1>
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
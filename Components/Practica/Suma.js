import { useState } from "react"

export default function Suma() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const Tiempo = () => {
        setTimeout(() => { setJuegoActivo(false) }, 2000)
        return (
            <h1>{juegoMensajeActivo}</h1>
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
            if (array[1] == "ocho" && array[2] == "nueve") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop = (e) => {
        e.preventDefault()
    }
    const Juego = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >8</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >1</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag}>0</div>
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
            if (array2[1] == "tres" && array2[2] == "siete") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array2 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop2 = (e) => {
        e.preventDefault()
    }
    const Juego2 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >4</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >3</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop2} onDrop={drop2}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop2} onDrop={drop2}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag2}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag2}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag2}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag2}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag2}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag2}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag2}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag2}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag2}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag2}>0</div>
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
            if (array3[1] == "nueve" && array3[2] == "cuatro") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array3 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop3 = (e) => {
        e.preventDefault()
    }
    const Juego3 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >8</div>
                            <div className="box-drop-suma" >4</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >0</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop3} onDrop={drop3}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop3} onDrop={drop3}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag3}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag3}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag3}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag3}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag3}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag3}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag3}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag3}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag3}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag3}>0</div>
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
            if (array4[1] == "siete" && array4[2] == "ocho") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array4 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop4 = (e) => {
        e.preventDefault()
    }
    const Juego4 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >5</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >3</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop4} onDrop={drop4}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop4} onDrop={drop4}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag4}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag4}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag4}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag4}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag4}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag4}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag4}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag4}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag4}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag4}>0</div>
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
            if (array5[1] == "nueve" && array5[2] == "ocho") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array5 = ["", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop5 = (e) => {
        e.preventDefault()
    }
    const Juego5 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >7</div>
                            <div className="box-drop-suma" >1</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >7</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop5} onDrop={drop5}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop5} onDrop={drop5}></div>
                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag5}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag5}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag5}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag5}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag5}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag5}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag5}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag5}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag5}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag5}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 6
    let array6 = ["", "", "", ""]
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
        if (array6[1] != "" && array6[2] != "" && array6[3] != "") {
            if (array6[1] == "uno" && array6[2] == "cuatro" && array6[3] == "dos") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array6 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop6 = (e) => {
        e.preventDefault()
    }
    const Juego6 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >9</div>
                            <div className="box-drop-suma" >7</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >5</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop6} onDrop={drop6}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop6} onDrop={drop6}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop6} onDrop={drop6}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag6}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag6}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag6}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag6}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag6}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag6}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag6}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag6}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag6}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag6}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 7
    let array7 = ["", "", "", ""]
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
        if (array7[1] != "" && array7[2] != "" && array7[3] != "") {
            if (array7[1] == "uno" && array7[2] == "cero" && array7[3] == "cuatro") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array7 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop7 = (e) => {
        e.preventDefault()
    }
    const Juego7 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >8</div>
                            <div className="box-drop-suma" >7</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >7</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop7} onDrop={drop7}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop7} onDrop={drop7}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop7} onDrop={drop7}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag7}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag7}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag7}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag7}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag7}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag7}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag7}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag7}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag7}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag7}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 8
    let array8 = ["", "", "", ""]
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
        if (array8[1] != "" && array8[2] != "" && array8[3] != "") {
            if (array8[1] == "uno" && array8[2] == "cuatro" && array8[3] == "tres") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array8 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop8 = (e) => {
        e.preventDefault()
    }
    const Juego8 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >4</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >7</div>
                            <div className="box-drop-suma" >9</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop8} onDrop={drop8}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop8} onDrop={drop8}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop8} onDrop={drop8}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag8}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag8}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag8}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag8}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag8}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag8}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag8}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag8}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag8}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag8}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 9
    let array9 = ["", "", "", ""]
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
        if (array9[1] != "" && array9[2] != "" && array9[3] != "") {
            if (array9[1] == "uno" && array9[2] == "dos" && array9[3] == "cero") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array9 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop9 = (e) => {
        e.preventDefault()
    }
    const Juego9 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >7</div>
                            <div className="box-drop-suma" >7</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >3</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop9} onDrop={drop9}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop9} onDrop={drop9}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop9} onDrop={drop9}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag9}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag9}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag9}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag9}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag9}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag9}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag9}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag9}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag9}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag9}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 10
    let array10 = ["", "", "", ""]
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
        if (array10[1] != "" && array10[2] != "" && array10[3] != "") {
            if (array10[1] == "uno" && array10[2] == "ocho" && array10[3] == "cinco") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array10 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop10 = (e) => {
        e.preventDefault()
    }
    const Juego10 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >9</div>
                            <div className="box-drop-suma" >9</div>
                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >8</div>
                            <div className="box-drop-suma" >6</div>
                        </div>
                        <hr className="raya"></hr>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop10} onDrop={drop10}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop10} onDrop={drop10}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop10} onDrop={drop10}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag10}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag10}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag10}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag10}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag10}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag10}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag10}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag10}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag10}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag10}>0</div>
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
            if (array11[1] == "siete" && array11[2] == "uno" && array11[3] == "dos") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array11 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop11 = (e) => {
        e.preventDefault()
    }
    const Juego11 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >4</div>

                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >8</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop11} onDrop={drop11}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop11} onDrop={drop11}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop11} onDrop={drop11}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag11}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag11}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag11}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag11}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag11}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag11}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag11}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag11}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag11}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag11}>0</div>
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
            if (array12[1] == "cuatro" && array12[2] == "cinco" && array12[3] == "ocho") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array12 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop12 = (e) => {
        e.preventDefault()
    }
    const Juego12 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >1</div>

                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >7</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop12} onDrop={drop12}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop12} onDrop={drop12}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop12} onDrop={drop12}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag12}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag12}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag12}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag12}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag12}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag12}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag12}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag12}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag12}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag12}>0</div>
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
            if (array13[1] == "nueve" && array13[2] == "seis" && array13[3] == "siete") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array13 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop13 = (e) => {
        e.preventDefault()
    }
    const Juego13 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >2</div>

                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >5</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop13} onDrop={drop13}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop13} onDrop={drop13}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop13} onDrop={drop13}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag13}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag13}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag13}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag13}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag13}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag13}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag13}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag13}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag13}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag13}>0</div>
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
            if (array14[1] == "siete" && array14[2] == "nueve" && array14[3] == "ocho") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array14 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop14 = (e) => {
        e.preventDefault()
    }
    const Juego14 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >0</div>
                            <div className="box-drop-suma" >0</div>

                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >9</div>
                            <div className="box-drop-suma" >8</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-suma">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop14} onDrop={drop14}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop14} onDrop={drop14}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop14} onDrop={drop14}></div>

                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag14}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag14}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag14}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag14}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag14}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag14}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag14}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag14}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag14}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag14}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
    // numero 15
    let array15 = ["", "", "", "", ""]
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
        if (array15[1] != "" && array15[2] != "" && array15[3] != "" && array15[4] != "") {
            if (array15[1] == "uno" && array15[2] == "tres" && array15[3] == "siete" && array15[4] == "cero") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array15 = ["", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop15 = (e) => {
        e.preventDefault()
    }
    const Juego15 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma">
                            <div className="box-drop-suma" >7</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >8</div>

                        </div>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" >+</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >2</div>

                        </div>
                        <hr className="raya1"></hr>
                        <div className="drop-suma-1">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop15} onDrop={drop15}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop15} onDrop={drop15}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop15} onDrop={drop15}></div>
                            <div className="box-drop-suma" id="4" onDragOver={allowdrop15} onDrop={drop15}></div>


                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag15}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag15}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag15}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag15}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag15}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag15}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag15}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag15}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag15}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag15}>0</div>
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
            if (array16[1] == "uno" && array16[2] == "seis" && array16[3] == "dos" && array16[4] == "cinco" && array16[5] == "nueve") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array16 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop16 = (e) => {
        e.preventDefault()
    }
    const Juego16 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >8</div>
                            <div className="box-drop-suma" >9</div>

                        </div>
                        <div className="drop-suma-3">
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >0</div>

                        </div>
                        <div>
                            <div className="box-drop-suma-s" >+</div>
                        </div>
                        <div className="drop-suma-4">

                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >0</div>

                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-suma" id="4" onDragOver={allowdrop16} onDrop={drop16}></div>
                            <div className="box-drop-suma" id="5" onDragOver={allowdrop16} onDrop={drop16}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag16}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag16}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag16}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag16}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag16}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag16}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag16}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag16}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag16}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag16}>0</div>
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
            if (array17[1] == "uno" && array17[2] == "ocho" && array17[3] == "dos" && array17[4] == "tres" && array17[5] == "seis") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array17 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop17 = (e) => {
        e.preventDefault()
    }
    const Juego17 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >2</div>

                        </div>
                        <div className="drop-suma-3">
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >1</div>

                        </div>
                        <div>
                            <div className="box-drop-suma-s" >+</div>
                        </div>
                        <div className="drop-suma-4">

                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >3</div>

                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-suma" id="4" onDragOver={allowdrop17} onDrop={drop17}></div>
                            <div className="box-drop-suma" id="5" onDragOver={allowdrop17} onDrop={drop17}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag17}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag17}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag17}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag17}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag17}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag17}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag17}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag17}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag17}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag17}>0</div>
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
            if (array18[1] == "seis" && array18[2] == "uno" && array18[3] == "cinco" && array18[4] == "cero" && array18[5] == "tres") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array18 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop18 = (e) => {
        e.preventDefault()
    }
    const Juego18 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >7</div>
                            <div className="box-drop-suma" >0</div>

                        </div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >0</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >0</div>


                        </div>
                        <div>
                            <div className="box-drop-suma-s" >+</div>
                        </div>
                        <div className="drop-suma-2">

                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >7</div>
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >3</div>



                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-suma" id="4" onDragOver={allowdrop18} onDrop={drop18}></div>
                            <div className="box-drop-suma" id="5" onDragOver={allowdrop18} onDrop={drop18}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag18}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag18}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag18}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag18}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag18}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag18}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag18}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag18}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag18}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag18}>0</div>
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
            if (array19[1] == "cinco" && array19[2] == "siete" && array19[3] == "nueve" && array19[4] == "ocho" && array19[5] == "seis") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array19 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop19 = (e) => {
        e.preventDefault()
    }
    const Juego19 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >0</div>
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >2</div>

                        </div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >0</div>
                            <div className="box-drop-suma" >1</div>


                        </div>
                        <div>
                            <div className="box-drop-suma-s" >+</div>
                        </div>
                        <div className="drop-suma-2">

                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >6</div>
                            <div className="box-drop-suma" >3</div>



                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-suma" id="4" onDragOver={allowdrop19} onDrop={drop19}></div>
                            <div className="box-drop-suma" id="5" onDragOver={allowdrop19} onDrop={drop19}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag19}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag19}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag19}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag19}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag19}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag19}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag19}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag19}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag19}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag19}>0</div>
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
            if (array20[1] == "nueve" && array20[2] == "cero" && array20[3] == "cinco" && array20[4] == "tres" && array20[5] == "cuatro") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array20 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const allowdrop20 = (e) => {
        e.preventDefault()
    }
    const Juego20 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente suma. Nota: Esta suma tiene llevadas.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >4</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >1</div>

                        </div>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" >5</div>
                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >0</div>
                            <div className="box-drop-suma" >0</div>


                        </div>
                        <div>
                            <div className="box-drop-suma-s" >+</div>
                        </div>
                        <div className="drop-suma-2">

                            <div className="box-drop-suma" >2</div>
                            <div className="box-drop-suma" >3</div>
                            <div className="box-drop-suma" >0</div>
                            <div className="box-drop-suma" >1</div>
                            <div className="box-drop-suma" >3</div>



                        </div>
                        <hr className="raya2"></hr>
                        <div className="drop-suma-2">
                            <div className="box-drop-suma" id="1" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-suma" id="2" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-suma" id="3" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-suma" id="4" onDragOver={allowdrop20} onDrop={drop20}></div>
                            <div className="box-drop-suma" id="5" onDragOver={allowdrop20} onDrop={drop20}></div>



                        </div>
                    </div>
                    <div>
                        <div className="drag-suma">
                            <div className="drag-d-suma" draggable="true" id="dos" onDragStart={drag20}>2</div>
                            <div className="drag-d-suma" draggable="true" id="uno" onDragStart={drag20}>1</div>
                            <div className="drag-d-suma" draggable="true" id="tres" onDragStart={drag20}>3</div>
                            <div className="drag-d-suma" draggable="true" id="seis" onDragStart={drag20}>6</div>
                            <div className="drag-d-suma" draggable="true" id="cinco" onDragStart={drag20}>5</div>
                            <div className="drag-d-suma" draggable="true" id="cuatro" onDragStart={drag20}>4</div>
                            <div className="drag-d-suma" draggable="true" id="ocho" onDragStart={drag20}>8</div>
                            <div className="drag-d-suma" draggable="true" id="nueve" onDragStart={drag20}>9</div>
                            <div className="drag-d-suma" draggable="true" id="siete" onDragStart={drag20}>7</div>
                            <div className="drag-d-suma" draggable="true" id="cero" onDragStart={drag20}>0</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

    return (
        <div>
            {juegoActivo == false ?
                <div>
                    {counter == 0 ?
                        <div>
                            <Juego />
                            {juegoSiguienActivo == true ?
                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                : <span>.</span>}
                        </div>
                        : counter == 1 ?
                            <div>
                                <Juego2 />
                                {juegoSiguienActivo == true ?
                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                    : <span>.</span>}
                            </div>
                            : counter == 2 ?
                                <div>
                                    <Juego3 />
                                    {juegoSiguienActivo == true ?
                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                        : <span>.</span>}
                                </div>
                                : counter == 3 ?
                                    <div>
                                        <Juego4 />
                                        {juegoSiguienActivo == true ?
                                            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                            : <span>.</span>}
                                    </div>
                                    : counter == 4 ?
                                        <div>
                                            <Juego5 />
                                            {juegoSiguienActivo == true ?
                                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                : <span>.</span>}
                                        </div>
                                        : counter == 5 ?
                                            <div>
                                                <Juego6 />
                                                {juegoSiguienActivo == true ?
                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                    : <span>.</span>}
                                            </div>
                                            : counter == 6 ?
                                                <div>
                                                    <Juego7 />
                                                    {juegoSiguienActivo == true ?
                                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                        : <span>.</span>}
                                                </div>
                                                : counter == 7 ?
                                                    <div>
                                                        <Juego8 />
                                                        {juegoSiguienActivo == true ?
                                                            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                            : <span>.</span>}
                                                    </div>
                                                    : counter == 8 ?
                                                        <div>
                                                            <Juego9 />
                                                            {juegoSiguienActivo == true ?
                                                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                : <span>.</span>}
                                                        </div>
                                                        : counter == 9 ?
                                                            <div>
                                                                <Juego10 />
                                                                {juegoSiguienActivo == true ?
                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                    : <span>.</span>}
                                                            </div>
                                                            : counter == 10 ?
                                                                <div>
                                                                    <Juego11 />
                                                                    {juegoSiguienActivo == true ?
                                                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                        : <span>.</span>}
                                                                </div>
                                                                : counter == 11 ?
                                                                    <div>
                                                                        <Juego12 />
                                                                        {juegoSiguienActivo == true ?
                                                                            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                            : <span>.</span>}
                                                                    </div>
                                                                    : counter == 12 ?
                                                                        <div>
                                                                            <Juego13 />
                                                                            {juegoSiguienActivo == true ?
                                                                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                : <span>.</span>}
                                                                        </div>
                                                                        : counter == 13 ?
                                                                            <div>
                                                                                <Juego14 />
                                                                                {juegoSiguienActivo == true ?
                                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                    : <span>.</span>}
                                                                            </div>
                                                                            : counter == 14 ?
                                                                                <div>
                                                                                    <Juego15 />
                                                                                    {juegoSiguienActivo == true ?
                                                                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                        : <span>.</span>}
                                                                                </div>
                                                                                : counter == 15 ?
                                                                                    <div>
                                                                                        <Juego16 />
                                                                                        {juegoSiguienActivo == true ?
                                                                                            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                            : <span>.</span>}
                                                                                    </div>
                                                                                    : counter == 16 ?
                                                                                        <div>
                                                                                            <Juego17 />
                                                                                            {juegoSiguienActivo == true ?
                                                                                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                : <span>.</span>}
                                                                                        </div>

                                                                                        : counter == 17 ?
                                                                                            <div>
                                                                                                <Juego18 />
                                                                                                {juegoSiguienActivo == true ?
                                                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                    : <span>.</span>}
                                                                                            </div>
                                                                                            : counter == 18 ?
                                                                                                <div>
                                                                                                    <Juego19 />
                                                                                                    {juegoSiguienActivo == true ?
                                                                                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                        : <span>.</span>}
                                                                                                </div>
                                                                                                : counter == 19 ?
                                                                                                    <div>
                                                                                                        <Juego20 />
                                                                                                        {juegoSiguienActivo == true ?
                                                                                                            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                            : <span>.</span>}
                                                                                                    </div>
                                                                                                    : <h1>Cargando...</h1>
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
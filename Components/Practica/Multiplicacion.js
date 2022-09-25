import { useState } from "react"

export default function Mulpiplicacion() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
    const numeros = () => {
        return (
            <div className="drag-mult">
                <div className="drag-d-mult" draggable="true" id="dos" onDragStart={drag}>2</div>
                <div className="drag-d-mult" draggable="true" id="uno" onDragStart={drag}>1</div>
                <div className="drag-d-mult" draggable="true" id="tres" onDragStart={drag}>3</div>
                <div className="drag-d-mult" draggable="true" id="seis" onDragStart={drag}>6</div>
                <div className="drag-d-mult" draggable="true" id="cinco" onDragStart={drag}>5</div>
                <div className="drag-d-mult" draggable="true" id="cuatro" onDragStart={drag}>4</div>
                <div className="drag-d-mult" draggable="true" id="ocho" onDragStart={drag}>8</div>
                <div className="drag-d-mult" draggable="true" id="nueve" onDragStart={drag}>9</div>
                <div className="drag-d-mult" draggable="true" id="siete" onDragStart={drag}>7</div>
                <div className="drag-d-mult" draggable="true" id="cero" onDragStart={drag}>0</div>
            </div>
        )
    }
    const numeros2 = () => {
        return (
            <div className="drag-mult-1">
                <div className="drag-d-mult" draggable="true" id="dos" onDragStart={drag}>2</div>
                <div className="drag-d-mult" draggable="true" id="ocho2" onDragStart={drag}>8</div>
                <div className="drag-d-mult" draggable="true" id="seis3" onDragStart={drag}>6</div>
                <div className="drag-d-mult" draggable="true" id="ocho3" onDragStart={drag}>8</div>
                <div className="drag-d-mult" draggable="true" id="dos2" onDragStart={drag}>2</div>
                <div className="drag-d-mult" draggable="true" id="uno" onDragStart={drag}>1</div>
                <div className="drag-d-mult" draggable="true" id="cinco4" onDragStart={drag}>5</div>
                <div className="drag-d-mult" draggable="true" id="tres2" onDragStart={drag}>3</div>
                <div className="drag-d-mult" draggable="true" id="uno2" onDragStart={drag}>1</div>
                <div className="drag-d-mult" draggable="true" id="tres" onDragStart={drag}>3</div>
                <div className="drag-d-mult" draggable="true" id="seis" onDragStart={drag}>6</div>
                <div className="drag-d-mult" draggable="true" id="cinco5" onDragStart={drag}>5</div>
                <div className="drag-d-mult" draggable="true" id="seis2" onDragStart={drag}>6</div>
                <div className="drag-d-mult" draggable="true" id="cinco" onDragStart={drag}>5</div>
                <div className="drag-d-mult" draggable="true" id="cero3" onDragStart={drag}>0</div>
                <div className="drag-d-mult" draggable="true" id="uno3" onDragStart={drag}>1</div>
                <div className="drag-d-mult" draggable="true" id="nueve2" onDragStart={drag}>9</div>
                <div className="drag-d-mult" draggable="true" id="uno4" onDragStart={drag}>1</div>
                <div className="drag-d-mult" draggable="true" id="cero4" onDragStart={drag}>0</div>
                <div className="drag-d-mult" draggable="true" id="cinco2" onDragStart={drag}>5</div>
                <div className="drag-d-mult" draggable="true" id="cuatro" onDragStart={drag}>4</div>
                <div className="drag-d-mult" draggable="true" id="siete2" onDragStart={drag}>7</div>
                <div className="drag-d-mult" draggable="true" id="cuatro2" onDragStart={drag}>4</div>
                <div className="drag-d-mult" draggable="true" id="ocho" onDragStart={drag}>8</div>
                <div className="drag-d-mult" draggable="true" id="nueve" onDragStart={drag}>9</div>
                <div className="drag-d-mult" draggable="true" id="siete" onDragStart={drag}>7</div>
                <div className="drag-d-mult" draggable="true" id="cero" onDragStart={drag}>0</div>
                <div className="drag-d-mult" draggable="true" id="cero2" onDragStart={drag}>0</div>
                <div className="drag-d-mult" draggable="true" id="cinco3" onDragStart={drag}>5</div>



            </div>
        )
    }
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const Tiempo = () => {
        setTimeout(() => { setJuegoActivo(false) }, 2000)
        return (
            <h1>{juegoMensajeActivo}</h1>
        )
    }
    const allowdrop = (e) => {
        e.preventDefault()
    }
    const drag = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    // numero 1
    let array = ["", "", "", "", "", ""]
    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "") {
            if (array[1] == "6x5" && array[2] == "6x9" && array[3] == "8x3" && array[4] == "2x8" && array[5] == "5x4") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const Juego = () => {
        return (
            <div>
                <h3>Relaciona las siguientes operaciones y sus resultados.</h3>
                <div className="grid-multiplicacion">
                    <div>
                        <div className="drag-multiplicacion">
                            <div className="drag-d-multiplicacion" draggable="true" id="8x3" onDragStart={drag}>8 x 3</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="6x5" onDragStart={drag}>6 x 5</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="5x4" onDragStart={drag}>5 x 4</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="6x9" onDragStart={drag}>6 x 9</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="2x8" onDragStart={drag}>2 x 8</div>

                        </div>
                    </div>
                    <div>
                        <div className="drop-multiplicacion ">
                            <div className="box-drop-multiplicacion" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="box-drop-multiplicacion" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="box-drop-multiplicacion" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="box-drop-multiplicacion" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="box-drop-multiplicacion" id="5" onDragOver={allowdrop} onDrop={drop}></div>
                        </div>
                    </div>
                    <div >

                        <div className="drop-multiplicacion">
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                        </div>
                    </div>
                    <div>
                        <div className="drop-multiplicacion">
                            <div className="box-drop-multiplicacion" >30</div>
                            <div className="box-drop-multiplicacion" >54</div>
                            <div className="box-drop-multiplicacion" >24</div>
                            <div className="box-drop-multiplicacion" >16</div>
                            <div className="box-drop-multiplicacion" >20</div>


                        </div>


                    </div>

                </div>
            </div>

        )

    }

    // Numero 2
    let array2 = ["", "", "", "", "", ""]
    const drop2 = (e) => {
        //Para btener el id arrastrado
        if (array2[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array2[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array2[1] != "" && array2[2] != "" && array2[3] != "" && array2[4] != "" && array2[5] != "") {
            if (array2[1] == "3x0" && array2[2] == "4x3" && array2[3] == "2x7" && array2[4] == "5x8" && array2[5] == "1x6") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array2 = ["", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const Juego2 = () => {
        return (
            <div>
                <h3>Relaciona las siguientes operaciones y sus resultados.</h3>
                <div className="grid-multiplicacion">
                    <div>
                        <div className="drag-multiplicacion">
                            <div className="drag-d-multiplicacion" draggable="true" id="4x3" onDragStart={drag}>4 x 3</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="5x8" onDragStart={drag}>5 x 8</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="2x7" onDragStart={drag}>2 x 7</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="1x6" onDragStart={drag}>1 x 6</div>
                            <div className="drag-d-multiplicacion" draggable="true" id="3x0" onDragStart={drag}>3 x 0</div>

                        </div>
                    </div>
                    <div>
                        <div className="drop-multiplicacion ">
                            <div className="box-drop-multiplicacion" id="1" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="box-drop-multiplicacion" id="2" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="box-drop-multiplicacion" id="3" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="box-drop-multiplicacion" id="4" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="box-drop-multiplicacion" id="5" onDragOver={allowdrop} onDrop={drop2}></div>
                        </div>
                    </div>
                    <div >

                        <div className="drop-multiplicacion">
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                            <div className="box-drop-multiplicacion" >=</div>
                        </div>
                    </div>
                    <div>
                        <div className="drop-multiplicacion">
                            <div className="box-drop-multiplicacion" >0</div>
                            <div className="box-drop-multiplicacion" >12</div>
                            <div className="box-drop-multiplicacion" >14</div>
                            <div className="box-drop-multiplicacion" >40</div>
                            <div className="box-drop-multiplicacion" >6</div>


                        </div>


                    </div>

                </div>
            </div>

        )

    }

    //Numero 3
    let array3 = ["", "", ""]
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
            if (array3[1] == "tres" && array3[2] == "cero") {

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
    const Juego3 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >1</div>
                            <div className="box-drop-mult" >5</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult-1">

                            <div className="box-drop-mult" >2</div>

                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop3}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop3}></div>
                        </div>
                    </div>
                    <div>
                        {numeros()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 4
    let array4 = ["", "", ""]
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
            if (array4[1] == "seis" && array4[2] == "cinco") {

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
    const Juego4 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >1</div>
                            <div className="box-drop-mult" >3</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult-1">

                            <div className="box-drop-mult" >5</div>

                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop4}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop4}></div>
                        </div>
                    </div>
                    <div>
                        {numeros()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 5
    let array5 = ["", "", "", ""]
    const drop5 = (e) => {
        //Para btener el id arrastrado
        if (array5[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array5[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array5[1] != "" && array5[2] != "" && array5[3] != "") {
            if (array5[1] == "dos" && array5[2] == "seis" && array5[3] == "cero") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array5 = ["", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego5 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >6</div>
                            <div className="box-drop-mult" >5</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult-1">

                            <div className="box-drop-mult" >4</div>

                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-11">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop5}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop5}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop5}></div>

                        </div>
                    </div>
                    <div>
                        {numeros()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 6
    let array6 = ["", "", "", ""]
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
            if (array6[1] == "dos" && array6[2] == "cuatro" && array6[3] == "cero") {

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
    const Juego6 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >4</div>
                            <div className="box-drop-mult" >0</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult-1">

                            <div className="box-drop-mult" >6</div>

                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-11">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop6}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop6}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop6}></div>

                        </div>
                    </div>
                    <div>
                        {numeros()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 7
    let array7 = ["", "", "", ""]
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
            if (array7[1] == "uno" && array7[2] == "dos" && array7[3] == "cuatro") {

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
    const Juego7 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >3</div>
                            <div className="box-drop-mult" >1</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult-1">

                            <div className="box-drop-mult" >4</div>

                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-11">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop7}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop7}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop7}></div>

                        </div>
                    </div>
                    <div>
                        {numeros()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 8
    let array8 = ["", "", "", "", "", "", "", ""]
    const drop8 = (e) => {
        //Para btener el id arrastrado
        if (array8[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array8[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array8[1] != "" && array8[2] != "" && array8[3] != "" && array8[4] != "" && array8[5] != "" && array8[6] != "" && array8[7] != "") {
            if ((array8[1] == "cuatro" || array8[1] == "cuatro2") && (array8[2] == "cero" || array8[2] == "cero2" || array8[2] == "cero3" || array8[2] == "cero4") && (array8[3] == "ocho" || array8[3] == "ocho2" || array8[3] == "ocho3") && (array8[4] == "cero" || array8[4] == "cero2" || array8[4] == "cero3" || array8[4] == "cero4") && (array8[5] == "ocho" || array8[5] == "ocho2" || array8[5] == "ocho3") && (array8[6] == "cuatro" || array8[6] == "cuatro2") && (array8[7] == "cero" || array8[7] == "cero2" || array8[7] == "cero3" || array8[7] == "cero4")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array8 = ["", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego8 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >4</div>
                            <div className="box-drop-mult" >0</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >2</div>
                            <div className="box-drop-mult" >1</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop8}></div>

                        </div>
                        <div className="drop-mult-f2">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop8}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f1">
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop8}></div>



                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 9
    let array9 = ["", "", "", "", "", "", "", ""]
    const drop9 = (e) => {
        //Para btener el id arrastrado
        if (array9[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array9[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array9[1] != "" && array9[2] != "" && array9[3] != "" && array9[4] != "" && array9[5] != "" && array9[6] != "" && array9[7] != "") {
            if ((array9[1] == "cero" || array9[1] == "cero2" || array9[1] == "cero3" || array9[1] == "cero4") && (array9[2] == "cero" || array9[2] == "cero2" || array9[2] == "cero3" || array9[2] == "cero4") && (array9[3] == "cuatro" || array9[3] == "cuatro2") && (array9[4] == "seis" || array9[4] == "seis2" || array9[4] == "seis3") && (array9[5] == "cuatro" || array9[5] == "cuatro2") && (array9[6] == "seis" || array9[6] == "seis2" || array9[6] == "seis3") && (array9[7] == "cero" || array9[7] == "cero2" || array9[7] == "cero3" || array9[7] == "cero4")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array9 = ["", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego9 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >4</div>
                            <div className="box-drop-mult" >6</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >1</div>
                            <div className="box-drop-mult" >0</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop9}></div>

                        </div>
                        <div className="drop-mult-f2">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop9}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f1">
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop9}></div>



                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 10
    let array10 = ["", "", "", "", "", "", "", "", ""]
    const drop10 = (e) => {
        //Para btener el id arrastrado
        if (array10[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array10[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array10[1] != "" && array10[2] != "" && array10[3] != "" && array10[4] != "" && array10[5] != "" && array10[6] != "" && array10[7] != "" && array10[8] != "") {
            if ((array10[1] == "uno" || array10[1] == "uno2" || array10[1] == "uno3" || array10[1] == "uno4") && (array10[2] == "ocho" || array10[2] == "ocho2" || array10[2] == "ocho3") && (array10[3] == "seis" || array10[3] == "seis2" || array10[3] == "seis3") && (array10[4] == "seis" || array10[4] == "seis2" || array10[4] == "seis3") && (array10[5] == "dos" || array10[5] == "dos2") && (array10[6] == "ocho" || array10[6] == "ocho2" || array10[6] == "ocho3") && (array10[7] == "cero" || array10[7] == "cero2" || array10[7] == "cero3" || array10[7] == "cero4") && (array10[8] == "seis" || array10[8] == "seis2" || array10[8] == "seis3")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array10 = ["", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego10 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >6</div>
                            <div className="box-drop-mult" >2</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >1</div>
                            <div className="box-drop-mult" >3</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-f1">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop10}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop10}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop10}></div>

                        </div>
                        <div className="drop-mult-f2">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop10}></div>
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop10}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f1">
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop10}></div>
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop10}></div>
                            <div className="box-drop-mult" id="8" onDragOver={allowdrop} onDrop={drop10}></div>



                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 11
    let array11 = ["", "", "", "", "", "", "", "", "", ""]
    const drop11 = (e) => {
        //Para btener el id arrastrado
        if (array11[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array11[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array11[1] != "" && array11[2] != "" && array11[3] != "" && array11[4] != "" && array11[5] != "" && array11[6] != "" && array11[7] != "" && array11[8] != "" && array11[9] != "") {
            if ((array11[1] == "cero" || array11[1] == "cero2" || array11[1] == "cero3" || array11[1] == "cero4") && (array11[2] == "cero" || array11[2] == "cero2" || array11[2] == "cero3" || array11[2] == "cero4") && (array11[3] == "uno" || array11[3] == "uno2" || array11[3] == "uno3" || array11[3] == "uno4") && (array11[4] == "uno" || array11[4] == "uno2" || array11[4] == "uno3" || array11[4] == "uno4") && (array11[5] == "cuatro" || array11[5] == "cuatro2") && (array11[6] == "uno" || array11[6] == "uno2" || array11[6] == "uno3" || array11[6] == "uno4") && (array11[7] == "uno" || array11[7] == "uno2" || array11[7] == "uno3" || array11[7] == "uno4") && (array11[8] == "cuatro" || array11[8] == "cuatro2") && array11[9] == "cero" || array11[9] == "cero2" || array11[9] == "cero3" || array11[9] == "cero4") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array11 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego11 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-mu">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >3</div>
                            <div className="box-drop-mult" >8</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >3</div>
                            <div className="box-drop-mult" >0</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop11}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop11}></div>

                        </div>
                        <div className="drop-mult-f12">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop11}></div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop11}></div>
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop11}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop11}></div>
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop11}></div>
                            <div className="box-drop-mult" id="8" onDragOver={allowdrop} onDrop={drop11}></div>
                            <div className="box-drop-mult" id="9" onDragOver={allowdrop} onDrop={drop11}></div>




                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 12
    let array12 = ["", "", "", "", "", "", "", "", "", "", ""]
    const drop12 = (e) => {
        //Para btener el id arrastrado
        if (array12[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array12[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array12[1] != "" && array12[2] != "" && array12[3] != "" && array12[4] != "" && array12[5] != "" && array12[6] != "" && array12[7] != "" && array12[8] != "" && array12[9] != "" && array12[10] != "") {
            if ((array12[1] == "uno" || array12[1] == "uno2" || array12[1] == "uno3" || array12[1] == "uno4") && (array12[2] == "cuatro" || array12[2] == "cuatro2") && (array12[3] == "ocho" || array12[3] == "ocho2" || array12[3] == "ocho3") && (array12[4] == "uno" || array12[4] == "uno2" || array12[4] == "uno3" || array12[4] == "uno4") && (array12[5] == "cuatro" || array12[5] == "cuatro2") && (array12[6] == "ocho" || array12[6] == "ocho2" || array12[6] == "ocho3") && (array12[7] == "uno" || array12[7] == "uno2" || array12[7] == "uno3" || array12[7] == "uno4") && (array12[8] == "seis" || array12[8] == "seis2" || array12[8] == "seis3") && (array12[9] == "dos" || array12[9] == "dos2") && (array12[10] == "ocho" || array12[10] == "ocho2" || array12[10] == "ocho3")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array12 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego12 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-mu">
                    <div>
                        <div className="drop-mult">
                            <div className="box-drop-mult" >7</div>
                            <div className="box-drop-mult" >4</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >2</div>
                            <div className="box-drop-mult" >2</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-f111">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop12}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop12}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop12}></div>

                        </div>
                        <div className="drop-mult-f12">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop12}></div>
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop12}></div>
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop12}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop12}></div>
                            <div className="box-drop-mult" id="8" onDragOver={allowdrop} onDrop={drop12}></div>
                            <div className="box-drop-mult" id="9" onDragOver={allowdrop} onDrop={drop12}></div>
                            <div className="box-drop-mult" id="10" onDragOver={allowdrop} onDrop={drop12}></div>




                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 13
    let array13 = ["", "", "", "", "", "", "", "", "", "", ""]
    const drop13 = (e) => {
        //Para btener el id arrastrado
        if (array13[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array13[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array13[1] != "" && array13[2] != "" && array13[3] != "" && array13[4] != "" && array13[5] != "" && array13[6] != "" && array13[7] != "" && array13[8] != "" && array13[9] != "" && array13[10] != "") {
            if ((array13[1] == "cero" || array13[1] == "cero2" || array13[1] == "cero3" || array13[1] == "cero4") && (array13[2] == "cero" || array13[2] == "cero2" || array13[2] == "cero3" || array13[2] == "cero4") && (array13[3] == "cero" || array13[3] == "cero2" || array13[3] == "cero3" || array13[3] == "cero4") && (array13[4] == "ocho" || array13[4] == "ocho2" || array13[4] == "ocho3") && (array13[5] == "cuatro" || array13[5] == "cuatro2") && (array13[6] == "dos" || array13[6] == "dos2") && (array13[7] == "ocho" || array13[7] == "ocho2" || array13[7] == "ocho3") && (array13[8] == "cuatro" || array13[8] == "cuatro2") && (array13[9] == "dos" || array13[9] == "dos2") && (array13[10] == "cero" || array13[10] == "cero2" || array13[10] == "cero3" || array13[10] == "cero4")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array13 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego13 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-mu">
                    <div>
                        <div className="drop-mult-f111">
                            <div className="box-drop-mult" >4</div>
                            <div className="box-drop-mult" >2</div>
                            <div className="box-drop-mult" >1</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >2</div>
                            <div className="box-drop-mult" >0</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-f111">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop13}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop13}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop13}></div>

                        </div>
                        <div className="drop-mult-f12">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop13}></div>
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop13}></div>
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop13}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop13}></div>
                            <div className="box-drop-mult" id="8" onDragOver={allowdrop} onDrop={drop13}></div>
                            <div className="box-drop-mult" id="9" onDragOver={allowdrop} onDrop={drop13}></div>
                            <div className="box-drop-mult" id="10" onDragOver={allowdrop} onDrop={drop13}></div>




                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 14
    let array14 = ["", "", "", "", "", "", "", "", "", "", ""]
    const drop14 = (e) => {
        //Para btener el id arrastrado
        if (array14[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array14[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array14[1] != "" && array14[2] != "" && array14[3] != "" && array14[4] != "" && array14[5] != "" && array14[6] != "" && array14[7] != "" && array14[8] != "" && array14[9] != "" && array14[10] != "") {
            if ((array14[1] == "cinco" || array14[1] == "cinco2" || array14[1] == "cinco3" || array14[1] == "cinco4" || array14[1] == "cinco5") && (array14[2] == "cinco" || array14[2] == "cinco2" || array14[2] == "cinco3" || array14[2] == "cinco4" || array14[2] == "cinco5") && (array14[3] == "cero" || array14[3] == "cero2" || array14[3] == "cero3" || array14[3] == "cero4") && (array14[4] == "cinco" || array14[4] == "cinco2" || array14[4] == "cinco3" || array14[4] == "cinco4" || array14[4] == "cinco5") && (array14[5] == "cinco" || array14[5] == "cinco2" || array14[5] == "cinco3" || array14[5] == "cinco4" || array14[5] == "cinco5") && (array14[6] == "cero" || array14[6] == "cero2" || array14[6] == "cero3" || array14[6] == "cero4") && (array14[7] == "seis" || array14[7] == "seis2" || array14[7] == "seis3") && (array14[8] == "cero" || array14[8] == "cero2" || array14[8] == "cero3" || array14[8] == "cero4") && (array14[9] == "cinco" || array14[9] == "cinco2" || array14[9] == "cinco3" || array14[9] == "cinco4" || array14[9] == "cinco5") && (array14[10] == "cero" || array14[10] == "cero2" || array14[10] == "cero3" || array14[10] == "cero4")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array14 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego14 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-mu">
                    <div>
                        <div className="drop-mult-f111">
                            <div className="box-drop-mult" >5</div>
                            <div className="box-drop-mult" >5</div>
                            <div className="box-drop-mult" >0</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >1</div>
                            <div className="box-drop-mult" >1</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-f111">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop14}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop14}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop14}></div>

                        </div>
                        <div className="drop-mult-f12">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop14}></div>
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop14}></div>
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop14}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop14}></div>
                            <div className="box-drop-mult" id="8" onDragOver={allowdrop} onDrop={drop14}></div>
                            <div className="box-drop-mult" id="9" onDragOver={allowdrop} onDrop={drop14}></div>
                            <div className="box-drop-mult" id="10" onDragOver={allowdrop} onDrop={drop14}></div>




                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 15
    let array15 = ["", "", "", "", "", "", "", "", "", "", "", ""]
    const drop15 = (e) => {
        //Para btener el id arrastrado
        if (array15[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array15[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array15[1] != "" && array15[2] != "" && array15[3] != "" && array15[4] != "" && array15[5] != "" && array15[6] != "" && array15[7] != "" && array15[8] != "" && array15[9] != "" && array15[10] != "" && array15[11] != "") {
            if ((array15[1] == "dos" || array15[1] == "dos2") && (array15[2] == "ocho" || array15[2] == "ocho2" || array15[2] == "ocho3") && (array15[3] == "ocho" || array15[3] == "ocho2" || array15[3] == "ocho3") && (array15[4] == "seis" || array15[4] == "seis2" || array15[4] == "seis3") && (array15[5] == "cuatro" || array15[5] == "cuatro2") && (array15[6] == "ocho" || array15[6] == "ocho2" || array15[6] == "ocho3") && (array15[7] == "uno" || array15[7] == "uno2" || array15[7] == "uno3" || array15[7] == "uno4") && (array15[8] == "siete" || array15[8] == "siete2") && (array15[9] == "seis" || array15[9] == "seis2" || array15[9] == "seis3") && (array15[10] == "nueve" || array15[10] == "nueve2") && (array15[11] == "seis" || array15[11] == "seis2" || array15[11] == "seis3")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array15 = ["", "", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego15 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-mu">
                    <div>
                        <div className="drop-mult-f111">
                            <div className="box-drop-mult" >4</div>
                            <div className="box-drop-mult" >8</div>
                            <div className="box-drop-mult" >1</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >1</div>
                            <div className="box-drop-mult" >6</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop15}></div>

                        </div>
                        <div className="drop-mult-f12">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop15}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="8" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="9" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="10" onDragOver={allowdrop} onDrop={drop15}></div>
                            <div className="box-drop-mult" id="11" onDragOver={allowdrop} onDrop={drop15}></div>




                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )

    }

    //Numero 16
    let array16 = ["", "", "", "", "", "", "", "", "", "", "", ""]
    const drop16 = (e) => {
        //Para btener el id arrastrado
        if (array16[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array16[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array16[1] != "" && array16[2] != "" && array16[3] != "" && array16[4] != "" && array16[5] != "" && array16[6] != "" && array16[7] != "" && array16[8] != "" && array16[9] != "" && array16[10] != "" && array16[11] != "") {
            if ((array16[1] == "uno" || array16[1] == "uno2" || array16[1] == "uno3" || array16[1] == "uno4") && (array16[2] == "ocho" || array16[2] == "ocho2" || array16[2] == "ocho3") && (array16[3] == "dos" || array16[3] == "dos2") && (array16[4] == "cinco" || array16[4] == "cinco2" || array16[4] == "cinco3" || array16[4] == "cinco4" || array16[4] == "cinco5") && (array16[5] == "siete" || array16[5] == "siete2") && (array16[6] == "tres" || array16[6] == "tres2") && (array16[7] == "cero" || array16[7] == "cero2" || array16[7] == "cero3" || array16[7] == "cero4") && (array16[8] == "nueve" || array16[8] == "nueve2") && (array16[9] == "uno" || array16[9] == "uno2" || array16[9] == "uno3" || array16[9] == "uno4") && (array16[10] == "dos" || array16[10] == "dos2") && (array16[11] == "cinco" || array16[11] == "cinco2" || array16[11] == "cinco3" || array16[11] == "cinco4" || array16[11] == "cinco5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array16 = ["", "", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            }
        }
    }
    const Juego16 = () => {
        return (
            <div>
                <h3>Completa correctamente la siguiente multiplicación.</h3>
                <div className="grid-mu">
                    <div>
                        <div className="drop-mult-f111">
                            <div className="box-drop-mult" >3</div>
                            <div className="box-drop-mult" >6</div>
                            <div className="box-drop-mult" >5</div>
                        </div>
                        <div>
                            <div className="box-drop-mult-s" >x</div>
                        </div>
                        <div className="drop-mult">

                            <div className="box-drop-mult" >2</div>
                            <div className="box-drop-mult" >5</div>


                        </div>
                        <hr className="raya-mult"></hr>
                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="1" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="2" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="3" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="4" onDragOver={allowdrop} onDrop={drop16}></div>

                        </div>
                        <div className="drop-mult-f12">
                            <div className="box-drop-mult az">+</div>
                            <div className="box-drop-mult" id="5" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="6" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="7" onDragOver={allowdrop} onDrop={drop16}></div>

                        </div>
                        <hr className="raya-mult"></hr>

                        <div className="drop-mult-f112">
                            <div className="box-drop-mult" id="8" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="9" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="10" onDragOver={allowdrop} onDrop={drop16}></div>
                            <div className="box-drop-mult" id="11" onDragOver={allowdrop} onDrop={drop16}></div>




                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )
    }

    //Numero 17 - 25

    const arrayDato = [
        { image: "/img/problema1.png", pregunta: "Carlitos vende naranjas y manzanas todas las mañanas, María ha ido a comprar 20 naranjas, si cada naranja cuesta $8 pesos ¿Cuánto debe pagar María?", repuesta: [{ valor: "$28", validar: false }, { valor: "$160", validar: true }, { valor: "$16", validar: false }, { valor: "$12", validar: false }, { valor: "$70", validar: false }, { valor: "$120", validar: false }] },
        { image: "/img/problema2.png", pregunta: "A Pedro le toca sacar la basura los lunes y jueves; su papá le da $5.00 cada vez que lo hace. Si Pedro ahorra lo que le dan, ¿cuánto juntará al paso de 5 semanas?", repuesta: [{ valor: "$25", validar: false }, { valor: "$60", validar: false }, { valor: "$10", validar: false }, { valor: "$50", validar: true }, { valor: "$40", validar: false }, { valor: "$15", validar: false }] },
        { image: "/img/problema3.png", pregunta: "Miguel gasta $20 todos los días en el autobús que lo lleva a la escuela y lo trae a la casa, ¿Cuánto gasta a la semana?, Recuerda que se va a la escuela sólo de lunes a viernes.", repuesta: [{ valor: "$100", validar: true }, { valor: "$25", validar: false }, { valor: "$40", validar: false }, { valor: "$90", validar: false }, { valor: "$120", validar: false }, { valor: "$30", validar: false }] },
        { image: "/img/problema4.png", pregunta: "Don Pedrito lleva en su camión 250 cajas con 12 piñas cada una. ¿Cuántas piñas llevará en total?", repuesta: [{ valor: "2,300", validar: false }, { valor: "3,000", validar: true }, { valor: "262", validar: false }, { valor: "3,796", validar: false }, { valor: "3,769", validar: false }, { valor: "3,967", validar: false }] },
        { image: "/img/problema5.png", pregunta: "En un cine hay 25 filas cada fila con 12 asientos, ¿Cuántos asientos en total hay en el cine?", repuesta: [{ valor: "37", validar: false }, { valor: "125", validar: false }, { valor: "200", validar: false }, { valor: "300", validar: true }, { valor: "325", validar: false }, { valor: "400", validar: false }] },
        { image: "/img/problema1.png", pregunta: "Carlitos vende naranjas y manzanas todas las mañanas, Juana ha ido a comprar 60 naranjas, si cada naranja cuesta $5 pesos ¿Cuánto debe pagar María?", repuesta: [{ valor: "$280", validar: false }, { valor: "$300", validar: true }, { valor: "$106", validar: false }, { valor: "$120", validar: false }, { valor: "$370", validar: false }, { valor: "$220", validar: false }] },
        { image: "/img/problema2.png", pregunta: "A Pedro le toca sacar la basura los lunes y jueves; su papá le da $10.00 cada vez que lo hace. Si Pedro ahorra lo que le dan, ¿cuánto juntará al paso de 5 semanas?", repuesta: [{ valor: "$75", validar: false }, { valor: "$60", validar: false }, { valor: "$20", validar: false }, { valor: "$100", validar: true }, { valor: "$40", validar: false }, { valor: "$25", validar: false }] },
        { image: "/img/problema3.png", pregunta: "Miguel gasta $50 todos los días en el autobús que lo lleva a la escuela y lo trae a la casa, ¿Cuánto gasta a la semana?, Recuerda que se va a la escuela sólo de lunes a viernes.", repuesta: [{ valor: "$250", validar: true }, { valor: "$205", validar: false }, { valor: "$240", validar: false }, { valor: "$190", validar: false }, { valor: "$120", validar: false }, { valor: "$300", validar: false }] },
        { image: "/img/problema4.png", pregunta: "Don Pedrito lleva en su camión 500 cajas con 15 piñas cada una. ¿Cuántas piñas llevará en total?", repuesta: [{ valor: "7,300", validar: false }, { valor: "7,500", validar: true }, { valor: "3,262", validar: false }, { valor: "7,796", validar: false }, { valor: "7,769", validar: false }, { valor: "7,505", validar: false }] },
        { image: "/img/problema5.png", pregunta: "En un cine hay 30 filas cada fila con 10 asientos, ¿Cuántos asientos en total hay en el cine?", repuesta: [{ valor: "370", validar: false }, { valor: "150", validar: false }, { valor: "200", validar: false }, { valor: "300", validar: true }, { valor: "325", validar: false }, { valor: "400", validar: false }] },

    ]
    const Juego17 = (props) => {

        const validarPregunta = (validar) => {
            if (validar == true) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                setCounter(counter + 1)
            }
            else {
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

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
                                                                                            <Juego17 data={arrayDato[0]} />
                                                                                            {juegoSiguienActivo == true ?
                                                                                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                : <span>.</span>}
                                                                                        </div>
                                                                                        : counter == 17 ?
                                                                                            <div>
                                                                                                <Juego17 data={arrayDato[1]} />
                                                                                                {juegoSiguienActivo == true ?
                                                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                    : <span>.</span>}
                                                                                            </div>
                                                                                            : counter == 18 ?
                                                                                                <div>
                                                                                                    <Juego17 data={arrayDato[2]} />
                                                                                                    {juegoSiguienActivo == true ?
                                                                                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                        : <span>.</span>}
                                                                                                </div>
                                                                                                : counter == 19 ?
                                                                                                    <div>
                                                                                                        <Juego17 data={arrayDato[3]} />
                                                                                                        {juegoSiguienActivo == true ?
                                                                                                            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                            : <span>.</span>}
                                                                                                    </div>
                                                                                                    : counter == 20 ?
                                                                                                        <div>
                                                                                                            <Juego17 data={arrayDato[4]} />
                                                                                                            {juegoSiguienActivo == true ?
                                                                                                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                                : <span>.</span>}
                                                                                                        </div>
                                                                                                        : counter == 21 ?
                                                                                                            <div>
                                                                                                                <Juego17 data={arrayDato[5]} />
                                                                                                                {juegoSiguienActivo == true ?
                                                                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                                    : <span>.</span>}
                                                                                                            </div>
                                                                                                            : counter == 22 ?
                                                                                                                <div>
                                                                                                                    <Juego17 data={arrayDato[6]} />
                                                                                                                    {juegoSiguienActivo == true ?
                                                                                                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                                        : <span>.</span>}
                                                                                                                </div>
                                                                                                                : counter == 23 ?
                                                                                                                    <div>
                                                                                                                        <Juego17 data={arrayDato[7]} />
                                                                                                                        {juegoSiguienActivo == true ?
                                                                                                                            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                                            : <span>.</span>}
                                                                                                                    </div>
                                                                                                                    : counter == 24 ?
                                                                                                                        <div>
                                                                                                                            <Juego17 data={arrayDato[8]} />
                                                                                                                            {juegoSiguienActivo == true ?
                                                                                                                                <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                                                                                : <span>.</span>}
                                                                                                                        </div>
                                                                                                                        : counter == 25 ?
                                                                                                                            <div>
                                                                                                                                <Juego17 data={arrayDato[9]} />
                                                                                                                                {juegoSiguienActivo == true ?
                                                                                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
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
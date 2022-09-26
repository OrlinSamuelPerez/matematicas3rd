import { useState } from "react"

export default function Division() {

    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)

    const numeros = () => {
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
                <div className="drag-d-mult" draggable="true" id="cero5" onDragStart={drag}>0</div>
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
    const numeros2 = () => {
        return (
            <div className="drag-mult-1">
                <div className="drag-d-mult" draggable="true" id="cuatro3" onDragStart={drag}>4</div>
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
    const numeros3 = () => {
        return (
            <div className="drag-mult-1">
                <div className="drag-d-mult" draggable="true" id="cuatro3" onDragStart={drag}>4</div>
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
                <div className="drag-d-mult" draggable="true" id="dos3" onDragStart={drag}>2</div>
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

    //Numero 1
    let array = ["", "", "", "", "", "", "", ""]
    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" && array[7] != "") {
            if ((array[1] == "seis" || array[1] == "seis2" || array[1] == "seis3") && (array[2] == "dos" || array[2] == "dos2") && (array[3] == "uno" || array[3] == "uno2" || array[3] == "uno3" || array[3] == "uno4") && (array[4] == "cero" || array[4] == "cero2" || array[4] == "cero3" || array[4] == "cero4" || array[4] == "cero5") && (array[5] == "tres" || array[5] == "tres2") && (array[6] == "tres" || array[6] == "tres2") && (array[7] == "cero" || array[7] == "cero2" || array[7] == "cero3" || array[7] == "cero4" || array[7] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array = ["", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const Juego = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >6</div>
                            <div className="box-drop-div" >3</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >3</div>


                        </div>


                        <hr className="raya-div-h"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop}></div>


                                <div className="box-drop-div n" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop}></div>

                            </div>
                        </div>
                        <hr className="raya-d"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f3">

                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop}></div>
                        </div>
                    </div>
                    <div>
                        {numeros()}
                    </div>
                </div>
            </div>

        )
    }

    //Numero 2
    let array2 = ["", "", "", "", "", "", "", ""]
    const drop2 = (e) => {
        //Para btener el id arrastrado
        if (array2[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array2[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array2[1] != "" && array2[2] != "" && array2[3] != "" && array2[4] != "" && array2[5] != "" && array2[6] != "" && array2[7] != "") {
            if ((array2[1] == "nueve" || array2[1] == "nueve2") && (array2[2] == "uno" || array2[2] == "uno2" || array2[2] == "uno3" || array2[2] == "uno4") && (array2[3] == "cero" || array2[3] == "cero2" || array2[3] == "cero3" || array2[3] == "cero4" || array2[3] == "cero5") && (array2[4] == "cero" || array2[4] == "cero2" || array2[4] == "cero3" || array2[4] == "cero4" || array2[4] == "cero5") && (array2[5] == "cero" || array2[5] == "cero2" || array2[5] == "cero3" || array2[5] == "cero4" || array2[5] == "cero5") && (array2[6] == "cero" || array2[6] == "cero2" || array2[6] == "cero3" || array2[6] == "cero4" || array2[6] == "cero5") && (array2[7] == "cero" || array2[7] == "cero2" || array2[7] == "cero3" || array2[7] == "cero4" || array2[7] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array2 = ["", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")




            }
        }
    }
    const Juego2 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >9</div>
                            <div className="box-drop-div" >0</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >9</div>


                        </div>


                        <hr className="raya-div-h"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop2}></div>


                                <div className="box-drop-div n" id="2" onDragOver={allowdrop} onDrop={drop2}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop2}></div>

                            </div>
                        </div>
                        <hr className="raya-d"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="4" onDragOver={allowdrop} onDrop={drop2}></div>
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop2}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f3">

                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop2}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop2}></div>
                        </div>
                    </div>
                    <div>
                        {numeros()}
                    </div>
                </div>
            </div>

        )
    }

    //Numero 3
    let array3 = ["", "", "", "", "", "", "", ""]
    const drop3 = (e) => {
        //Para btener el id arrastrado
        if (array3[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array3[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array3[1] != "" && array3[2] != "" && array3[3] != "" && array3[4] != "" && array3[5] != "" && array3[6] != "" && array3[7] != "") {
            if ((array3[1] == "dos" || array3[1] == "dos2") && (array3[2] == "uno" || array3[2] == "uno2" || array3[2] == "uno3" || array3[2] == "uno4") && (array3[3] == "dos" || array3[3] == "dos2") && (array3[4] == "cero" || array3[4] == "cero2" || array3[4] == "cero3" || array3[4] == "cero4" || array3[4] == "cero5") && (array3[5] == "cuatro" || array3[5] == "cuatro2") && (array3[6] == "cuatro" || array3[6] == "cuatro2") && (array3[7] == "cero" || array3[7] == "cero2" || array3[7] == "cero3" || array3[7] == "cero4" || array3[7] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array3 = ["", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego3 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >2</div>
                            <div className="box-drop-div" >4</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >2</div>


                        </div>


                        <hr className="raya-div-h"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop3}></div>


                                <div className="box-drop-div n" id="2" onDragOver={allowdrop} onDrop={drop3}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop3}></div>

                            </div>
                        </div>
                        <hr className="raya-d"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="4" onDragOver={allowdrop} onDrop={drop3}></div>
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop3}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f3">

                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop3}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop3}></div>
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
    let array4 = ["", "", "", "", "", "", "", ""]
    const drop4 = (e) => {
        //Para btener el id arrastrado
        if (array4[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array4[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array4[1] != "" && array4[2] != "" && array4[3] != "" && array4[4] != "" && array4[5] != "" && array4[6] != "" && array4[7] != "") {
            if ((array4[1] == "seis" || array4[1] == "seis2" || array4[1] == "seis3") && (array4[2] == "tres" || array4[2] == "tres2") && (array4[3] == "dos" || array4[3] == "dos2") && (array4[4] == "cero" || array4[4] == "cero2" || array4[4] == "cero3" || array4[4] == "cero4" || array4[4] == "cero5") && (array4[5] == "cuatro" || array4[5] == "cuatro2") && (array4[6] == "cuatro" || array4[6] == "cuatro2") && (array4[7] == "cero" || array4[7] == "cero2" || array4[7] == "cero3" || array4[7] == "cero4" || array4[7] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array4 = ["", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego4 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >6</div>
                            <div className="box-drop-div" >4</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >2</div>


                        </div>


                        <hr className="raya-div-h"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop4}></div>


                                <div className="box-drop-div n" id="2" onDragOver={allowdrop} onDrop={drop4}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop4}></div>

                            </div>
                        </div>
                        <hr className="raya-d"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="4" onDragOver={allowdrop} onDrop={drop4}></div>
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop4}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f3">

                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop4}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop4}></div>
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
    let array5 = ["", "", "", "", "", "", "", ""]
    const drop5 = (e) => {
        //Para btener el id arrastrado
        if (array5[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array5[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array5[1] != "" && array5[2] != "" && array5[3] != "" && array5[4] != "" && array5[5] != "" && array5[6] != "" && array5[7] != "") {
            if ((array5[1] == "ocho" || array5[1] == "ocho2" || array5[1] == "ocho3") && (array5[2] == "dos" || array5[2] == "dos2") && (array5[3] == "uno" || array5[3] == "uno2" || array5[3] == "uno3" || array5[3] == "uno4") && (array5[4] == "cero" || array5[4] == "cero2" || array5[4] == "cero3" || array5[4] == "cero4" || array5[4] == "cero5") && (array5[5] == "cuatro" || array5[5] == "cuatro2") && (array5[6] == "cuatro" || array5[6] == "cuatro2") && (array5[7] == "cero" || array5[7] == "cero2" || array5[7] == "cero3" || array5[7] == "cero4" || array5[7] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array5 = ["", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego5 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >8</div>
                            <div className="box-drop-div" >4</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >4</div>


                        </div>


                        <hr className="raya-div-h"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop5}></div>


                                <div className="box-drop-div n" id="2" onDragOver={allowdrop} onDrop={drop5}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop5}></div>

                            </div>
                        </div>
                        <hr className="raya-d"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="4" onDragOver={allowdrop} onDrop={drop5}></div>
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop5}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f3">

                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop5}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop5}></div>
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
    let array6 = ["", "", "", "", "", "", "", "", "", ""]
    const drop6 = (e) => {
        //Para btener el id arrastrado
        if (array6[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array6[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array6[1] != "" && array6[2] != "" && array6[3] != "" && array6[4] != "" && array6[5] != "" && array6[6] != "" && array6[7] != "" && array6[8] != "" && array6[9] != "") {
            if ((array6[1] == "uno" || array6[1] == "uno2" || array6[1] == "uno3" || array6[1] == "uno4") && (array6[2] == "seis" || array6[2] == "seis2" || array6[2] == "seis3") && (array6[3] == "cuatro" || array6[3] == "cuatro2" || array6[3] == "cuatro3") && (array6[4] == "uno" || array6[4] == "uno2" || array6[4] == "uno3" || array6[4] == "uno4") && (array6[5] == "cero" || array6[5] == "cero2" || array6[5] == "cero3" || array6[5] == "cero4" || array6[5] == "cero5") && (array6[6] == "cero" || array6[6] == "cero2" || array6[6] == "cero3" || array6[6] == "cero4" || array6[6] == "cero5") && (array6[7] == "cuatro" || array6[7] == "cuatro2" || array6[7] == "cuatro3") && (array6[8] == "cuatro" || array6[8] == "cuatro2" || array6[8] == "cuatro3") && (array6[9] == "cero" || array6[9] == "cero2" || array6[9] == "cero3" || array6[9] == "cero4" || array6[9] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array6 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego6 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >1</div>
                            <div className="box-drop-div" >6</div>
                            <div className="box-drop-div" >4</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >4</div>


                        </div>


                        <hr className="raya-div-h-2"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop6}></div>
                                <div className="box-drop-div" id="2" onDragOver={allowdrop} onDrop={drop6}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop6}></div>
                                <div className="box-drop-div n" id="4" onDragOver={allowdrop} onDrop={drop6}></div>

                            </div>
                        </div>
                        <hr className="raya-d-2"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop6}></div>
                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop6}></div>
                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop6}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f4">

                            <div className="box-drop-div" id="8" onDragOver={allowdrop} onDrop={drop6}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="9" onDragOver={allowdrop} onDrop={drop6}></div>
                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )
    }

    //Numero 7
    let array7 = ["", "", "", "", "", "", "", "", "", ""]
    const drop7 = (e) => {
        //Para btener el id arrastrado
        if (array7[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array7[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array7[1] != "" && array7[2] != "" && array7[3] != "" && array7[4] != "" && array7[5] != "" && array7[6] != "" && array7[7] != "" && array7[8] != "" && array7[9] != "") {
            if ((array7[1] == "cuatro" || array7[1] == "cuatro2" || array7[1] == "cuatro3") && (array7[2] == "ocho" || array7[2] == "ocho2" || array7[2] == "ocho3") && (array7[3] == "ocho" || array7[3] == "ocho2" || array7[3] == "ocho3") && (array7[4] == "uno" || array7[4] == "uno2" || array7[4] == "uno3" || array7[4] == "uno4") && (array7[5] == "cero" || array7[5] == "cero2" || array7[5] == "cero3" || array7[5] == "cero4" || array7[5] == "cero5") && (array7[6] == "cero" || array7[6] == "cero2" || array7[6] == "cero3" || array7[6] == "cero4" || array7[6] == "cero5") && (array7[7] == "seis" || array7[7] == "seis2" || array7[7] == "seis3") && (array7[8] == "seis" || array7[8] == "seis2" || array7[8] == "seis3") && (array7[9] == "cero" || array7[9] == "cero2" || array7[9] == "cero3" || array7[9] == "cero4" || array7[9] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array7 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego7 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >4</div>
                            <div className="box-drop-div" >8</div>
                            <div className="box-drop-div" >6</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >6</div>


                        </div>


                        <hr className="raya-div-h-2"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop7}></div>
                                <div className="box-drop-div" id="2" onDragOver={allowdrop} onDrop={drop7}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop7}></div>
                                <div className="box-drop-div n" id="4" onDragOver={allowdrop} onDrop={drop7}></div>

                            </div>
                        </div>
                        <hr className="raya-d-2"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop7}></div>
                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop7}></div>
                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop7}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f4">

                            <div className="box-drop-div" id="8" onDragOver={allowdrop} onDrop={drop7}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="9" onDragOver={allowdrop} onDrop={drop7}></div>
                        </div>
                    </div>
                    <div>
                        {numeros2()}
                    </div>
                </div>
            </div>

        )
    }

    //Numero 8
    let array8 = ["", "", "", "", "", "", "", "", "", ""]
    const drop8 = (e) => {
        //Para btener el id arrastrado
        if (array8[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array8[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array8[1] != "" && array8[2] != "" && array8[3] != "" && array8[4] != "" && array8[5] != "" && array8[6] != "" && array8[7] != "" && array8[8] != "" && array8[9] != "") {
            if ((array8[1] == "uno" || array8[1] == "uno2" || array8[1] == "uno3" || array8[1] == "uno4") && (array8[2] == "dos" || array8[2] == "dos2") && (array8[3] == "tres" || array8[3] == "tres2") && (array8[4] == "dos" || array8[4] == "dos2") && (array8[5] == "cero" || array8[5] == "cero2" || array8[5] == "cero3" || array8[5] == "cero4" || array8[5] == "cero5") && (array8[6] == "cero" || array8[6] == "cero2" || array8[6] == "cero3" || array8[6] == "cero4" || array8[6] == "cero5") && (array8[7] == "ocho" || array8[7] == "ocho2" || array8[7] == "ocho3") && (array8[8] == "ocho" || array8[8] == "ocho2" || array8[8] == "ocho3") && (array8[9] == "cero" || array8[9] == "cero2" || array8[9] == "cero3" || array8[9] == "cero4" || array8[9] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array8 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego8 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >1</div>
                            <div className="box-drop-div" >2</div>
                            <div className="box-drop-div" >8</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >4</div>


                        </div>


                        <hr className="raya-div-h-2"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop8}></div>
                                <div className="box-drop-div" id="2" onDragOver={allowdrop} onDrop={drop8}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop8}></div>
                                <div className="box-drop-div n" id="4" onDragOver={allowdrop} onDrop={drop8}></div>

                            </div>
                        </div>
                        <hr className="raya-d-2"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop8}></div>
                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop8}></div>

                        </div>
                        <div className="box-drop-div az f">-</div>

                        <div className="drop-div-f4">

                            <div className="box-drop-div" id="8" onDragOver={allowdrop} onDrop={drop8}></div>
                            <hr className="raya-d-s"></hr>

                            <div className="box-drop-div" id="9" onDragOver={allowdrop} onDrop={drop8}></div>
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
    let array9 = ["", "", "", "", "", "", "", "", "", ""]
    const drop9 = (e) => {
        //Para btener el id arrastrado
        if (array9[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array9[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array9[1] != "" && array9[2] != "" && array9[3] != "" && array9[4] != "" && array9[5] != "" && array9[6] != "" && array9[7] != "" && array9[8] != "" && array9[9] != "") {
            if ((array9[1] == "cinco" || array9[1] == "cinco2" || array9[1] == "cinco3" || array9[1] == "cinco4" || array9[1] == "cinco5") && (array9[2] == "uno" || array9[2] == "uno2" || array9[2] == "uno3" || array9[2] == "uno4") && (array9[3] == "cinco" || array9[3] == "cinco2" || array9[3] == "cinco3" || array9[3] == "cinco4" || array9[3] == "cinco5") && (array9[4] == "dos" || array9[4] == "dos2") && (array9[5] == "cinco" || array9[5] == "cinco2" || array9[5] == "cinco3" || array9[5] == "cinco4" || array9[5] == "cinco5") && (array9[6] == "dos" || array9[6] == "dos2") && (array9[7] == "cinco" || array9[7] == "cinco2" || array9[7] == "cinco3" || array9[7] == "cinco4" || array9[7] == "cinco5") && (array9[8] == "cero" || array9[8] == "cero2" || array9[8] == "cero3" || array9[8] == "cero4" || array9[8] == "cero5") && (array9[9] == "cero" || array9[9] == "cero2" || array9[9] == "cero3" || array9[9] == "cero4" || array9[9] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array9 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego9 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >7</div>
                            <div className="box-drop-div" >5</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >5</div>


                        </div>


                        <hr className="raya-div-h"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop9}></div>
                                <div className="box-drop-div n" id="2" onDragOver={allowdrop} onDrop={drop9}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop9}></div>

                            </div>
                        </div>
                        <hr className="raya-d"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div " id="4" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop9}></div>


                        </div>
                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop9}></div>
                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop9}></div>
                        </div>

                        <div className="box-drop-div az ar">-</div>
                        <hr className="raya-d"></hr>
                        <div className="drop-div-f2">

                            <div className="box-drop-div" id="8" onDragOver={allowdrop} onDrop={drop9}></div>


                            <div className="box-drop-div" id="9" onDragOver={allowdrop} onDrop={drop9}></div>
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
    let array10 = ["", "", "", "", "", "", "", "", "", ""]
    const drop10 = (e) => {
        //Para btener el id arrastrado
        if (array10[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array10[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }
        if (array10[1] != "" && array10[2] != "" && array10[3] != "" && array10[4] != "" && array10[5] != "" && array10[6] != "" && array10[7] != "" && array10[8] != "" && array10[9] != "") {
            if ((array10[1] == "ocho" || array10[1] == "ocho2" || array10[1] == "ocho3") && (array10[2] == "dos" || array10[2] == "dos2" || array10[2] == "dos3") && (array10[3] == "tres" || array10[3] == "tres2" || array10[3] == "tres3") && (array10[4] == "uno" || array10[4] == "uno2" || array10[4] == "uno3" || array10[4] == "uno4") && (array10[5] == "dos" || array10[5] == "dos2" || array10[5] == "dos3") && (array10[6] == "uno" || array10[6] == "uno2" || array10[6] == "uno3" || array10[6] == "uno4") && (array10[7] == "dos" || array10[7] == "dos2" || array10[7] == "dos3") && (array10[8] == "cero" || array10[8] == "cero2" || array10[8] == "cero3" || array10[8] == "cero4" || array10[8] == "cero5") && (array10[9] == "cero" || array10[9] == "cero2" || array10[9] == "cero3" || array10[9] == "cero4" || array10[9] == "cero5")) {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array10 = ["", "", "", "", "", "", "", "", "", ""]

                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")

            }
        }
    }
    const Juego10 = () => {
        return (
            <div>
                <h3>Resuelve correctamente la división.</h3>
                <div className="grid-m">
                    <div>
                        <div className="drop-div">
                            <div className="box-drop-div" >9</div>
                            <div className="box-drop-div" >2</div>
                            <hr className="raya-div-v"></hr>
                            <div className="box-drop-div" >4</div>


                        </div>


                        <hr className="raya-div-h"></hr>
                        <div grid-d>
                            <div className="drop-div-1">
                                <div className="box-drop-div az">-</div>
                                <div className="box-drop-div" id="1" onDragOver={allowdrop} onDrop={drop10}></div>
                                <div className="box-drop-div n" id="2" onDragOver={allowdrop} onDrop={drop10}></div>
                                <div className="box-drop-div n" id="3" onDragOver={allowdrop} onDrop={drop10}></div>

                            </div>
                        </div>
                        <hr className="raya-d"></hr>

                        <div className="drop-div-f2">
                            <div className="box-drop-div " id="4" onDragOver={allowdrop} onDrop={drop10}></div>
                            <div className="box-drop-div" id="5" onDragOver={allowdrop} onDrop={drop10}></div>


                        </div>
                        <div className="drop-div-f2">
                            <div className="box-drop-div" id="6" onDragOver={allowdrop} onDrop={drop10}></div>
                            <div className="box-drop-div" id="7" onDragOver={allowdrop} onDrop={drop10}></div>
                        </div>

                        <div className="box-drop-div az ar">-</div>
                        <hr className="raya-d"></hr>
                        <div className="drop-div-f2">

                            <div className="box-drop-div" id="8" onDragOver={allowdrop} onDrop={drop10}></div>


                            <div className="box-drop-div" id="9" onDragOver={allowdrop} onDrop={drop10}></div>
                        </div>
                    </div>
                    <div>
                        {numeros3()}
                    </div>
                </div>
            </div>

        )
    }
    //Numero 11 al 20
    const arrayDato = [
        { image: "/img/problema6.png", pregunta: "¿Cuántos lápices toca cada niño?", repuesta: [{ valor: "6", validar: false }, { valor: "16", validar: true }, { valor: "24", validar: false }, { valor: "12", validar: false }, { valor: "10", validar: false }, { valor: "15", validar: false }] },
        { image: "/img/problema7.png", pregunta: "¿Cuántos sacapuntas toca cada niño?", repuesta: [{ valor: "8", validar: false }, { valor: "10", validar: false }, { valor: "12", validar: false }, { valor: "7", validar: true }, { valor: "4", validar: false }, { valor: "15", validar: false }] },
        { image: "/img/problema8.png", pregunta: "¿Cuántas barquillas toca cada niño?", repuesta: [{ valor: "12", validar: true }, { valor: "15", validar: false }, { valor: "4", validar: false }, { valor: "6", validar: false }, { valor: "8", validar: false }, { valor: "14", validar: false }] },
        { image: "/img/problema9.png", pregunta: "¿Cuántas pelotas toca cada niño?", repuesta: [{ valor: "2", validar: false }, { valor: "7", validar: true }, { valor: "8", validar: false }, { valor: "6", validar: false }, { valor: "5", validar: false }, { valor: "12", validar: false }] },
        { image: "/img/problema10.png", pregunta: "¿Cuántas mochilas toca cada niño?", repuesta: [{ valor: "7", validar: false }, { valor: "12", validar: false }, { valor: "6", validar: false }, { valor: "5", validar: true }, { valor: "10", validar: false }, { valor: "8", validar: false }] },
        { image: "/img/problema11.png", pregunta: "Rosa tiene 325 zanahorias y quiere guardarlas en cajas, colocando 13 zanahorias en cada una. ¿Cuántas cajas necesitará?", repuesta: [{ valor: "28", validar: false }, { valor: "25", validar: true }, { valor: "13", validar: false }, { valor: "12", validar: false }, { valor: "20", validar: false }, { valor: "25", validar: false }] },
        { image: "/img/problema12.png", pregunta: "Debemos repartir 840 niños en 7 botes. ¿Cuántos niños van en cada bote?", repuesta: [{ valor: "75", validar: false }, { valor: "60", validar: false }, { valor: "220", validar: false }, { valor: "120", validar: true }, { valor: "140", validar: false }, { valor: "125", validar: false }] },
        { image: "/img/problema13.png", pregunta: "Se colocaron en 10 fruteros y 550 manzanas. ¿Cuántas manzanas hay en cada frutero?", repuesta: [{ valor: "55", validar: true }, { valor: "25", validar: false }, { valor: "45", validar: false }, { valor: "65", validar: false }, { valor: "35", validar: false }, { valor: "30", validar: false }] },
        { image: "/img/problema14.png", pregunta: "Yo tengo 15 cajas de regalo para obsequiar 5 niños ¿Cuántas cajas de regalo toca cada niño?", repuesta: [{ valor: "5", validar: false }, { valor: "3", validar: true }, { valor: "2", validar: false }, { valor: "8", validar: false }, { valor: "9", validar: false }, { valor: "7", validar: false }] },
        { image: "/img/problema15.png", pregunta: "Pedrito tiene 150 perros y quiere hacerle casitas, si va a poner 10 perros en cada casita, ¿Cuántas casitas tendrá que hacer?", repuesta: [{ valor: "37", validar: false }, { valor: "50", validar: false }, { valor: "20", validar: false }, { valor: "15", validar: true }, { valor: "18", validar: false }, { valor: "20", validar: false }] },

    ]
    const Juego11 = (props) => {

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
                                                                <Juego11 data={arrayDato[0]} />
                                                                {juegoSiguienActivo == true ?
                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                    : <span>.</span>}
                                                            </div>
                                                            : counter == 11 ?
                                                            <div>
                                                                <Juego11 data={arrayDato[1]} />
                                                                {juegoSiguienActivo == true ?
                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                    : <span>.</span>}
                                                            </div>
                                                            : counter == 12 ?
                                                            <div>
                                                                <Juego11 data={arrayDato[2]} />
                                                                {juegoSiguienActivo == true ?
                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                    : <span>.</span>}
                                                            </div>
                                                            : counter == 13 ?
                                                            <div>
                                                                <Juego11 data={arrayDato[3]} />
                                                                {juegoSiguienActivo == true ?
                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                    : <span>.</span>}
                                                            </div>
                                                            : counter == 14 ?
                                                            <div>
                                                                <Juego11 data={arrayDato[4]} />
                                                                {juegoSiguienActivo == true ?
                                                                    <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                    : <span>.</span>}
                                                            </div>
                                                             : counter == 15 ?
                                                             <div>
                                                                 <Juego11 data={arrayDato[5]} />
                                                                 {juegoSiguienActivo == true ?
                                                                     <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                     : <span>.</span>}
                                                             </div>
                                                              : counter == 16 ?
                                                              <div>
                                                                  <Juego11 data={arrayDato[6]} />
                                                                  {juegoSiguienActivo == true ?
                                                                      <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                      : <span>.</span>}
                                                              </div>
                                                               : counter == 17 ?
                                                               <div>
                                                                   <Juego11 data={arrayDato[7]} />
                                                                   {juegoSiguienActivo == true ?
                                                                       <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                       : <span>.</span>}
                                                               </div>
                                                                : counter == 18 ?
                                                                <div>
                                                                    <Juego11 data={arrayDato[8]} />
                                                                    {juegoSiguienActivo == true ?
                                                                        <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                                                                        : <span>.</span>}
                                                                </div>
                                                                 : counter == 19 ?
                                                                 <div>
                                                                     <Juego11 data={arrayDato[9]} />
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
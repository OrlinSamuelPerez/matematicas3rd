import { useState } from "react";


export default function Secuencias() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
    let array = ["", "", "", "", "", "", "", ""]
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
        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" && array[7] != "") {
            if (array[1] == "cuatro" && array[2] == "ocho" && array[3] == "doce" && array[4] == "dieciseis" && array[5] == "veinte" && array[6] == "veinticuatro" && array[7] == "veintiocho") {
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
    const allowdrop = (e) => {
        e.preventDefault()
    }
    const Juego = () => {
        return (
            <div className="secuencia">
                <h3>Ordena los siguientes números siguiendo una secuencia en ritmo ascendente tomando como patrón el número 4.</h3>

                    <div className="drop">
                        <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-drop" id="7" onDragOver={allowdrop} onDrop={drop}></div>


                    </div>
                    <div className="drag">
                        <div className="drag-d" draggable="true" id="veinte" onDragStart={drag}>20</div>
                        <div className="drag-d" draggable="true" id="ocho" onDragStart={drag}>8</div>
                        <div className="drag-d" draggable="true" id="dieciseis" onDragStart={drag}>16</div>
                        <div className="drag-d" draggable="true" id="veinticuatro" onDragStart={drag}>24</div>
                        <div className="drag-d" draggable="true" id="doce" onDragStart={drag}>12</div>
                        <div className="drag-d" draggable="true" id="cuatro" onDragStart={drag}>4</div>
                        <div className="drag-d" draggable="true" id="veintiocho" onDragStart={drag}>28</div>

                </div>

            </div>

        )

    }
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const Tiempo = () => {
        setTimeout(() => { setJuegoActivo(false) }, 2000)
        return (
            <div>{juegoMensajeActivo}</div>
        )
    }
    // numero 2
    let array2 = ["", "", "", "", "", "", "", ""]
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
        if (array2[1] != "" && array2[2] != "" && array2[3] != "" && array2[4] != "" && array2[5] != "" && array2[6] != "" && array2[7] != "") {
            if (array2[1] == "cientocuarenta" && array2[2] == "cientoveinte" && array2[3] == "cien" && array2[4] == "ochenta" && array2[5] == "sesenta" && array2[6] == "cuarenta" && array2[7] == "veinte") {
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
    const allowdrop2 = (e) => {
        e.preventDefault()
    }
    const Juego2 = () => {
        return (
            <div className="secuencia">
                <h3>Ordena los siguientes números siguiendo una secuencia en ritmo descendente tomando como patrón el número 20.</h3>
                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop2} onDrop={drop2}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="cientocuarenta" onDragStart={drag2}>140</div>
                    <div className="drag-d" draggable="true" id="cien" onDragStart={drag2}>100</div>
                    <div className="drag-d" draggable="true" id="sesenta" onDragStart={drag2}>60</div>
                    <div className="drag-d" draggable="true" id="ochenta" onDragStart={drag2}>80</div>
                    <div className="drag-d" draggable="true" id="cientoveinte" onDragStart={drag2}>120</div>
                    <div className="drag-d" draggable="true" id="veinte" onDragStart={drag2}>20</div>
                    <div className="drag-d" draggable="true" id="cuarenta" onDragStart={drag2}>40</div>

                </div>

            </div>

        )
    }

    // Numero 3
    let array3 = ["", "", "", "", "", "", "", ""]
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
        console.log(array3)
        if (array3[1] == "" && array3[2] != "" && array3[3] == "" && array3[4] != "" && array3[5] == "" && array3[6] != "" && array3[7] != "") {
            if (array3[1] == "" && array3[2] == "cientoveinticinco" && array3[3] == "" && array3[4] == "cientosetentaycinco" && array3[5] == "" && array3[6] == "docientosveinticinco" && array3[7] == "doscientoscincuenta") {
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
    const allowdrop3 = (e) => {
        e.preventDefault()
    }
    const Juego3 = () => {
        return (
            <div className="secuencia">
                <h3>Identifica el patrón que sigue la siguiente secuencia y completa los espacios en blanco.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop3}>100</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop3} onDrop={drop3}></div>
                    <div className="box-drop" id="3" onDrop={drop3}>150</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop3} onDrop={drop3}></div>
                    <div className="box-drop" id="5" onDrop={drop3}>200</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop3} onDrop={drop3}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop3} onDrop={drop3}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="doscientoscincuenta" onDragStart={drag3}>250</div>
                    <div className="drag-d" draggable="true" id="cientosetentaycinco" onDragStart={drag3}>175</div>
                    <div className="drag-d" draggable="true" id="cientoveinticinco" onDragStart={drag3}>125</div>
                    <div className="drag-d" draggable="true" id="docientosveinticinco" onDragStart={drag3}>225</div>


                </div>

            </div>

        )

    }

    //Numero 4
    let array4 = ["", "", "", "", "", "", "", ""]
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

        if (array4[1] == "" && array4[2] != "" && array4[3] == "" && array4[4] != "" && array4[5] == "" && array4[6] != "" && array4[7] != "") {
            if (array4[1] == "" && array4[2] == "45mil" && array4[3] == "" && array4[4] == "35mil" && array4[5] == "" && array4[6] == "25mil" && array4[7] == "20mil") {
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
    const allowdrop4 = (e) => {
        e.preventDefault()
    }
    const Juego4 = () => {
        return (
            <div className="secuencia">
                <h3>Identifica el patrón que sigue la siguiente secuencia y completa los espacios en blanco.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop4}>50,000</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop3} onDrop={drop4}></div>
                    <div className="box-drop" id="3" onDrop={drop4}>40,000</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop3} onDrop={drop4}></div>
                    <div className="box-drop" id="5" onDrop={drop4}>30,000</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop4} onDrop={drop4}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop4} onDrop={drop4}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="25mil" onDragStart={drag4}>25,000</div>
                    <div className="drag-d" draggable="true" id="45mil" onDragStart={drag4}>45,000</div>
                    <div className="drag-d" draggable="true" id="35mil" onDragStart={drag4}>35,000</div>
                    <div className="drag-d" draggable="true" id="20mil" onDragStart={drag4}>20,000</div>


                </div>

            </div>

        )

    }
    //Numero 5
    let array5 = ["", "", "", "", "", "", "", ""]
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

        if (array5[1] == "" && array5[2] != "" && array5[3] == "" && array5[4] != "" && array5[5] == "" && array5[6] != "" && array5[7] != "") {
            if (array5[1] == "" && array5[2] == "80mil" && array5[3] == "" && array5[4] == "60mil" && array5[5] == "" && array5[6] == "40mil" && array5[7] == "30mil") {
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
    const allowdrop5 = (e) => {
        e.preventDefault()
    }
    const Juego5 = () => {
        return (
            <div className="secuencia">
                <h3>Identifica el patrón que sigue la siguiente secuencia y completa los espacios en blanco.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop5}>90,000</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop5} onDrop={drop5}></div>
                    <div className="box-drop" id="3" onDrop={drop5}>70,000</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop5} onDrop={drop5}></div>
                    <div className="box-drop" id="5" onDrop={drop5}>50,000</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop5} onDrop={drop5}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop5} onDrop={drop5}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="40mil" onDragStart={drag5}>40,000</div>
                    <div className="drag-d" draggable="true" id="80mil" onDragStart={drag5}>80,000</div>
                    <div className="drag-d" draggable="true" id="30mil" onDragStart={drag5}>30,000</div>
                    <div className="drag-d" draggable="true" id="60mil" onDragStart={drag5}>60,000</div>


                </div>

            </div>

        )

    }

    //Numero 6
    let array6 = ["", "", "", "", "", "", "", "", "", "", ""]
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

        if (array6[1] != "" && array6[2] != "" && array6[3] != "" && array6[4] != "" && array6[5] != "" && array6[6] != "" && array6[7] != "" && array6[8] != "" && array6[9] != "" && array6[10] != "") {
            if (array6[1] == "diez" && array6[2] == "veinte" && array6[3] == "treinta" && array6[4] == "cuarenta" && array6[5] == "cincuenta" && array6[6] == "sesenta" && array6[7] == "setenta" && array6[8] == "ochenta" && array6[9] == "noventa" && array6[10] == "cien") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {
                array6 = ["", "", "", "", "", "", "", "", "", "", ""]
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
            <div className="secuencia">
                <h3>Utilice los números necesarios para contar de menor a mayor de 10 en 10 hasta el 100. Nota: Inicie en 10.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="8" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="9" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="10" onDragOver={allowdrop6} onDrop={drop6}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="cien" onDragStart={drag6}>100</div>
                    <div className="drag-d" draggable="true" id="cuarentaycinco" onDragStart={drag6}>45</div>
                    <div className="drag-d" draggable="true" id="quince" onDragStart={drag6}>15</div>
                    <div className="drag-d" draggable="true" id="cuarenta" onDragStart={drag6}>40</div>
                    <div className="drag-d" draggable="true" id="veinticinco" onDragStart={drag6}>25</div>
                    <div className="drag-d" draggable="true" id="cincuenta" onDragStart={drag6}>50</div>
                    <div className="drag-d" draggable="true" id="diez" onDragStart={drag6}>10</div>
                    <div className="drag-d" draggable="true" id="ochenta" onDragStart={drag6}>80</div>
                    <div className="drag-d" draggable="true" id="treinta" onDragStart={drag6}>30</div>
                    <div className="drag-d" draggable="true" id="noventa" onDragStart={drag6}>90</div>
                    <div className="drag-d" draggable="true" id="setenta" onDragStart={drag6}>70</div>
                    <div className="drag-d" draggable="true" id="veinte" onDragStart={drag6}>20</div>
                    <div className="drag-d" draggable="true" id="noventaycinco" onDragStart={drag6}>95</div>
                    <div className="drag-d" draggable="true" id="sesenta" onDragStart={drag6}>60</div>



                </div>

            </div>

        )

    }
    //Numero 7
    let array7 = ["", "", "", "", "", "", "", "", "", "", ""]
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

        if (array7[1] != "" && array7[2] != "" && array7[3] != "" && array7[4] != "" && array7[5] != "" && array7[6] != "" && array7[7] != "" && array7[8] != "" && array7[9] != "" && array7[10] != "") {
            if (array7[1] == "mil" && array7[2] == "2mil" && array7[3] == "3mil" && array7[4] == "4mil" && array7[5] == "5mil" && array7[6] == "6mil" && array7[7] == "7mil" && array7[8] == "8mil" && array7[9] == "9mil" && array7[10] == "10mil") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {
                array7 = ["", "", "", "", "", "", "", "", "", "", ""]
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
            <div className="secuencia">
                <h3>Utilice los números necesarios para contar de menor a mayor de 1,000 en 1,000 hasta el 10,000. Nota: Inicie en 1,000.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="8" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="9" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="10" onDragOver={allowdrop7} onDrop={drop7}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="milcien" onDragStart={drag7}>1,100</div>
                    <div className="drag-d" draggable="true" id="4milcien" onDragStart={drag7}>4,100</div>
                    <div className="drag-d" draggable="true" id="5mil" onDragStart={drag7}>5,000</div>
                    <div className="drag-d" draggable="true" id="cien" onDragStart={drag7}>100</div>
                    <div className="drag-d" draggable="true" id="3mil" onDragStart={drag7}>3,000</div>
                    <div className="drag-d" draggable="true" id="10mil" onDragStart={drag7}>10,000</div>
                    <div className="drag-d" draggable="true" id="mil" onDragStart={drag7}>1,000</div>
                    <div className="drag-d" draggable="true" id="8mil" onDragStart={drag7}>8,000</div>
                    <div className="drag-d" draggable="true" id="7mil" onDragStart={drag7}>7,000</div>
                    <div className="drag-d" draggable="true" id="90mil" onDragStart={drag7}>90,000</div>
                    <div className="drag-d" draggable="true" id="2mil" onDragStart={drag7}>2,000</div>
                    <div className="drag-d" draggable="true" id="4mil" onDragStart={drag7}>4,000</div>
                    <div className="drag-d" draggable="true" id="9mil" onDragStart={drag7}>9,000</div>
                    <div className="drag-d" draggable="true" id="6mil" onDragStart={drag7}>6,000</div>



                </div>

            </div>

        )

    }
    //Numero 8
    let array8 = ["", "", "", "", "", "", "", "", "", ""]
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

        if (array8[1] != "" && array8[2] != "" && array8[3] != "" && array8[4] != "" && array8[5] != "" && array8[6] != "" && array8[7] != "" && array8[8] != "" && array8[9] != "") {
            if (array8[1] == "5mil" && array8[2] == "4milquinientos" && array8[3] == "4mil" && array8[4] == "3milquinientos" && array8[5] == "3mil" && array8[6] == "2milquinientos" && array8[7] == "2mil" && array8[8] == "milquinientos" && array8[9] == "mil") {
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
    const allowdrop8 = (e) => {
        e.preventDefault()
    }
    const Juego8 = () => {
        return (
            <div className="secuencia">
                <h3>Utilice los números necesarios para contar de mayor a menor de 500 en 500 hasta el 1,000. Nota: Inicie en 5,000.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="8" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="9" onDragOver={allowdrop8} onDrop={drop8}></div>



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="milquinientos" onDragStart={drag8}>1,500</div>
                    <div className="drag-d" draggable="true" id="4milcincuenta" onDragStart={drag8}>4,050</div>
                    <div className="drag-d" draggable="true" id="5mil" onDragStart={drag8}>5,000</div>
                    <div className="drag-d" draggable="true" id="3milcincuenta" onDragStart={drag8}>3,050</div>
                    <div className="drag-d" draggable="true" id="3mil" onDragStart={drag8}>3,000</div>
                    <div className="drag-d" draggable="true" id="4milquinientos" onDragStart={drag8}>4,500</div>
                    <div className="drag-d" draggable="true" id="mil" onDragStart={drag8}>1,000</div>
                    <div className="drag-d" draggable="true" id="8milcincuenta" onDragStart={drag8}>8,050</div>
                    <div className="drag-d" draggable="true" id="2milquinientos" onDragStart={drag8}>2,500</div>
                    <div className="drag-d" draggable="true" id="2milcincuenta" onDragStart={drag8}>2,050</div>
                    <div className="drag-d" draggable="true" id="2mil" onDragStart={drag8}>2,000</div>
                    <div className="drag-d" draggable="true" id="4mil" onDragStart={drag8}>4,000</div>
                    <div className="drag-d" draggable="true" id="3mil" onDragStart={drag8}>3,000</div>
                    <div className="drag-d" draggable="true" id="3milquinientos" onDragStart={drag8}>3,500</div>



                </div>

            </div>

        )

    }
    //Numero 9
    let array9 = ["", "", "", "", "", "", "", ""]
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

        if (array9[1] == "" && array9[2] != "" && array9[3] == "" && array9[4] != "" && array9[5] == "" && array9[6] != "" && array9[7] != "") {
            if (array9[1] == "" && array9[2] == "19mil" && array9[3] == "" && array9[4] == "17mil" && array9[5] == "" && array9[6] == "15mil" && array9[7] == "14mil") {
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
    const allowdrop9 = (e) => {
        e.preventDefault()
    }
    const Juego9 = () => {
        return (
            <div className="secuencia">
                <h3>Identifica el patrón que sigue la siguiente secuencia y completa los espacios en blanco.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop9}>20,000</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="3" onDrop={drop5}>18,000</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="5" onDrop={drop9}>16,000</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop9} onDrop={drop9}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="17mil" onDragStart={drag9}>17,000</div>
                    <div className="drag-d" draggable="true" id="14mil" onDragStart={drag9}>14,000</div>
                    <div className="drag-d" draggable="true" id="19mil" onDragStart={drag9}>19,000</div>
                    <div className="drag-d" draggable="true" id="15mil" onDragStart={drag9}>15,000</div>
                    <div className="drag-d" draggable="true" id="21mil" onDragStart={drag9}>21,000</div>


                </div>

            </div>

        )

    }
    //Numero 10
    let array10 = ["", "", "", "", "", "", "", ""]
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

        if (array10[1] == "" && array10[2] != "" && array10[3] == "" && array10[4] != "" && array10[5] == "" && array10[6] != "" && array10[7] != "") {
            if (array10[1] == "" && array10[2] == "80mil" && array10[3] == "" && array10[4] == "60mil" && array10[5] == "" && array10[6] == "40mil" && array10[7] == "30mil") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {
                array10 = ["", "", "", "", "", "", "", ""]
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
            <div className="secuencia">
                <h3>Identifica el patrón que sigue la siguiente secuencia y completa los espacios en blanco.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop10}>90,000</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="3" onDrop={drop10}>70,000</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="5" onDrop={drop10}>50,000</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop10} onDrop={drop10}></div>


                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="40mil" onDragStart={drag10}>40,000</div>
                    <div className="drag-d" draggable="true" id="60mil" onDragStart={drag10}>60,000</div>
                    <div className="drag-d" draggable="true" id="8mil" onDragStart={drag10}>8,000</div>
                    <div className="drag-d" draggable="true" id="80mil" onDragStart={drag10}>80,000</div>
                    <div className="drag-d" draggable="true" id="30mil" onDragStart={drag10}>30,000</div>


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

                                                            : <h1>Fin</h1>
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )


}

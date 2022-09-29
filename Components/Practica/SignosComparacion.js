import { useRouter } from "next/router"
import { useState } from "react"
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis"
import Feliciades from "../Feliciades"
import Fin from "../Fin"
import IntentaloDeNuevo from "../IntentaloDeNuevo"

export default function SignosComparacion() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
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

    //numero 1
    let array = ["", "", "", ""]
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
        if (array[1] == "" && array[2] != "" && array[3] == "") {
            if (array[1] == "" && array[2] == "mayor" && array[3] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa y completa las casillas con el signo correspondiente.",
                    0,
                    counter

                )

            }
            else {
                array = ["", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa y completa las casillas con el signo correspondiente.",
                    0,
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
            <div className="SignosComp">
                <h3>Observa y completa las casillas con el signo correspondiente.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop}>45</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                    <div className="box-drop" id="3" onDrop={drop}>28</div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag}>{">"}</div>


                </div>

            </div>

        )

    }
    //numero 2
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
        if (array2[1] == "" && array2[2] != "" && array2[3] == "" && array2[4] != "" && array2[5] == "" && array2[6] != "" && array2[7] == "") {
            if (array2[1] == "" && (array2[2] == "mayor" || array2[2] == "mayor1") && array2[3] == "" && (array2[4] == "menor" || array2[4] == "menor1") && array2[5] == "" && (array2[6] == "menor" || array2[6] == "menor1") && array2[7] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa y completa las casillas con el signo correspondiente.",
                    0,
                    counter

                )
            }
            else {
                array2 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa y completa las casillas con el signo correspondiente.",
                    0,
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
            <div className="SignosComp">
                <h3>Observa y completa las casillas con el signo correspondiente.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop2}>850</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="3" onDrop={drop2}>580</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="5" onDrop={drop2}>805</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop2} onDrop={drop2}></div>
                    <div className="box-drop" id="7" onDrop={drop2}>880</div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag2}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="menor1" onDragStart={drag2}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag2}>{">"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag2}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor1" onDragStart={drag2}>{">"}</div>




                </div>

            </div>

        )

    }
    //numero 3
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
        if (array3[1] == "" && array3[2] != "" && array3[3] == "" && array3[4] != "" && array3[5] == "" && array3[6] != "" && array3[7] == "") {
            if (array3[1] == "" && (array3[2] == "mayor" || array3[2] == "mayor1") && array3[3] == "" && array3[4] == "igual" && array3[5] == "" && (array3[6] == "menor" || array3[6] == "menor1") && array3[7] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa y completa las casillas con el signo correspondiente.",
                    0,
                    counter

                )
            }
            else {
                array3 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa y completa las casillas con el signo correspondiente.",
                    0,
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
            <div className="SignosComp">
                <h3>Observa y completa las casillas con el signo correspondiente.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop3}>9,500</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop3} onDrop={drop3}></div>
                    <div className="box-drop" id="3" onDrop={drop3}>590</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop3} onDrop={drop3}></div>
                    <div className="box-drop" id="5" onDrop={drop3}>590</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop3} onDrop={drop3}></div>
                    <div className="box-drop" id="7" onDrop={drop3}>5,900</div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag3}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="menor1" onDragStart={drag3}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag3}>{">"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag3}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor1" onDragStart={drag3}>{">"}</div>




                </div>

            </div>

        )

    }
    //numero 4
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
        if (array4[1] == "" && array4[2] != "" && array4[3] == "" && array4[4] != "" && array4[5] == "" && array4[6] != "" && array4[7] == "") {
            if (array4[1] == "" && (array4[2] == "mayor" || array4[2] == "mayor1") && array4[3] == "" && (array4[4] == "menor" || array4[4] == "menor1") && array4[5] == "" && (array4[6] == "mayor" || array4[6] == "mayor1") && array4[7] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa las siguientes monedas y billetes, luego completa las casillas con el signo correspondiente.",
                    1,
                    counter

                )
            }
            else {
                array4 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa las siguientes monedas y billetes, luego completa las casillas con el signo correspondiente.",
                    1,
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
            <div className="SignosComp">
                <h3>Observa las siguientes monedas y billetes, luego completa las casillas con el signo correspondiente.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop4}><img className="img-juego" src="/img/moneda25.jpg" /></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop4} onDrop={drop4}></div>
                    <div className="box-drop" id="3" onDrop={drop4}><img className="img-juego" src="/img/moneda10.jfif" /></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop4} onDrop={drop4}></div>
                    <div className="box-drop" id="5" onDrop={drop4}><img className="img-juego" src="/img/billete2000.jpg" /></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop4} onDrop={drop4}></div>
                    <div className="box-drop" id="7" onDrop={drop4}><img className="img-juego" src="/img/billete200.jpeg" /></div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag4}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="menor1" onDragStart={drag4}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag4}>{">"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag4}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor1" onDragStart={drag4}>{">"}</div>




                </div>

            </div>

        )

    }
    //numero 5
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
        if (array5[1] == "" && array5[2] != "" && array5[3] == "" && array5[4] != "" && array5[5] == "" && array5[6] != "" && array5[7] == "") {
            if (array5[1] == "" && array5[2] == "igual" && array5[3] == "" && (array5[4] == "menor" || array5[4] == "menor1") && array5[5] == "" && (array5[6] == "mayor" || array5[6] == "mayor1") && array5[7] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa las siguientes monedas y billetes, luego completa las casillas con el signo correspondiente.",
                    1,
                    counter

                )
            }
            else {
                array5 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa las siguientes monedas y billetes, luego completa las casillas con el signo correspondiente.",
                    1,
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
            <div className="SignosComp">
                <h3>Observa las siguientes monedas y billetes, luego completa las casillas con el signo correspondiente.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop5}><img className="img-juego" src="/img/2monedad25.png" /></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop5} onDrop={drop5}></div>
                    <div className="box-drop" id="3" onDrop={drop5}><img className="img-juego" src="/img/billete50.jpg" /></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop5} onDrop={drop5}></div>
                    <div className="box-drop" id="5" onDrop={drop5}><img className="img-juego" src="/img/billete500.jpg" /></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop5} onDrop={drop5}></div>
                    <div className="box-drop" id="7" onDrop={drop5}><img className="img-juego" src="/img/billete100.jpg" /></div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag5}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="menor1" onDragStart={drag5}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag5}>{">"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag5}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor1" onDragStart={drag5}>{">"}</div>




                </div>

            </div>

        )

    }
    //numero 6
    let array6 = ["", "", "", "", "", "", "", ""]
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
        if (array6[1] == "" && array6[2] != "" && array6[3] == "" && array6[4] != "" && array6[5] == "" && array6[6] != "" && array6[7] == "") {
            if (array6[1] == "" && (array6[2] == "menor" || array6[2] == "menor1") && array6[3] == "" && (array6[4] == "mayor" || array6[4] == "mayor1") && array6[5] == "" && array6[6] == "igual" && array6[7] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Observa las siguientes imágenes e identifica la cantidad de frutas que hay en cada una, luego completa las casillas con el signo correspondiente.",
                    1,
                    counter

                )
            }
            else {
                array6 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Observa las siguientes imágenes e identifica la cantidad de frutas que hay en cada una, luego completa las casillas con el signo correspondiente.",
                    1,
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
            <div className="SignosComp">
                <h3>Observa las siguientes imágenes e identifica la cantidad de frutas que hay en cada una, luego completa las casillas con el signo correspondiente.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop6}><img className="img-juego" src="/img/objetos1.png" /></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="3" onDrop={drop6}><img className="img-juego" src="/img/objetos2.png" /></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="5" onDrop={drop6}><img className="img-juego" src="/img/objetos3.png" /></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop6} onDrop={drop6}></div>
                    <div className="box-drop" id="7" onDrop={drop6}><img className="img-juego" src="/img/objetos4.png" /></div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag6}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="menor1" onDragStart={drag6}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag6}>{">"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag6}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor1" onDragStart={drag6}>{">"}</div>




                </div>

            </div>

        )

    }
    //numero 7
    let array7 = ["", "", "", "", "", "", "", ""]
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
        if (array7[1] == "" && array7[2] != "" && array7[3] == "" && array7[4] != "" && array7[5] == "" && array7[6] != "" && array7[7] == "") {
            if (array7[1] == "" && (array7[2] == "mayor" || array7[2] == "mayor1") && array7[3] == "" && (array7[4] == "menor" || array7[4] == "menor1") && array7[5] == "" && array7[6] == "igual" && array7[7] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "En la siguiente tabla se muestran las edades de los estudiantes de arte de la escuela El Paraíso. Observa la tabla y luego completa con el signo correspondiente.",
                    1,
                    counter

                )
            }
            else {
                array7 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "En la siguiente tabla se muestran las edades de los estudiantes de arte de la escuela El Paraíso. Observa la tabla y luego completa con el signo correspondiente.",
                    1,
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
            <div className="SignosComp">
                <h3>En la siguiente tabla se muestran las edades de los estudiantes de arte de la escuela El Paraíso. Observa la tabla y luego completa con el signo correspondiente.</h3>
                <table className="table-signcomp">
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <td>
                            Juana
                        </td>
                        <td>
                            Miguel
                        </td>
                        <td>
                            Ángel
                        </td>
                        <td>
                            Pedro
                        </td>
                        <td>
                            Carla
                        </td>
                        <td>
                            Keila
                        </td>
                    </tr>
                    <tr>

                        <th>
                            Edad {"(Años)"}
                        </th>

                        <td>
                            14
                        </td>
                        <td>
                            13
                        </td>
                        <td>
                            14
                        </td>
                        <td>
                            11
                        </td>
                        <td>
                            10
                        </td>
                        <td>
                            12
                        </td>
                    </tr>
                </table>
                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop7}>Keila</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="3" onDrop={drop7}>Carla</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="5" onDrop={drop7}>Ángel</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop7} onDrop={drop7}></div>
                    <div className="box-drop" id="7" onDrop={drop7}>Juana</div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag7}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="menor1" onDragStart={drag7}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag7}>{">"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag7}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor1" onDragStart={drag7}>{">"}</div>




                </div>

            </div>

        )

    }
    //numero 8
    let array8 = ["", "", "", "", "", "", "", ""]
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
        if (array8[1] == "" && array8[2] != "" && array8[3] == "" && array8[4] != "" && array8[5] == "" && array8[6] != "" && array8[7] == "") {
            if (array8[1] == "" && (array8[2] == "menor" || array8[2] == "menor1") && array8[3] == "" && (array8[4] == "mayor" || array8[4] == "mayor1") && array8[5] == "" && (array8[6] == "menor" || array8[6] == "menor1") && array8[7] == "") {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "En la siguiente tabla se muestran las edades de los jugadores de béisbol de la escuela La Tronera. Observa la tabla y luego completa con el signo correspondiente.",
                    1,
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
                    "En la siguiente tabla se muestran las edades de los jugadores de béisbol de la escuela La Tronera. Observa la tabla y luego completa con el signo correspondiente.",
                    1,
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
            <div className="SignosComp">
                <h3>En la siguiente tabla se muestran las edades de los jugadores de béisbol de la escuela La Tronera. Observa la tabla y luego completa con el signo correspondiente.</h3>
                <table className="table-signcomp">
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <td>
                            Juan
                        </td>
                        <td>
                            Marcos
                        </td>
                        <td>
                            Antonio
                        </td>
                        <td>
                            Polo
                        </td>
                        <td>
                            Carlos
                        </td>
                        <td>
                            Eliezer
                        </td>
                    </tr>
                    <tr>
                    <th>
                            Edad {"(Años)"}
                        </th>
                        <td>
                            18
                        </td>
                        <td>
                            16
                        </td>
                        <td>
                            18
                        </td>
                        <td>
                            16
                        </td>
                        <td>
                            18
                        </td>
                        <td>
                            17
                        </td>
                    </tr>
                </table>
                <div className="drop">
                    <div className="box-drop" id="1" onDrop={drop8}>Marcos</div>
                    <div className="box-drop" id="2" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="3" onDrop={drop8}>Eliezer</div>
                    <div className="box-drop" id="4" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="5" onDrop={drop8}>Polo</div>
                    <div className="box-drop" id="6" onDragOver={allowdrop8} onDrop={drop8}></div>
                    <div className="box-drop" id="7" onDrop={drop8}>Carlos</div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="menor" onDragStart={drag8}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="menor1" onDragStart={drag8}>{"<"}</div>
                    <div className="drag-d" draggable="true" id="mayor" onDragStart={drag8}>{">"}</div>
                    <div className="drag-d" draggable="true" id="igual" onDragStart={drag8}>{"="}</div>
                    <div className="drag-d" draggable="true" id="mayor1" onDragStart={drag8}>{">"}</div>




                </div>

            </div>

        )

    }
    //numero 9
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
        if (array9[1] != "" && array9[2] != "" && array9[3] != "" && array9[4] != "" && array9[5] != "" && array9[6] != "" && array9[7] != "") {
            if ((array9[1] == "595" || array9[1] == "543" || array9[1] == "602" || array9[1] == "1,000" || array9[1] == "918" || array9[1] == "550" || array9[1] == "742") && (array9[2] == "595" || array9[2] == "543" || array9[2] == "602" || array9[2] == "1,000" || array9[2] == "918" || array9[2] == "550" || array9[2] == "742") && (array9[3] == "595" || array9[3] == "543" || array9[3] == "602" || array9[3] == "1,000" || array9[3] == "918" || array9[3] == "550" || array9[3] == "742") && (array9[4] == "595" || array9[4] == "543" || array9[4] == "602" || array9[4] == "1,000" || array9[4] == "918" || array9[4] == "550" || array9[4] == "742") && (array9[5] == "595" || array9[5] == "543" || array9[5] == "602" || array9[5] == "1,000" || array9[5] == "918" || array9[5] == "550" || array9[5] == "742") && (array9[6] == "595" || array9[6] == "543" || array9[6] == "602" || array9[6] == "1,000" || array9[6] == "918" || array9[6] == "550" || array9[6] == "742") && (array9[7] == "595" || array9[7] == "543" || array9[7] == "602" || array9[7] == "1,000" || array9[7] == "918" || array9[7] == "550" || array9[7] == "742")) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Arrastra a las casillas en blanco los números que sean mayores a 525.",
                    1,
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
                    "Arrastra a las casillas en blanco los números que sean mayores a 525.",
                    1,
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
            <div className="SignosComp">
                <h3>Arrastra a las casillas en blanco los números que sean mayores a 525.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop9} onDrop={drop9}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop9} onDrop={drop9}></div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="420" onDragStart={drag9}>420</div>
                    <div className="drag-d" draggable="true" id="595" onDragStart={drag9}>595</div>
                    <div className="drag-d" draggable="true" id="225" onDragStart={drag9}>225</div>
                    <div className="drag-d" draggable="true" id="543" onDragStart={drag9}>543</div>
                    <div className="drag-d" draggable="true" id="602" onDragStart={drag9}>602</div>
                    <div className="drag-d" draggable="true" id="520" onDragStart={drag9}>520</div>
                <div className="drag-d" draggable="true" id="255" onDragStart={drag9}>255</div><br></br>
                    



                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="1,000" onDragStart={drag9}>1,000</div>
                    <div className="drag-d" draggable="true" id="918" onDragStart={drag9}>918</div>
                    <div className="drag-d" draggable="true" id="524" onDragStart={drag9}>524</div>
                    <div className="drag-d" draggable="true" id="550" onDragStart={drag9}>550</div>
                    <div className="drag-d" draggable="true" id="742" onDragStart={drag9}>742</div>
                    <div className="drag-d" draggable="true" id="512" onDragStart={drag9}>512</div>
                    <div className="drag-d" draggable="true" id="320" onDragStart={drag9}>320</div>
                </div>

            </div>

        )

    }
    //numero 10
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
        if (array10[1] != "" && array10[2] != "" && array10[3] != "" && array10[4] != "" && array10[5] != "" && array10[6] != "" && array10[7] != "") {
            if ((array10[1] == "10,000" || array10[1] == "15,100" || array10[1] == "15,005" || array10[1] == "14,125" || array10[1] == "13,200" || array10[1] == "15,104" || array10[1] == "14,736") && (array10[2] == "10,000" || array10[2] == "15,100" || array10[2] == "15,005" || array10[2] == "14,125" || array10[2] == "13,200" || array10[2] == "15,104" || array10[2] == "14,736") && (array10[3] == "10,000" || array10[3] == "15,100" || array10[3] == "15,005" || array10[3] == "14,125" || array10[3] == "13,200" || array10[3] == "15,104" || array10[3] == "14,736") && (array10[4] == "10,000" || array10[4] == "15,100" || array10[4] == "15,005" || array10[4] == "14,125" || array10[4] == "13,200" || array10[4] == "15,104" || array10[4] == "14,736") && (array10[5] == "10,000" || array10[5] == "15,100" || array10[5] == "15,005" || array10[5] == "14,125" || array10[5] == "13,200" || array10[5] == "15,104" || array10[5] == "14,736") && (array10[6] == "10,000" || array10[6] == "15,100" || array10[6] == "15,005" || array10[6] == "14,125" || array10[6] == "13,200" || array10[6] == "15,104" || array10[6] == "14,736") && (array10[7] == "10,000" || array10[7] == "15,100" || array10[7] == "15,005" || array10[7] == "14,125" || array10[7] == "13,200" || array10[7] == "15,104" || array10[7] == "14,736")) {
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Arrastra a las casillas en blanco los números que sean menores a 15,105.",
                    1,
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
                    "Arrastra a las casillas en blanco los números que sean menores a 15,105.",
                    1,
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
            <div className="SignosComp">
                <h3>Arrastra a las casillas en blanco los números que sean menores a 15,105.</h3>

                <div className="drop">
                    <div className="box-drop" id="1" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="2" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="3" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="4" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="5" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="6" onDragOver={allowdrop10} onDrop={drop10}></div>
                    <div className="box-drop" id="7" onDragOver={allowdrop10} onDrop={drop10}></div>




                </div>
                <div className="drag">
                    <div className="drag-d" draggable="true" id="14,125" onDragStart={drag10}>14,125</div>
                    <div className="drag-d" draggable="true" id="15,106" onDragStart={drag10}>15,106</div>
                    <div className="drag-d" draggable="true" id="15,110" onDragStart={drag10}>15,110</div>
                    <div className="drag-d" draggable="true" id="13,200" onDragStart={drag10}>13,200</div>
                    <div className="drag-d" draggable="true" id="15,115" onDragStart={drag10}>15,115</div>
                    <div className="drag-d" draggable="true" id="16,000" onDragStart={drag10}>16,000</div>
                    <div className="drag-d" draggable="true" id="15,104" onDragStart={drag10}>15,104</div>
                 


                </div>
                <div className="drag">
                <div className="drag-d" draggable="true" id="10,000" onDragStart={drag10}>10,000</div>
                    <div className="drag-d" draggable="true" id="16,100" onDragStart={drag10}>16,100</div>
                    <div className="drag-d" draggable="true" id="15,100" onDragStart={drag10}>15,100</div>
                    <div className="drag-d" draggable="true" id="16,005" onDragStart={drag10}>16,005</div>
                    <div className="drag-d" draggable="true" id="14,736" onDragStart={drag10}>14,736</div>
                    <div className="drag-d" draggable="true" id="15,005" onDragStart={drag10}>15,005</div>
                    <div className="drag-d" draggable="true" id="18,000" onDragStart={drag10}>18,000</div>

                </div>

            </div>

        )
 
    }
    return (
        <div>
            <div className="Contador-secuencia">{counter + 1}/10</div>

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
                                    <Juego3 />
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
                                            <Juego5 />
                                            {juegoSiguienActivo == true ?
                                                <div className="siguiente-espacial"></div>
                                                : <span>.</span>}
                                        </div>
                                        : counter == 5 ?
                                            <div>
                                                <Juego6 />
                                                {juegoSiguienActivo == true ?
                                                    <div className="siguiente-espacial"></div>
                                                    : <span>.</span>}
                                            </div>
                                            : counter == 6 ?
                                                <div>
                                                    <Juego7 />
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
                                                            <Juego9 />
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
                                                            : <Fin posicionNivelActual={5}  nivel={"nivel1"} nombre={router.query.id} siguienteNivel="/Numeracion/NumerosOrdinales"  numero={10}/>
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}

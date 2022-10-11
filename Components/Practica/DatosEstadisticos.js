import { useRouter } from "next/router";
import { useState } from "react";
import { PreguntasAnalisis } from "../../Service/PreguntasAnalisis";
import Feliciades from "../Feliciades";
import Fin from "../Fin";
import IntentaloDeNuevo from "../IntentaloDeNuevo";
export default function DatosEstadisticos() {
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)
    const router = useRouter()
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
    const validar = (validar) => {
        if (validar == true) {
            setJuegoActivo(true)
            setSiguienteJuegoActivo(true)
            setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
            PreguntasAnalisis(
                router.query.id,
                true,
                "Leer información a partir de gráficos",
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
                "Leer información a partir de gráficos",
                0,
                counter

            )
        }
    }
    //graficos leer
    const Juego = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">El siguiente gráfico muestra la cantidad de juguetes que tiene Carlos en su habitación.</h1>
                    <div className="juego1-estadistica" ></div>
                </div>
                <div className="boton-estadistico" >
                    <h3>¿De cuál juguete hay más en la habitación de Carlos?</h3>
                    <button onClick={() => validar(false)} >Carros</button>
                    <button onClick={() => validar(false)}>Peluches</button>
                    <button onClick={() => validar(false)}>Guantes de beisbol</button>
                    <button onClick={() => validar(true)}>Pelotas</button>
                </div>
            </div>
        )
    }
    const Juego1 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">El siguiente gráfico muestra que tanto le gustan las asignaturas escolares a Juana.</h1>
                    <div className="juego2-estadistica" ></div>
                </div>
                <div className="boton-estadistico" >
                    <h3>¿Cuál es la asignatura que le gusta menos a Juana?</h3>
                    <button onClick={() => validar(false)} >Español</button>
                    <button onClick={() => validar(false)} >Sociales</button>
                    <button onClick={() => validar(true)} >Matemáticas</button>
                    <button onClick={() => validar(false)} >Naturales</button>

                </div>
            </div>
        )
    }
    const Juego2 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">El siguiente gráfico muestra la venta de flores del domingo.</h1>
                    <div className="juego3-estadistica" ></div>
                </div>
                <div className="boton-estadistico es" >
                    <h3>¿Cuál es la flor que más se vendió el domingo?</h3>
                    <button onClick={() => validar(true)}>Girasol</button>
                    <button onClick={() => validar(false)}>Rosa</button>
                    <button onClick={() => validar(false)}>Clavel</button>
                    <button onClick={() => validar(false)}>Margarita</button>
                    <button onClick={() => validar(false)}>Violeta</button>
                    <button onClick={() => validar(false)}>Jazmín</button>
                </div>
            </div>
        )
    }
    const Juego3 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">El siguiente gráfico muestra la cantidad de personas que han visitado el cine la semana pasada.</h1>
                    <div className="juego4-estadistica" ></div>
                </div>
                <div className="boton-estadistico es" >
                    <h3>¿Cuál día de la semana obtuvo exactamente 2,000 visitas? </h3>

                    <button onClick={() => validar(false)}>Sábado</button>
                    <button onClick={() => validar(false)}>Lunes</button>
                    <button onClick={() => validar(false)}>Jueves</button>
                    <button onClick={() => validar(true)}>Viernes</button>
                    <button onClick={() => validar(false)}>Domingo</button>
                    <button onClick={() => validar(false)}>Martes</button>

                </div>
            </div>
        )
    }
    const Juego4 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">El siguiente gráfico muestra los deportes que practican los estudiantes de 3ero.</h1>
                    <div className="juego5-estadistica" ></div>
                </div>
                <div className="boton-estadistico es" >
                    <h3>¿Cuál es el deporte que menos estudiantes practican?</h3>
                    <button onClick={() => validar(false)}>Fútbol</button>
                    <button onClick={() => validar(false)}>Baloncesto</button>
                    <button onClick={() => validar(false)}>Béisbol</button>
                    <button onClick={() => validar(false)}>Ciclismo</button>
                    <button onClick={() => validar(true)}>Tenis</button>
                    <button onClick={() => validar(false)}>Atletismo</button>



                </div>
            </div>
        )
    }
    const Juego5 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">El siguiente gráfico muestra los deportes que practican los estudiantes de 3ero.</h1>
                    <div className="juego5-estadistica" ></div>
                </div>
                <div className="boton-estadistico es" >
                    <h3>¿Cuántos estudiantes practican baloncesto?</h3>
                    <button onClick={() => validar(false)}>10</button>
                    <button onClick={() => validar(true)}>30</button>
                    <button onClick={() => validar(false)}>20</button>
                    <button onClick={() => validar(false)}>40</button>
                    <button onClick={() => validar(false)}>19</button>
                    <button onClick={() => validar(false)}>29</button>



                </div>
            </div>
        )
    }
    const Juego6 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">El siguiente gráfico muestra los deportes que practican los estudiantes de 3ero.</h1>
                    <div className="juego5-estadistica" ></div>
                </div>
                <div className="boton-estadistico " >
                    <h3>Se necesitan 40 estudiantes para una competencia de tenis, ¿Cuántos estudiantes faltan para poder realizarla?</h3>
                    <button onClick={() => validar(false)}>10</button>
                    <button onClick={() => validar(false)}>40</button>
                    <button onClick={() => validar(false)}>20</button>
                    <button onClick={() => validar(true)}>30</button>





                </div>
            </div>
        )
    }
    // tablas leer
    const validar2 = (validar) => {
        if (validar == true) {
            setJuegoActivo(true)
            setSiguienteJuegoActivo(true)
            setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
            PreguntasAnalisis(
                router.query.id,
                true,
                "Leer información a partir de tablas",
                1,
                counter

            )
        }
        else {
            setJuegoActivo(true)
            setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
            PreguntasAnalisis(
                router.query.id,
                falsee,
                "Leer información a partir de gráficos",
                1,
                counter

            )
        }
    }
    const Juego7 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">La siguiente tabla muestra los datos de los estudiantes de arte.</h1>
                    <div className="juego7-estadistica" ></div>
                </div>
                <div className="boton-estadistico " >
                    <h3>¿Dónde vive Ana?</h3>
                    <button onClick={() => validar2(false)}>Jarabacoa</button>
                    <button onClick={() => validar2(false)}>Medina</button>
                    <button onClick={() => validar2(true)}>El Salto</button>
                    <button onClick={() => validar2(false)}>Sabaneta</button>





                </div>
            </div>
        )
    }
    const Juego8 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">La siguiente tabla muestra los datos de los estudiantes de arte.</h1>
                    <div className="juego7-estadistica" ></div>
                </div>
                <div className="boton-estadistico " >
                    <h3>¿En qué grado está Miguel?</h3>
                    <button onClick={() => validar2(true)}>5to</button>
                    <button onClick={() => validar2(false)}>7mo</button>
                    <button onClick={() => validar2(false)}>4to</button>
                    <button onClick={() => validar2(false)}>6to</button>





                </div>
            </div>
        )
    }
    const Juego9 = () => {
        return (
            <div className="estadistico-juego">
                <div>
                    <h1 className="title">La siguiente tabla muestra los datos de los estudiantes de arte.</h1>
                    <div className="juego7-estadistica" ></div>
                </div>
                <div className="boton-estadistico " >
                    <h3>¿Qué edad tiene Pedro?</h3>
                    <button onClick={() => validar2(false)}>12 años</button>
                    <button onClick={() => validar2(true)}>9 años</button>
                    <button onClick={() => validar2(false)}>11 años</button>
                    <button onClick={() => validar2(false)}> 10 años</button>





                </div>
            </div>
        )
    }
    const drag = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    const allowdrop = (e) => {
        e.preventDefault()
    }
    let array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    const drop = (e) => {
        //Para btener el id arrastrado
        if (array[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }

        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != "" && array[7] != "" && array[8] != "" && array[9] != "" && array[10] != "" && array[11] != "" && array[12] != "" && array[13] != "" && array[14] != "") {
            if (
                   ((array[1] == "elefante" && array[2] == "doce") || (array[1] == "jirafa" && array[2] == "diez") || (array[1] == "leon" && array[2] == "cinco") || (array[1] == "zebra" && array[2] == "veintiocho") || (array[1] == "mono" && array[2] == "dos") || (array[1] == "tortuga" && array[2] == "tres") || (array[1] == "rinoceronte" && array[2] == "ocho"))
                && ((array[3] == "elefante" && array[4] == "doce") || (array[3] == "jirafa" && array[4] == "diez") || (array[3] == "leon" && array[4] == "cinco") || (array[3] == "zebra" && array[4] == "veintiocho") || (array[3] == "mono" && array[4] == "dos") || (array[3] == "tortuga" && array[4] == "tres") || (array[3] == "rinoceronte" && array[4] == "ocho"))
                && ((array[5] == "elefante" && array[6] == "doce") || (array[5] == "jirafa" && array[6] == "diez") || (array[5] == "leon" && array[6] == "cinco") || (array[5] == "zebra" && array[6] == "veintiocho") || (array[5] == "mono" && array[6] == "dos") || (array[5] == "tortuga" && array[6] == "tres") || (array[5] == "rinoceronte" && array[6] == "ocho"))
                && ((array[7] == "elefante" && array[8] == "doce") || (array[7] == "jirafa" && array[8] == "diez") || (array[7] == "leon" && array[8] == "cinco") || (array[7] == "zebra" && array[8] == "veintiocho") || (array[7] == "mono" && array[8] == "dos") || (array[7] == "tortuga" && array[8] == "tres") || (array[7] == "rinoceronte" && array[8] == "ocho"))
                && ((array[9] == "elefante" && array[10] == "doce") || (array[9] == "jirafa" && array[10] == "diez") || (array[9] == "leon" && array[10] == "cinco") || (array[9] == "zebra" && array[10] == "veintiocho") || (array[9] == "mono" && array[10] == "dos") || (array[9] == "tortuga" && array[10] == "tres") || (array[9] == "rinoceronte" && array[10] == "ocho"))
                && ((array[11] == "elefante" && array[12] == "doce") || (array[11] == "jirafa" && array[12] == "diez") || (array[11] == "leon" && array[12] == "cinco") || (array[11] == "zebra" && array[12] == "veintiocho") || (array[11] == "mono" && array[12] == "dos") || (array[11] == "tortuga" && array[12] == "tres") || (array[11] == "rinoceronte" && array[12] == "ocho"))
                && ((array[13] == "elefante" && array[14] == "doce") || (array[13] == "jirafa" && array[14] == "diez") || (array[13] == "leon" && array[14] == "cinco") || (array[13] == "zebra" && array[14] == "veintiocho") || (array[13] == "mono" && array[14] == "dos") || (array[13] == "tortuga" && array[14] == "tres") || (array[13] == "rinoceronte" && array[14] == "ocho"))
                ){
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )

            }
            else {
                array = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )



            }
        }
    }
    const Juego10 = () => {
        return (
            <div className="secuencia">
                <h3>Completa la tabla con los datos de la izquierda de acuerdo a la información proporcionada.</h3>

                <div className="grid-table-estadisitca2">
                    <div className="tabla-grid">
                        <div>
                            <p className="titlep">Se han contado los animales que viven en el zoológico y se ha realizado un informe, en dicho informe se muestra que hay
                                12 elefantes, 10 jirafas, 5 leones, 28 zebras, 2 monos, 3 tortugas y 8 rinocerontes.

                            </p>
                        </div>
                        <div className="drag-table">
                            <div className="drag-d-table" draggable="true" id="tortuga" onDragStart={drag}>Tortuga</div>
                            <div className="drag-d-table" draggable="true" id="veintiocho" onDragStart={drag}>28</div>
                            <div className="drag-d-table" draggable="true" id="diez" onDragStart={drag}>10</div>
                            <div className="drag-d-table" draggable="true" id="leon" onDragStart={drag}>León</div>
                            <div className="drag-d-table" draggable="true" id="doce" onDragStart={drag}>12</div>
                            <div className="drag-d-table" draggable="true" id="zebra" onDragStart={drag}>Zebra</div>
                            <div className="drag-d-table" draggable="true" id="tres" onDragStart={drag}>3</div>
                            <div className="drag-d-table" draggable="true" id="cinco" onDragStart={drag}>5</div>
                            <div className="drag-d-table" draggable="true" id="jirafa" onDragStart={drag}>Jirafa</div>
                            <div className="drag-d-table" draggable="true" id="ocho" onDragStart={drag}>8</div>
                            <div className="drag-d-table" draggable="true" id="mono" onDragStart={drag}>Mono</div>
                            <div className="drag-d-table" draggable="true" id="dos" onDragStart={drag}>2</div>
                            <div className="drag-d-table" draggable="true" id="elefante" onDragStart={drag}>Elefante</div>
                            <div className="drag-d-table" draggable="true" id="rinoceronte" onDragStart={drag}>Rinoceronte</div>




                        </div>
                    </div>
                    <div className="drop-table">
                        <div className="box-table table-1" >Animal</div>
                        <div className="box-table table-1" >Cantidad</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="5" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="6" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="7" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="8" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="9" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="10" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="11" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="12" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="13" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table" id="14" onDragOver={allowdrop} onDrop={drop}></div>

                    </div>

                </div>

            </div>

        )

    }
    let array2 = ["", "", "", "", "", "", "", "", "", "",""]
    const drop2 = (e) => {
        //Para btener el id arrastrado
        if (array2[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array2[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }

        if (array2[1] != "" && array2[2] != "" && array2[3] != "" && array2[4] != "" && array2[5] != "" && array2[6] != "" && array2[7] != "" && array2[8] != "" && array2[9] != "" && array2[10] != "" ) {
            if (array2[1]=="nueve" && array2[2]=="tortuga" && array2[3]=="Ana" && array2[4]=="once" && array2[5]=="Keila" && array2[6]=="perro" && array2[7]=="Miguel" && array2[8]=="conejo" && array2[9]=="cinco" && array2[10]=="gato"){
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )

            }
            else {
                array2 = ["", "", "", "", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )



            }
        }
    }
    const Juego11 = () => {
        return (
            <div className="secuencia">
                <h3>Completa la tabla con los datos de la izquierda de acuerdo a la información proporcionada.</h3>

                <div className="grid-table-estadisitca3">
                    <div className="tabla-grid">
                        <div>
                            <p className="titlep2">
                                Luego de hacerle una encuesta a 5 niños se obtuvo lo siguiente: 
                                Miguel tiene 7 años y su mascota favorita es el conejo,
                                Juan tiene 5 años y su mascota favorita el el gato,
                                María tiene 9 años y su mascota favorita es la tortuga,
                                Ana tiene 11 años y su mascota favorita es el caballo y 
                                Keila tiene 10 años y su mascota favorita es el perro.


                            </p>
                        </div>
                        <div className="drag-table2">
                            <div className="drag-d-table" draggable="true" id="tortuga" onDragStart={drag}>Tortuga</div>
                            <div className="drag-d-table" draggable="true" id="nueve" onDragStart={drag}>9</div>
                            <div className="drag-d-table" draggable="true" id="once" onDragStart={drag}>11</div>
                            <div className="drag-d-table" draggable="true" id="Ana" onDragStart={drag}>Ana</div>
                            <div className="drag-d-table" draggable="true" id="Keila" onDragStart={drag}>Keila</div>
                            <div className="drag-d-table" draggable="true" id="perro" onDragStart={drag}>Perro</div>
                            <div className="drag-d-table" draggable="true" id="conejo" onDragStart={drag}>Conejo</div>
                            <div className="drag-d-table" draggable="true" id="Miguel" onDragStart={drag}>Miguel</div>
                            <div className="drag-d-table" draggable="true" id="cinco" onDragStart={drag}>5</div>
                            <div className="drag-d-table" draggable="true" id="gato" onDragStart={drag}>Gato</div>
                            <div className="drag-d-table" draggable="true" id="elefante" onDragStart={drag}>Elefante</div>
                            <div className="drag-d-table" draggable="true" id="ocho" onDragStart={drag}>8</div>
                        </div>
                    </div>
                    <div className="drop-table2">
                        <div className="box-table table-1" >Nombre</div>
                        <div className="box-table table-1" >Años</div>
                        <div className="box-table table-1" >Mascota</div>
                        <div className="box-table" >María</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" > Caballo</div>
                        <div className="box-table" id="5" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" >10 </div>
                        <div className="box-table" id="6" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" id="7" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" > 7</div>
                        <div className="box-table" id="8" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" >Juan</div>
                        <div className="box-table" id="9" onDragOver={allowdrop} onDrop={drop2}></div>
                        <div className="box-table" id="10" onDragOver={allowdrop} onDrop={drop2}></div>

                    </div>

                </div>

            </div>

        )

    }
    let array3 = ["", "", "", "", "", "", "", "", "", "",""]
    const drop3 = (e) => {
        //Para btener el id arrastrado
        if (array3[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array3[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }

        if (array3[1] != "" && array3[2] != "" && array3[3] != "" && array3[4] != "" && array3[5] != "" && array3[6] != "" && array3[7] != "" && array3[8] != "" && array3[9] != "" && array3[10] != "" ) {
            if (array3[1]=="Pedro" && array3[2]=="franela" && array3[3]=="Lucia" && array3[4]=="amarilla" && array3[5]=="Marta" && array3[6]=="negro" && array3[7]=="falda" && array3[8]=="rosada" && array3[9]=="Carlos" && array3[10]=="roja"){
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )

            }
            else {
                array3 = ["", "", "", "", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )



            }
        }
    }
    const Juego12 = () => {
        return (
            <div className="secuencia">
                <h3>Completa la tabla con los datos de la izquierda de acuerdo a la información proporcionada.</h3>

                <div className="grid-table-estadisitca3">
                    <div className="tabla-grid">
                        <div>
                            <p className="titlep2">
                                Luego de hacerle una encuesta sobre accesorios a 5 niños se obtuvo lo siguiente: 
                                Carlos tiene una chaqueta roja,
                                Pedro tiene una franela azul,
                                Perla tiene una falda rosada,
                                Marta tiene unos zapatos negros y 
                                Lucía tiene una camisa amarilla.


                            </p>
                        </div>
                        <div className="drag-table2">
                            <div className="drag-d-table" draggable="true" id="Pedro" onDragStart={drag}>Pedro</div>
                            <div className="drag-d-table" draggable="true" id="blanco" onDragStart={drag}>Blanco</div>
                            <div className="drag-d-table" draggable="true" id="negro" onDragStart={drag}>Negro</div>
                            <div className="drag-d-table" draggable="true" id="roja" onDragStart={drag}>Roja</div>
                            <div className="drag-d-table" draggable="true" id="Lucia" onDragStart={drag}>Lucía</div>
                            <div className="drag-d-table" draggable="true" id="Marta" onDragStart={drag}>Marta</div>
                            <div className="drag-d-table" draggable="true" id="franela" onDragStart={drag}>Franela</div>
                            <div className="drag-d-table" draggable="true" id="Carlos" onDragStart={drag}>Carlos</div>
                            <div className="drag-d-table" draggable="true" id="falda" onDragStart={drag}>Falda</div>
                            <div className="drag-d-table" draggable="true" id="rosada" onDragStart={drag}>Rosada</div>
                            <div className="drag-d-table" draggable="true" id="Miguel" onDragStart={drag}>Miguel</div>
                            <div className="drag-d-table" draggable="true" id="amarilla" onDragStart={drag}>Amarilla</div>

                        </div>
                    </div>
                    <div className="drop-table2">
                        <div className="box-table table-1" >Nombre</div>
                        <div className="box-table table-1" >Accesorio</div>
                        <div className="box-table table-1" >Color</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" >Azul</div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" > Camisa</div>
                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" id="5" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" >Zapatos </div>
                        <div className="box-table" id="6" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" > Perla</div>
                        <div className="box-table" id="7" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" id="8" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" id="9" onDragOver={allowdrop} onDrop={drop3}></div>
                        <div className="box-table" >Chaqueta</div>
                        <div className="box-table" id="10" onDragOver={allowdrop} onDrop={drop3}></div>

                    </div>

                </div>

            </div>

        )

    }
    let array4 = ["", "", "", "", "", "", "", "", ""]
    const drop4 = (e) => {
        //Para btener el id arrastrado
        if (array4[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array4[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }

        if (array4[1] != "" && array4[2] != "" && array4[3] != "" && array4[4] != "" && array4[5] != "" && array4[6] != "" && array4[7] != "" && array4[8] != "" ) {
            if (
               ((array4[1]=="baloncesto" && array4[2]=="diez" )|| (array4[1]=="beisbol" && array4[2]=="quince") ||(array4[1]=="voleibol" && array4[2]=="ocho" ) || (array4[1]=="futbol" && array4[2]=="tres" ) )
            && ((array4[3]=="baloncesto" && array4[4]=="diez" )|| (array4[3]=="beisbol" && array4[4]=="quince") ||(array4[3]=="voleibol" && array4[4]=="ocho" ) || (array4[3]=="futbol" && array4[4]=="tres" ) )
            && ((array4[5]=="baloncesto" && array4[6]=="diez" )|| (array4[5]=="beisbol" && array4[6]=="quince") ||(array4[5]=="voleibol" && array4[6]=="ocho" ) || (array4[5]=="futbol" && array4[6]=="tres" ) )
            && ((array4[7]=="baloncesto" && array4[8]=="diez" )|| (array4[7]=="beisbol" && array4[8]=="quince") ||(array4[7]=="voleibol" && array4[8]=="ocho" ) || (array4[7]=="futbol" && array4[8]=="tres" ) )
            
            ){
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )

            }
            else {
                array4 = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )



            }
        }
    }
    const Juego13 = () => {
        return (
            <div className="secuencia">
                <h3>Completa la tabla con los datos de la izquierda de acuerdo a la información proporcionada.</h3>

                <div className="grid-table-estadisitca2">
                    <div className="tabla-grid">
                        <div>
                            <p className="titlep">
                                Luego de hacerle una encuesta a los estudiantes de 3ero sobre sus deportes favoritos se obtuvo lo siguiente: 
                                10 estudiantes expresaron que su deporte favorito es el baloncesto,
                                15 dijeron que su deporte favorito es el béisbol,
                                8 afirmaron que su deporte favorito es el voleibol
                                y 3 dijeron que su deporte favorito es el fútbol.


                            </p>
                        </div>
                        <div className="drag-table3">
                            <div className="drag-d-table" draggable="true" id="futbol" onDragStart={drag}>Fútbol</div>
                            <div className="drag-d-table" draggable="true" id="diez" onDragStart={drag}>10</div>
                            <div className="drag-d-table" draggable="true" id="atletismo" onDragStart={drag}>Atletismo</div>
                            <div className="drag-d-table" draggable="true" id="ocho" onDragStart={drag}>8</div>
                            <div className="drag-d-table" draggable="true" id="beisbol" onDragStart={drag}>Béisbol</div>
                            <div className="drag-d-table" draggable="true" id="tenis" onDragStart={drag}>Tenis</div>
                            <div className="drag-d-table" draggable="true" id="baloncesto" onDragStart={drag}>Baloncesto</div>
                            <div className="drag-d-table" draggable="true" id="doce" onDragStart={drag}>12</div>
                            <div className="drag-d-table" draggable="true" id="tres" onDragStart={drag}>3</div>
                            <div className="drag-d-table" draggable="true" id="voleibol" onDragStart={drag}>Voleibol</div>
                            <div className="drag-d-table" draggable="true" id="quince" onDragStart={drag}>15</div>
                            <div className="drag-d-table" draggable="true" id="cinco" onDragStart={drag}>5</div>

                        </div>
                    </div>
                    <div className="drop-table">
                        <div className="box-table table-1" >Deporte</div>
                        <div className="box-table table-1" >Cantidad</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop4}></div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop4}></div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop4}></div>
                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop4}></div>
                        <div className="box-table" id="5" onDragOver={allowdrop} onDrop={drop4}></div>
                        <div className="box-table" id="6" onDragOver={allowdrop} onDrop={drop4}></div>
                        <div className="box-table" id="7" onDragOver={allowdrop} onDrop={drop4}></div>
                        <div className="box-table" id="8" onDragOver={allowdrop} onDrop={drop4}></div>

                    </div>

                </div>

            </div>

        )

    }
    let array5 = ["", "", "", "", "", ""]
    const drop5 = (e) => {
        //Para btener el id arrastrado
        if (array5[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array5[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }

        if (array5[1] != "" && array5[2] != "" && array5[3] != "" && array5[4] != "" && array5[5] != ""  ) {
            if (array5[1]=="rosa" && array5[2]=="ciento50" && array5[3]=="ciento75" && array5[4]=="antulio" && array5[5]=="girasol" ){
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )

            }
            else {
                array5 = ["", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Organizar la información proporcionada en tablas.",
                    2,
                    counter
    
                )



            }
        }
    }
    const Juego14 = () => {
        return (
            <div className="secuencia">
                <h3>Completa la tabla con los datos de la izquierda de acuerdo a la información proporcionada.</h3>

                <div className="grid-table-estadisitca2">
                    <div className="tabla-grid">
                        <div>
                            <p className="titlep">
                                Luego de revisar el reporte de ventas de flores del fin de semana se mustra que se vendieron: 
                                200 rosas,
                                150 claveles,
                                175 margaritas,
                                300 girasoles y
                                100 antulios.
                            </p>
                        </div>
                        <div className="drag-table3">
                            <div className="drag-d-table" draggable="true" id="margarita" onDragStart={drag}>Margarita</div>
                            <div className="drag-d-table" draggable="true" id="cien" onDragStart={drag}>100</div>
                            <div className="drag-d-table" draggable="true" id="antulio" onDragStart={drag}>Antulio</div>
                            <div className="drag-d-table" draggable="true" id="docientos" onDragStart={drag}>200</div>
                            <div className="drag-d-table" draggable="true" id="rosa" onDragStart={drag}>Rosa</div>
                            <div className="drag-d-table" draggable="true" id="girasol" onDragStart={drag}>Girasol</div>
                            <div className="drag-d-table" draggable="true" id="blirio" onDragStart={drag}>Lirio</div>
                            <div className="drag-d-table" draggable="true" id="ciento75" onDragStart={drag}>175</div>
                            <div className="drag-d-table" draggable="true" id="trecientos" onDragStart={drag}>300</div>
                            <div className="drag-d-table" draggable="true" id="clavel" onDragStart={drag}>Clavel</div>
                            <div className="drag-d-table" draggable="true" id="ciento50" onDragStart={drag}>150</div>
                            <div className="drag-d-table" draggable="true" id="ciento25" onDragStart={drag}>125</div>

                        </div>
                    </div>
                    <div className="drop-table">
                        <div className="box-table table-1" >Flor</div>
                        <div className="box-table table-1" >Cantidad</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop5}></div>
                        <div className="box-table" >200</div>
                        <div className="box-table" >Clavel</div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop5}></div>
                        <div className="box-table" >Margarita</div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop5}></div>
                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop5}></div>
                        <div className="box-table" >100</div>
                        <div className="box-table" id="5" onDragOver={allowdrop} onDrop={drop5}></div>
                        <div className="box-table" >300</div>

                    </div>

                </div>

            </div>

        )

    }
    let array6 = ["", "", "", "", "", ""]
    const drop6 = (e) => {
        //Para btener el id arrastrado
        if (array6[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array6[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }

        if (array6[1] != "" && array6[2] != "" && array6[3] != "" && array6[4] != "" && array6[5] != ""  ) {
            if (array6[1]=="girasol" && array6[2]=="trecientos90" && array6[3]=="clavel" && array6[4]=="quinientos" && array6[5]=="margarita" ){
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en el gráfico en tablas.",
                    3,
                    counter
    
                )

            }
            else {
                array6 = ["", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Organizar la información proporcionada en el gráfico en tablas.",
                    3,
                    counter
    
                )



            }
        }
    }
    const Juego15 = () => {
        return (
            <div className="secuencia">
                <h3>Completa la tabla con los datos de la izquierda de acuerdo a la información proporcionada por la gráfica.</h3>

                <div className="grid-table-estadisitca2">
                    <div className="tabla-grid2">
                        <div>
                            <img className="img-es" src="/img/grafi.png"/>
                        </div>
                        <div className="drag-table3">
                            <div className="drag-d-table" draggable="true" id="margarita" onDragStart={drag}>Margarita</div>
                            <div className="drag-d-table" draggable="true" id="cien" onDragStart={drag}>100</div>
                            <div className="drag-d-table" draggable="true" id="violeta" onDragStart={drag}>Violeta</div>
                            <div className="drag-d-table" draggable="true" id="docientos" onDragStart={drag}>200</div>
                            <div className="drag-d-table" draggable="true" id="rosa" onDragStart={drag}>Rosa</div>
                            <div className="drag-d-table" draggable="true" id="girasol" onDragStart={drag}>Girasol</div>
                            <div className="drag-d-table" draggable="true" id="jazmin" onDragStart={drag}>Jazmín</div>
                            <div className="drag-d-table" draggable="true" id="ciento75" onDragStart={drag}>175</div>
                            <div className="drag-d-table" draggable="true" id="trecientos90" onDragStart={drag}>390</div>
                            <div className="drag-d-table" draggable="true" id="clavel" onDragStart={drag}>Clavel</div>
                            <div className="drag-d-table" draggable="true" id="ciento50" onDragStart={drag}>150</div>
                            <div className="drag-d-table" draggable="true" id="quinientos" onDragStart={drag}>500</div>

                        </div>
                    </div>
                    <div className="drop-table">
                        <div className="box-table table-1" >Flor</div>
                        <div className="box-table table-1" >Cantidad</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop6}></div>
                        <div className="box-table" >800</div>
                        <div className="box-table" >Violeta</div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop6}></div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop6}></div>
                        <div className="box-table" >425</div>
                        <div className="box-table" >Rosa</div>
                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop6}></div>
                        <div className="box-table" id="5" onDragOver={allowdrop} onDrop={drop6}></div>
                        <div className="box-table" >790</div>

                    </div>

                </div>

            </div>

        )

    }
    let array7 = ["", "", "", "", "", "","","",""]
    const drop7 = (e) => {
        //Para btener el id arrastrado
        if (array7[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array7[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.appendChild(document.getElementById(data))
        }

        if (array7[1] != "" && array7[2] != "" && array7[3] != "" && array7[4] != "" && array7[5] != "" && array7[6] != "" && array7[7] != "" && array7[8] != "") {
            if (array7[1]=="veinte" && array7[2]=="futbol" && array7[3]=="atletismo" && (array7[4]=="treinta" || array7[4]=="treinta2") && (array7[5]=="treinta" || array7[5]=="treinta2") && array7[6]=="tenis" && array7[7]=="diez"&& array7[8]=="beisbol"  ){
                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Organizar la información proporcionada en el gráfico en tablas.",
                    3,
                    counter
    
                )

            }
            else {
                array7 = ["", "", "", "", "", "","",""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Organizar la información proporcionada en el gráfico en tablas.",
                    3,
                    counter
    
                )



            }
        }
    }
    const Juego16 = () => {
        return (
            <div className="secuencia">
                <h3>Completa la tabla con los datos de la izquierda de acuerdo a la información proporcionada por la gráfica acerca de los deportes que practican los estudiantes de 3ero.</h3>

                <div className="grid-table-estadisitca2">
                    <div className="tabla-grid2">
                        <div>
                            <img className="img-es" src="/img/grafica5.png"/>
                        </div>
                        <div className="drag-table3">
                        <div className="drag-d-table" draggable="true" id="futbol" onDragStart={drag}>Fútbol</div>
                            <div className="drag-d-table" draggable="true" id="diez" onDragStart={drag}>10</div>
                            <div className="drag-d-table" draggable="true" id="atletismo" onDragStart={drag}>Atletismo</div>
                            <div className="drag-d-table" draggable="true" id="veinte" onDragStart={drag}>20</div>
                            <div className="drag-d-table" draggable="true" id="beisbol" onDragStart={drag}>Béisbol</div>
                            <div className="drag-d-table" draggable="true" id="tenis" onDragStart={drag}>Tenis</div>
                            <div className="drag-d-table" draggable="true" id="baloncesto" onDragStart={drag}>Baloncesto</div>
                            <div className="drag-d-table" draggable="true" id="treinta" onDragStart={drag}>30</div>
                            <div className="drag-d-table" draggable="true" id="cuarenta" onDragStart={drag}>40</div>
                            <div className="drag-d-table" draggable="true" id="voleibol" onDragStart={drag}>Voleibol</div>
                            <div className="drag-d-table" draggable="true" id="treinta2" onDragStart={drag}>30</div>
                            <div className="drag-d-table" draggable="true" id="cincuenta" onDragStart={drag}>50</div>

                        </div>
                    </div>
                    <div className="drop-table">
                        <div className="box-table table-1" >Deporte</div>
                        <div className="box-table table-1" >Cantidad</div>
                        <div className="box-table" >Ciclismo</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" >20</div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" >30</div>
                        <div className="box-table" >Baloncesto</div>
                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" >Voleibol</div>
                        <div className="box-table" id="5" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" id="6" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" id="7" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" id="8" onDragOver={allowdrop} onDrop={drop7}></div>
                        <div className="box-table" >40</div>


                    </div>

                </div>

            </div>

        )

    }
 

    return (
        <div>
            <div className="Contador-poligonos">{counter + 1}/17</div>
            {juegoActivo == false ?
                <div>
                    {counter == 0 ?
                        <div>
                            <Juego />
                        </div>
                        : counter == 1 ?
                            <div>
                                <Juego1 />
                            </div>
                            : counter == 2 ?
                                <div>
                                    <Juego2 />
                                </div>
                                : counter == 3 ?
                                    <div>
                                        <Juego3 />
                                    </div>
                                    : counter == 4 ?
                                        <div>
                                            <Juego4 />
                                        </div>
                                        : counter == 5 ?
                                            <div>
                                                <Juego5 />
                                            </div>
                                            : counter == 6 ?
                                                <div>
                                                    <Juego6 />
                                                </div>
                                                : counter == 7 ?
                                                    <div>
                                                        <Juego7 />
                                                    </div>
                                                    : counter == 8 ?
                                                        <div>
                                                            <Juego8 />
                                                        </div>
                                                        : counter == 9 ?
                                                            <div>
                                                                <Juego9 />
                                                            </div>
                                                            : counter == 10 ?
                                                                <div>
                                                                    <Juego10 />
                                                                </div>
                                                               : counter == 11 ?
                                                               <div>
                                                                   <Juego11 />
                                                               </div>
                                                               : counter == 12 ?
                                                               <div>
                                                                   <Juego12 />
                                                               </div>
                                                               :  counter == 13 ?
                                                               <div>
                                                                   <Juego13/>
                                                               </div>
                                                               :counter == 14 ?
                                                               <div>
                                                                   <Juego14/>
                                                               </div>
                                                               : counter == 15?
                                                               <div>
                                                                   <Juego15/>
                                                               </div>
                                                               : counter == 16?
                                                               <div>
                                                                   <Juego16/>
                                                               </div>
                                                            : <Fin posicionNivelActual={2} nivel={"nivel4"} nombre={router.query.id} siguienteNivel="/" numero={17} />
                                                               
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
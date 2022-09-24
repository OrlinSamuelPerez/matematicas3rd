import { useState } from "react"

export default function Mulpiplicacion() {
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
    let array = ["", "", "","","",""]
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
        if (array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "") {
            if (array[1] == "6x5" && array[2] == "6x9" && array[3] == "8x3" && array[4] == "2x8" && array[5] == "5x4") {

                setJuegoActivo(true)
                setSiguienteJuegoActivo(true)
                setMensajeJuegoActivo("HAZ HECHO UN BUEN TRABAJO ")

            }
            else {

                array = ["", "", "","","",""]

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
                        : <h1>hey</h1>
                    }

                </div>

                : <Tiempo />
            }
        </div>
    )
}
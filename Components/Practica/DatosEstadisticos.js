import { useState } from "react"

export default function DatosEstadisticos(){
    const [counter, setCounter] = useState(5)
    const validar = (validar)=>{
        if(validar == true){
            console.log("a")
        }
        else{
            console.log("aaa")
        }
    }
    const Juego = ()=>{
        return(
            <div className="estadistico-juego">
                <h3>Cual juguete es el que carlo tiene mas  </h3>
                <div className="juego1-estadistica" ></div>
                <div className="boton-estadistico" >
                    <button onClick={()=>validar(true)} >Carros</button>
                    <button  onClick={()=>validar(false)}>Peluches</button>
                    <button onClick={()=>validar(false)}>Guantes de beisbol</button>
                    <button onClick={()=>validar(false)}>Pelotas</button>
                </div>
            </div>
        )
    }
    const Juego1 = ()=>{
        return(
            <div className="estadistico-juego">
                <h3>Cuantos juguetes tiene Carlos  </h3>
                <div className="juego2-estadistica" ></div>
                <div className="boton-estadistico" >
                    <button>10</button>
                    <button>7</button>
                    <button>11</button>
                    <button>13</button>
                </div>
            </div>
        )
    }
    const Juego2 = ()=>{
        return(
            <div className="estadistico-juego">
                <h3>Cual fue la flor mas vendida  </h3>
                <div className="juego3-estadistica" ></div>
                <div className="boton-estadistico" >
                    <button>Girasol</button>
                    <button>Rosa</button>
                    <button>Clavel</button>
                    <button>Lluvia</button>
                </div>
            </div>
        )
    }
    const Juego3 = ()=>{
        return(
            <div className="estadistico-juego">
                <h3>Cual fue la flor mas vendida  </h3>
                <div className="juego3-estadistica" ></div>
                <div className="boton-estadistico" >
                    <button>Girasol</button>
                    <button>Rosa</button>
                    <button>Clavel</button>
                    <button>Lluvia</button>
                </div>
            </div>
        )
    }
    const Juego4 = ()=>{
        return(
            <div className="estadistico-juego">
                <h3>Carlos tiene mas peluches que pelotas</h3>
                <div className="juego1-estadistica" ></div>
                <div className="boton-estadistico" >
                    <button>Si</button>
                    <button>No</button>
                </div>
            </div>
        )
    }
  
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
                PreguntasAnalisis(
                    router.query.id,
                    true,
                    "Ordena los siguientes números siguiendo una secuencia en ritmo ascendente tomando como patrón el número 4.",
                    0,
                    0

                )

            }
            else {
                array = ["", "", "", "", "", "", "", ""]
                setJuegoActivo(true)
                setMensajeJuegoActivo("INTENTALO NUEVAMENTE")
                PreguntasAnalisis(
                    router.query.id,
                    false,
                    "Ordena los siguientes números siguiendo una secuencia en ritmo ascendente tomando como patrón el número 4.",
                    0,
                    0

                )



            }
        }
    }
    const allowdrop = (e) => {
        e.preventDefault()
    } 
    const Juego5 = () => {
        return (
            <div className="secuencia">
                <h3>Ordena la edad de mayor a menor.</h3>

                <div className="grid-table-estadisitca">
                    <div className="drop-table">
                        <div className="box-table table-1" >Nombre</div>
                        <div className="box-table table-1" >Edad</div>
                        <div className="box-table" >Eduardo</div>
                        <div className="box-table" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table">Juan</div>
                        <div className="box-table" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table">Carlos</div>
                        <div className="box-table" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                        <div className="box-table">Maria</div>

                        <div className="box-table" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                    

                    </div>
                    <div className="drag-table">

                        <div className="drag-d-table table-1" draggable="true" id="veinte" >Edades</div>
                        <div className="drag-d-table" draggable="true" id="veinte" onDragStart={drag}>20</div>
                        <div className="drag-d-table" draggable="true" id="ocho" onDragStart={drag}>8</div>
                        <div className="drag-d-table" draggable="true" id="dieciseis" onDragStart={drag}>16</div>
                        <div className="drag-d-table" draggable="true" id="veinticuatro" onDragStart={drag}>24</div>
                        <div className="drag-d-table" draggable="true" id="doce" onDragStart={drag}>12</div>

                    </div>
                </div>

            </div>

        )

    }
    return(
        <div>
            {counter==0?
                    <Juego/>
                :counter==1?
                    <Juego3/>
                :counter==2?
                    <Juego1/>
                :counter==3?
                    <Juego2/>:
                counter==4?
                    <Juego4/>
                :counter==5?
                    <Juego5/>
                :<h1></h1>
            }
        </div>
    )
}
import { useState } from "react";


export default function Secuencias(){
    const [juegoActivo, setJuegoActivo] = useState(false)
    const [juegoSiguienActivo, setSiguienteJuegoActivo] = useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] =useState(0)
    let array = ["","","","","","", ""]
    const drag =(e)=>{
     //Aqui se obtiene el numero arratrado, el valor es el de id
         e.dataTransfer.setData("text", e.target.id)
    }
    const drop = (e)=>{
     //Para btener el id arrastrado
     if(array[parseInt(e.target.id)]==""){
         let data = e.dataTransfer.getData("text")
         //agrego el arreglo del elemento al elmento soltado
         array[parseInt(e.target.id)]=data;
         //que se agregue al cuadro sleccioonad
         e.target.appendChild(document.getElementById(data))
     }
     if(array[1] != "" && array[2] != "" && array[3] != "" && array[4] != "" && array[5] != "" && array[6] != ""){
         if(array[1] == "uno" && array[2] =="dos" && array[3] == "tres" && array[4] =="cuatro" && array[5] == "cinco" && array[6] =="seis" ){
            setJuegoActivo(true)
            setSiguienteJuegoActivo(true)
            setMensajeJuegoActivo("FELICIDADES ")
             
         }
         else{
             array = ["","","","","","", ""]
             setJuegoActivo(true)
             setMensajeJuegoActivo("INTENTALO NUEVAMENTE")



             
         }
     }
    }
    const allowdrop = (e)=>{
         e.preventDefault()
    }
   const Juego =()=> {
    return (
        <div>
            <div className="drop">
                <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                <div className="box-drop" id="2" onDragOver={allowdrop} onDrop={drop}></div>
                <div className="box-drop" id="3" onDragOver={allowdrop} onDrop={drop}></div>
                <div className="box-drop" id="4" onDragOver={allowdrop} onDrop={drop}></div>
                <div className="box-drop" id="5" onDragOver={allowdrop} onDrop={drop}></div>
                <div className="box-drop" id="6" onDragOver={allowdrop} onDrop={drop}></div>
   
            </div>
            <div className="drag">
                <div className="drag-d" draggable="true" id="dos" onDragStart={drag}>2</div>      
                <div className="drag-d" draggable="true" id="cinco" onDragStart={drag}>5</div>      
                <div className="drag-d" draggable="true" id="seis" onDragStart={drag}>6</div>      
                <div className="drag-d" draggable="true" id="tres" onDragStart={drag}>3</div>      
                <div className="drag-d" draggable="true" id="uno" onDragStart={drag}>1</div>      
                <div className="drag-d" draggable="true" id="cuatro" onDragStart={drag}>4</div>      
            </div>
            
        </div>
   
    )
    
   }
   const handleClick1 = ()=>{
    setCounter(counter+1)
   }
   const Tiempo =()=>{
    setTimeout(()=>{setJuegoActivo(false)}, 2000)
    return(
        <h1>{juegoMensajeActivo}</h1>
    )
   }
   return(
        <div>
            {juegoActivo==false?
                <div>
                   { counter==0?
                   <div>
                   <Juego/>
                    {juegoSiguienActivo==true?  
                       <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
                    :<span>.</span>}
                    </div>
                    :counter==1?<h1>Hola mundo</h1>:<h1>Hola 2</h1>
                    }
                    
                </div>
            
                :<Tiempo/>
             }
        </div>
    )


}

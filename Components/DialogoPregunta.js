import { collection, query,  getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../BD/Configuracion";
export default function DialogoPregunta(props){
        const [counter, setCounter] = useState(0)
        const [data, setData] =useState([{pregunta:""}]);
        const [encabezado, setEncabezado] =useState({encabezado:""});

        useEffect(()=>{
            getDocs(query(collection(db,  "11111", "Niveles",props.Nivel,props.id,props.tipoPregunta)))
            .then((querySnapshot)=>{
                const dato = [];
                querySnapshot.forEach((doc) => {
                        if(doc.id == "encabezado"){
                            setEncabezado(doc.data())
                        }
                        else{
                            dato.push({...doc.data()})
                        }
                        if(props.tipoPregunta == "Problema"){
                            setEncabezado({encabezado:doc.data().concepto})
                        }
                        console.log(doc.data())

                });
                setData(dato)
            })
        },[])
        const handleClick1 = () => {
           if( data.length == counter +1){
             console.log("LISTO")
           }
           else{
            setCounter(counter + 1)
           }
        }
        console.log(data[counter])

        return(
        <>
        <style>
        {`
            .img-div{
                width:100%;
                height:100%;
                background: #292349;
                background-image: url(${props.img});
                background-position: center;
                background-size: cover;
                border-radius: 20px;
            }
       
        `
        }
         </style>
         {
            props.tipoPregunta=="VyF"?
                <div>
                    <div className="dialogo-pregunta">
                        <div className="img-div"></div>
                        <h1>{encabezado.encabezado}</h1>
                        <h2>{data[counter].pregunta}?</h2>
                        <button onClick={handleClick1} >VERDADERO</button>
                        <button>FALSO</button>
                    </div>
                </div>
            :props.tipoPregunta=="Completa"?
                <div className="dialogo-pregunta">
                    <h1>{encabezado.encabezado}</h1>
                    <h3>{data[counter].pregunta}</h3>
                    <input type="text"/>
                </div>
            :props.tipoPregunta=="Razona"?
                <div className="dialogo-pregunta">
                    <h1>{encabezado.encabezado}</h1>
                    <h3>{data[counter].pregunta}</h3>
                    <input type="text"/>
                </div>
            :props.tipoPregunta=="Quizz"?
            <div className="dialogo-pregunta">
                <h1>QUIZZ</h1>
                <h3>{data[counter].pregunta}</h3>
                <input type="text"/>
            </div>
            :props.tipoPregunta=="Problema"?
                <div className="dialogo-pregunta">
                    <h1>{encabezado.encabezado}</h1>
                    <h3>{data[counter].pregunta}</h3>
                    <input type="text"/>
                </div>
            :props.tipoPregunta=="Preguntas"?
                    <div className="dialogo-pregunta">
                        <h1>{encabezado.encabezado}</h1>
                        <h3>{data[counter].pregunta}</h3>
                        {
                            data[counter].opciones.map(e => 
                                <button onClick={handleClick1} >{e.opcion}</button>
                            )
                        }
                    </div>
                :<h1>.</h1>
         
        }
        
        </>
    )
}
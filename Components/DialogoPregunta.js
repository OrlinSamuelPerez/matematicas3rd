import { collection, query,  getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../BD/Configuracion";
export default function DialogoPregunta(props){
        const [counter, setCounter] = useState(0)
        const [data, setData] =useState([]);
        const [encabezado, setEncabezado] =useState({encabezado:""});

        useEffect(()=>{
            getDocs(query(collection(db,  "11111", "Niveles",props.Nivel,props.id,props.tipoPregunta)))
            .then((querySnapshot)=>{
                const dato = [];
                querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());
                        if(doc.id == "encabezado"){
                            setEncabezado(doc.data())
                        }
                        else{
                            dato.push({...doc.data()})
                        }

                });
                setData(dato)
            })
        },[])
        const handleClick1 = () => {
            setCounter(counter + 1)
        }
        console.log(encabezado)
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
                        <h2>{props.Pregunta}</h2>
                        <button>VERDADERO</button>
                        <button>FALSO</button>
                    </div>
                </div>
            :<h1>treabajpo</h1>
         
        }
        
        </>
    )
}
import { collection, query,  getDocs, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../BD/Configuracion";
import { CorrectSound, IncorrectSound } from "../Music/CorrectSound";
import Completa from "../Service/Completa";
import seleccionAnalisis from "../Service/Seleccionm";
import VerdaderoYFalsoAnalisis from "../Service/VerdaderoFalsos";

export default function DialogoPregunta(props){
        const [counter, setCounter] = useState(0)
        const [counter1, setCounter1] = useState(0)
        const [data, setData] =useState([{pregunta:"", respuesta:""}]);
        const [encabezado, setEncabezado] =useState({encabezado:""});
        useEffect(()=>{
            getDocs(query(collection(db,  "11111", "Niveles",props.Nivel,props.id,props.tipoPregunta), orderBy("NumeroPregunta", "asc")))
            .then((querySnapshot)=>{
                const dato = [];
                querySnapshot.forEach((doc) => {
                        if(doc.id == "encabezado"){
                            setEncabezado(doc.data())
                        }
                        else{
                            dato.push({...doc.data()})
                            console.log(doc.data())
                        }
                        if(props.tipoPregunta == "Problema"){
                            setEncabezado({encabezado:doc.data().concepto})
                        }

                });
                setData(dato)
            })
        },[])
      console.log(data)

        const handleClick1 = () => {
           if( data.length == counter +1){
             props.buttonSiguiente()
           }
           else{
            setCounter(counter + 1)
           }
        } 
        const handleClick12 = () => {
            
             setCounter1(counter1 + 1)
         }
        
        const repuestaCorrecta = (valor1, valor2,pregunta, numeroPregunta)=>{
            if(valor1 == valor2){
                VerdaderoYFalsoAnalisis(props.idDeSubTema, "Correcta", pregunta, props.Nivel, data.length,numeroPregunta)
                document.getElementById("modal").classList.toggle("Modal-Active")
                CorrectSound()
                setTimeout(()=>{
                    document.getElementById("modal").classList.toggle("Modal-Active")
                    handleClick1()
                }, 1500)
            }
            else{
                IncorrectSound() 
                VerdaderoYFalsoAnalisis(props.idDeSubTema, "Incorrecta", pregunta, props.Nivel, data.length,numeroPregunta)
                document.getElementById("modal-incorrecto").classList.toggle("Modal-Active")
                setTimeout(()=>{
                    document.getElementById("modal-incorrecto").classList.toggle("Modal-Active")
                }, 1500)
            }
        }
        const repuestaCorrectaSeleccion = (opcion, validar, pregunta, numero)=>{
            if("Correcta" == validar){
                seleccionAnalisis(props.idDeSubTema, "correcta",pregunta, props.Nivel,data.length, numero )
                document.getElementById("modal").classList.toggle("Modal-Active")
                CorrectSound()
                setTimeout(()=>{
                    document.getElementById("modal").classList.toggle("Modal-Active")
                    handleClick1()
                }, 1500)
            }
            else{
                IncorrectSound() 
                seleccionAnalisis(props.idDeSubTema, "Incorrecta",pregunta, props.Nivel,data.length, numero )
                document.getElementById("modal-incorrecto").classList.toggle("Modal-Active")
                setTimeout(()=>{
                    document.getElementById("modal-incorrecto").classList.toggle("Modal-Active")
                }, 1500)
            }
        }
        const repuestaCorrectaCompleta = (valor1, pregunta, numeroPregunta)=>{
            const completaRepuesta = document.getElementById("completa")
            if(valor1 == completaRepuesta.value){
                completaRepuesta.innerHTML = "";
                Completa(props.tipoPregunta,props.idDeSubTema,"correcta", pregunta, props.Nivel, data.length,numeroPregunta )
                document.getElementById("modal").classList.toggle("Modal-Active")
                CorrectSound()
                setTimeout(()=>{
                    document.getElementById("modal").classList.toggle("Modal-Active")
                    handleClick1()
                }, 1500)
            } 
            else{
                if(counter1 <= 2){
                    completaRepuesta.innerHTML = "";
                    IncorrectSound()
                    Completa(props.tipoPregunta,props.idDeSubTema,"Incorrecta", pregunta, props.Nivel, data.length,numeroPregunta )
                    document.getElementById("modal-incorrecto").classList.toggle("Modal-Active")
                    setTimeout(()=>{
                        document.getElementById("modal-incorrecto").classList.toggle("Modal-Active")
                    }, 1500)
                    handleClick12()
                }
                else{
                    Swal.fire({
                        title: `Holaa! La repuesta correcta es ${valor1}`,
                        width: 600,
                        padding: '3em',
                        color: '#fff',
                        background: '#fff url("https://media4.giphy.com/media/Pq2fdlMQwFvQvBTd0e/giphy.gif?cid=ecf05e47x19xdipfwn4topk0fk4z5qab1jeeqdn27z6gfjm7&rid=giphy.gif&ct=g")',
                        backdrop: `
                            rgba(0,0,123,0.4)
                            left top
                            no-repeat
                        `
                        })
                }
            }
        }  
 
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
            .dialogo-pregunta{
                background-color:${props.color};
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
                        <h3>{data[counter].pregunta}?</h3>
                        <button onClick={()=>repuestaCorrecta(data[counter].respuesta,"verdadero",data[counter].pregunta, data[counter].NumeroPregunta)} >Verdadero</button>
                        <button onClick={()=>repuestaCorrecta(data[counter].respuesta,"falso",data[counter].pregunta, data[counter].NumeroPregunta)}>Falso</button>
                    </div>
                </div>
            :props.tipoPregunta=="Completa"?
                <div className="dialogo-pregunta">
                    <h1>{encabezado.encabezado}</h1><br></br>
                    <h3>{data[counter].pregunta}</h3><br></br>
                    <input id="completa" type="text"/>
                    <button onClick={()=>repuestaCorrectaCompleta(data[counter].respuesta,data[counter].pregunta, data[counter].NumeroPregunta)} >CONTINUAR ✔</button>
                </div>
            :props.tipoPregunta=="Razona"?
                <div className="dialogo-pregunta">
                    <h1>{encabezado.encabezado}</h1><br></br>
                    <h3>{data[counter].pregunta}</h3><br></br>
                    <input id="completa" placeholder="Ingresa aqui tu repuesta" type="text"/><br></br>
                    <button onClick={()=>repuestaCorrectaCompleta(data[counter].respuesta,data[counter].pregunta, data[counter].NumeroPregunta)} >CONTINUAR </button>

                </div>
            :props.tipoPregunta=="Seleccionm"?
                    <div className="dialogo-pregunta">
                        <h1>{encabezado.encabezado}</h1>
                        <h3>{data[counter].pregunta}</h3>
                        {
                            data[counter].pregunta != ""
                            ?
                            data[counter].opciones.map(e => 
                                <button onClick={()=>repuestaCorrectaSeleccion(e.opcion,e.validar, data[counter].pregunta, data[counter].NumeroPregunta )} >{e.opcion}</button>
                            ):<h1>.</h1>
                        }
                    </div>
                :<h1>.</h1>
         
        }
        <div id="modal" className="Modal">
            <div>
            <h1>CORRECTO ✔</h1>
            </div>
        </div>
        <div id="modal-incorrecto" className="Modal incorrecto">
            <div>
            <h1>INCORRECTO</h1>
            </div>
        </div>
       
        </>
    )
}
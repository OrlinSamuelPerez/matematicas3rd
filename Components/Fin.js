import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../BD/Configuracion"

export default function Fin(props){
    const [divisionResultado, setDivisionResultado] = useState(0)
    auth.onAuthStateChanged(async user =>{
        const data =[] 
        if(user != null){
            const docRef= doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",props.nombre)
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                for (var i = 0; i < props.numero; i++) {
                    data.push({...docSnap.data()[i]})
                 }
              } else {
                data.push("No such document!")
              }
              let intentoCorrecta = 0
              let numeroDeVecesIncorrectas = 0
              data.map(docu=>{
                intentoCorrecta = intentoCorrecta +docu.intentoCorrecta
                numeroDeVecesIncorrectas = numeroDeVecesIncorrectas + docu.numeroDeVecesIncorrectas
              //  console.log(docu.numeroDeVecesIncorrectas+docu.numeroDeVecesIncorrectas)

              })
              const division = 100 - ((numeroDeVecesIncorrectas / intentoCorrecta) * 100) 
              setDivisionResultado(division)


        }
    })
    console.log(divisionResultado)

    return(
        <div>
      <style>
    {`
    .donut-segment-2 {
        stroke: aqua;
        animation: donut1 3s;
        stroke-dasharray: 0, 100;
        animation-fill-mode:forwards;
        
    }
        @keyframes donut1 {
        0% {
            stroke-dasharray: 0, 100;
        }
        100% {
            stroke-dasharray: ${divisionResultado},calc(${divisionResultado} - 100);
        } 
        
}
   
    `
    }
     </style>
 
            <h1>Feliciades terminaste {props.nombre}</h1>
            <div class="donut-container">
            <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
                <circle class="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="69 31" stroke-dashoffset="25"></circle>
                <g class="donut-text donut-text-1">
                <text y="50%" transform="translate(0, 2)">
                    <tspan x="50%" text-anchor="middle" class="donut-percent">{divisionResultado}%</tspan>   
                </text>
                <text y="60%" transform="translate(0, 2)">
                </text>
                </g>
            </svg>
            </div>
        </div>
    )
}
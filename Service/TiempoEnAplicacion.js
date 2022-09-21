import { auth } from "../BD/Configuracion"
const date = new Date();
const diaActual = (date.getDay()+"/"+(date.getMonth()+1)+"/"+date.getFullYear())



export const tiempoDentrodeAplicacion = ()=>{
    auth.onAuthStateChanged(user=>{
        if(user != "null"){
            const segundo = 1
            

            

        }
    })
}
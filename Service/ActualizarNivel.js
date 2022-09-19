import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../BD/Configuracion";


export const ActualizarNivel = (posicionNivelActual,nivel, urlNuevaPagina, valor)=>{
    auth.onAuthStateChanged(async user=>{
        if(user != null){
            const docRef = doc(db, "11111", "Usuarios","Estudiantes",user.email)
            //EXTRAER DATOS
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                if(docSnap.data().posicionActual[nivel]==posicionNivelActual ){
                    if(nivel=="nivel1"){
                        await updateDoc(docRef,{
                                "posicionActual.nivel1":docSnap.data().posicionActual[nivel]+1
                        })}
                }
            }
            if(valor == true){
                console.log("hola")
            }
            else{location.href = urlNuevaPagina}

        }
      })

    
}
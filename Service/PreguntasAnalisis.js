import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../BD/Configuracion";

export  function PreguntasAnalisis(validar, pregunta,idobjetivo, numero){
    const subTema = window.location
    console.log(subTema)
    auth.onAuthStateChanged(async user=>{
        if(user != null){
            const docRef=(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema))
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                data.push(docSnap.data())
              } else {
                data.push("No such document!")
              }
            if(validar==false){
                if(data=="No such document!"){
                    if(data[0] == "No such document!"){
                        await setDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema  ), {
                           [numero]:{
                            pregunta, numeroDeVecesIncorrectas:1, intentoCorrecta:0, idobjetivo
                           },
                           
                        })
                        }
                        else if(!data[0][numero]){
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema), {
                                [numero]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":1,
                                    "intentoCorrecta":0,
    
                                }
                            });
                        }
                        else{
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema), {
                                [numero]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":data[0][numero].numeroDeVecesIncorrectas +1,
                                "intentoCorrecta":0,
    
                                }
                            });
                        }
                }
            }


            }
        })
}
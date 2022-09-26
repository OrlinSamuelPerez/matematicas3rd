import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../BD/Configuracion";

export  function PreguntasAnalisis(subTema,validar, pregunta,idobjetivo, numero){
    console.log(subTema)
    auth.onAuthStateChanged(async user=>{
        const data = []
        if(user != null){
            const docRef= doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema)
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                data.push(docSnap.data())
              } else {
                data.push("No such document!")
              }
              console.log(data[0][numero])
            if(validar==false){
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
                                    "intentoCorrecta":0,idobjetivo
    
                                }
                            });
                        }
                        else{
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema), {
                                [numero]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":data[0][numero].numeroDeVecesIncorrectas +1,
                                "intentoCorrecta":data[0][numero].intentoCorrecta,idobjetivo
    
                                }
                            });
                        }
                }else{
                    if(data[0] == "No such document!"){
                        await setDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema  ), {
                           [numero]:{
                            pregunta, 
                            numeroDeVecesIncorrectas:0,
                            intentoCorrecta:0,idobjetivo
                           },
                        })
                        }
                        else if(!data[0][numero]){
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema), {
                                [numero]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":0,
                                    "intentoCorrecta":1,idobjetivo
                                }
                            });
                        }
                        else{
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, "Progeso-Estudiante",subTema), {
                                [numero]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":data[0][numero].numeroDeVecesIncorrectas,
                                    "intentoCorrecta":data[0][numero].numeroDeVecesIncorrectas + 1,idobjetivo
                                }
                            });
                        }
                }


            }
        })
}
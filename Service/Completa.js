import { doc, setDoc,getDoc, addDoc, increment, updateDoc } from "firebase/firestore";
import { auth, db } from "../BD/Configuracion";


export default function  Completa(tipo,idDeSubTema, repuesta,pregunta, Nivel, tamanoDePregunta,numeroPreguntas){
    const data = [];
    auth.onAuthStateChanged(async user=>{
        if(user != null){
            const subtemaTipo = (`${tipo}-${idDeSubTema}`)
            const docRef=(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo  ))
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                data.push(docSnap.data())
              } else {
                data.push("No such document!")
              }
              if(repuesta == "Incorrecta"){
                if(data[0] == "No such document!"){
                    await setDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo  ), {
                       [numeroPreguntas]:{
                        pregunta, 
                        numeroDeVecesIncorrectas:1, 
                        intentoCorrecta:0,
                       },
                       numeroPregunta:tamanoDePregunta,
                    })
                    }
                    else if(!data[0][numeroPreguntas]){
                        await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                            [numeroPreguntas]:{
                                "pregunta":pregunta,
                                "numeroDeVecesIncorrectas":1,
                                "intentoCorrecta":0,

                            }
                        });
                    }
                    else{
                        await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                            [numeroPreguntas]:{
                                "pregunta":pregunta,
                                "numeroDeVecesIncorrectas":data[0][numeroPreguntas].numeroDeVecesIncorrectas +1,
                            "intentoCorrecta":0,

                            }
                        });
                    }
                }else{
                    if(data[0] == "No such document!"){
                        await setDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo  ), {
                           [numeroPreguntas]:{
                            pregunta, 
                            numeroDeVecesIncorrectas:0,
                            intentoCorrecta:1,
                           },
                           numeroPregunta:tamanoDePregunta,
                        })
                        }
                        else if(!data[0][numeroPreguntas]){
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                                [numeroPreguntas]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":0,
                                    "intentoCorrecta":1,
                                }
                            });
                        }
                        else{
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                                [numeroPreguntas]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":data[0][numeroPreguntas].numeroDeVecesIncorrectas,
                                    "intentoCorrecta":data[0][numeroPreguntas].numeroDeVecesIncorrectas + 1,
                                }
                            });
                        }
                }
        }
    })
}

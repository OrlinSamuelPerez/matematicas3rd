import { doc, setDoc,getDoc, addDoc, increment, updateDoc } from "firebase/firestore";
import { auth, db } from "../BD/Configuracion";

// Add a new document in collection "cities"


export default async function  seleccionAnalisis( idDeSubTema, repuesta, pregunta,Nivel, numeroPregunta, numero ){
    const data = []
    auth.onAuthStateChanged(async user=>{
       
        if(user != null){
            const subtemaTipo = (`seleccion-${idDeSubTema}`)
            

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
                       [numero]:{
                        pregunta, numeroDeVecesIncorrectas:1, intentoCorrecta:0,
                       },
                       numeroPregunta,
                    })
                    }
                    else if(!data[0][numero]){
                        await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                            [numero]:{
                                "pregunta":pregunta,
                                "numeroDeVecesIncorrectas":1,
                                "intentoCorrecta":0,

                            }
                        });
                    }
                    else{
                        await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                            [numero]:{
                                "pregunta":pregunta,
                                "numeroDeVecesIncorrectas":data[0][numero].numeroDeVecesIncorrectas +1,
                            "intentoCorrecta":0,

                            }
                        });
                    }
                }else{
                    if(data[0] == "No such document!"){
                        await setDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo  ), {
                           [numero]:{
                            pregunta, 
                            numeroDeVecesIncorrectas:0,
                            intentoCorrecta:0,
                           },
                           numeroPregunta,
                        })
                        }
                        else if(!data[0][numero]){
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                                [numero]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":0,
                                    "intentoCorrecta":1,
                                }
                            });
                        }
                        else{
                            await updateDoc(doc(db, "11111", "Usuarios", "Estudiantes", user.email, Nivel,subtemaTipo), {
                                [numero]:{
                                    "pregunta":pregunta,
                                    "numeroDeVecesIncorrectas":data[0][numero].numeroDeVecesIncorrectas,
                                    "intentoCorrecta":data[0][numero].numeroDeVecesIncorrectas + 1,
                                }
                            });
                        }
                }
                                    

            }
        })
    
}

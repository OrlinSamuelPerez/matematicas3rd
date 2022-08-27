import DialogoPersonaje from "../../Components/DialogoPersonaje";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {auth, db} from "../../BD/Configuracion"
import Video from "../../Components/Video";

export default function Presentacion(){
    const [data, setData] =useState({});
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    useEffect(()=>{
        const docRef = doc(db, "11111", "Niveles","Nivel_1", "Datos_Nivel1");
        const docSnap =  getDoc(docRef)
        .then((docSnap)=>{
            if (docSnap.exists()) {
                setData(docSnap.data())
                console.log(docSnap.data().Objetivos[0].Objetivos)
                }
        })
    },[])
    const handleClick2 = () => {
        if(data.Objetivos.length == counter2 + 1){
            auth.onAuthStateChanged(async user=>{
                if(user != null){
                  const docSnap = doc(db, "11111", "Usuarios","Estudiantes",user.email)
                  await updateDoc(docSnap, {
                    posicionActual:{
                        posicionNIvel:2,
                        nivel:1
                    }
                    
                  });
                  location.reload()
                }
              })
        }else{
            setCounter2(counter2 + 1)

        }
    }
    return(
        counter == 0?
        <div className="space-fondo">
            <DialogoPersonaje 
                titulo={"Bienvenido a la "+data.Nombre }
                dialogo={data.Definicion}
                img="/img/astronauta-lapiz.png"
            />
            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
            
        </div>:counter == 1?
        <div className="space-fondo">
            <Video LinkVideo={data.video}/>
            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
        </div>:counter == 2?
        <div className="space-fondo">
            <DialogoPersonaje
                    titulo="Objetivos"
                    dialogo={data.Objetivos[counter2].Objetivos}
                    img="/img/astronauta-marciano.jpg"
            />
            <div className="siguiente-espacial"><button onClick={handleClick2} >Continuar</button></div>
            
        </div>:<h2>No deberian estar aqui</h2>
    );
}
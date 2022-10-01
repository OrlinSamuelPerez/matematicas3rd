import DialogoPersonaje from "../../Components/DialogoPersonaje";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {auth, db} from "../../BD/Configuracion"
import Video from "../../Components/Video";
import { ActualizarNivel } from "../../Service/ActualizarNivel";
import Link from "next/link";

export default function Presentacion(){
    const [data, setData] =useState({});
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [activo, setActivo] = useState(false)
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    useEffect(()=>{
        const docRef = doc(db, "11111", "Niveles","Nivel_2", "Datos_Nivel2");
        const docSnap =  getDoc(docRef)
        .then((docSnap)=>{
            if (docSnap.exists()) {
                setData(docSnap.data())
                console.log(docSnap.data().Objetivos[0].Objetivos)
                }
        })
    },[])
    const [datos, setDatos]=useState({nivel:0, posicionNIvel:0}
    )
    useEffect(()=>{
        auth.onAuthStateChanged(async user=>{
            if(user!=null){
                const docRef = doc(db, "11111", "Usuarios","Estudiantes",user.email)
                const dor = await getDoc(docRef);
                if (dor.exists()) {
                    setDatos( dor.data().posicionActual)
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
            }
        })
    })
    const handleClick2 = () => {
        if(data.Objetivos.length == counter2 + 1){
            ActualizarNivel(data.position, "nivel2")
            setActivo(true)
        }else{
            setCounter2(counter2 + 1)

        }
    }
    const atras = ()=>{
        if(counter == 0){
            console.log(".")
        }
        else{
            setCounter(counter-1)
        }
    }
    return(
        counter == 0?
        <div className="geometria-fon">
            <DialogoPersonaje 
                titulo={"Bienvenido a la "+data.Nombre }
                dialogo={data.Definicion}
                img="/img/bosque-otono.jpg"
                color="#6418a1f7"
            />
            <div className="siguiente-espacial"><button onClick={atras} className="e">Atras</button>    <button onClick={handleClick1} >Continuar</button></div>
            

        </div>:counter == 1?
        <div className="geometria-fon">
            <Video LinkVideo={data.video}/>
            <div className="siguiente-espacial"><button onClick={atras} className="e">Atras</button>    <button onClick={handleClick1} >Continuar</button></div>

        </div>:counter == 2?
        <div className="geometria-fon">
            <DialogoPersonaje
                    titulo="Objetivos"
                    dialogo={data.Objetivos[counter2].Objetivos}
                    img="/img/ardilla.jpg"
                    color="#6418a1f7"


            />
           {
            activo==false?
                    <div className="siguiente-espacial"><button onClick={atras} className="e">Atras</button> <button onClick={handleClick2} >Continuar</button></div>
                :<div className="siguiente-espacial"><Link href="/Geometria/Poligonos"><button>INICIAR CON EL TEMA 1</button></Link></div>
           }
            
        </div>:<h2>No deberian estar aqui</h2>
    );
}
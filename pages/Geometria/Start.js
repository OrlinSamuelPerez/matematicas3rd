import { doc, getDoc,collection, query, getDocs, orderBy  } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db } from "../../BD/Configuracion"
import CardLevel from "../../Components/CardLevel"
export default function Start(){
    const [data, setData] = useState({
        posicionActual:{
            posicionNivel: "1"
        }
        })
    const [totalNivel, setTotalNivel] = useState([])
    useEffect(()=>{
        auth.onAuthStateChanged(async user=>{
            if(user != null){
                const docRef = doc(db, "11111", "Usuarios","Estudiantes",user.email)
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data())
                  } else {
                    console.log("No such document!");
                  }
              };
          })
    },[])
    const Datos = []
    useEffect(()=>{
        getDocs(query(collection(db, "11111", "Niveles", "Nivel_1"), orderBy("position", "asc")))
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
                if(doc.data().position != "1"){
                    Datos.push({...doc.data(), id:doc.id})
                }
              });
              setTotalNivel(Datos)
        })
    },[])
    console.log(data.posicionActual.posicionNIvel)
    const arrayMostrar = totalNivel.slice(0,data.posicionActual.posicionNIvel - 1)
    const arrayDeshabilitado = totalNivel.slice(data.posicionActual.posicionNIvel - 1)
    console.log(arrayDeshabilitado)
    return(
        <div className="geometria-fondo">
            <div className="grid-cardlevel">
                <CardLevel color="#541B82" level="Numeracion" id="Presentacion" nombre="Presentacion" numero="1" img="astronauta-music.png"/>
                {arrayMostrar.map(e=><CardLevel color="#541B82" level="Numeracion" id={e.id} nombre={e.Nombre} numero={e.position} img="astronauta-music.png"/>)}
                {arrayDeshabilitado.map(e=><CardLevel clasDesabilitar="not-active" color="#212121"  level="Numeracion" id={e.id} nombre={e.Nombre} numero={e.position} img="candado.png"/>)}
            </div>
            
        </div>
    )
}
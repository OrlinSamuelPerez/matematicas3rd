import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../BD/Configuracion";
export default function Navegacion({children}){
    const [data, setData] = useState({nombre_Estudiante:"", apellido_Estudiante:""})
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
    const cerrarSeccion = ()=>{
        auth.signOut()
    }
    const router = useRouter()

    const recargar =()=>{
        router.reload()
    }
    const ruta = router.pathname.substring(0,router.pathname.length - 5)  ;
    console.log(ruta)
    return(
        <>
        
        <main>
            {children}
        </main>
        <nav>
            <p>Hola {data.nombre_Estudiante + " " + data.apellido_Estudiante}</p>
            <div className="img-nav"><img src="/img/astronauta-dino.png"/></div>
        </nav>
        <div className="house-start">
            <div onClick={recargar} ><a><img src="/img/flecha.png"/></a></div>
            <div><Link href={ruta+"/Start"}><a><img src="/img/casa-home.png"/></a></Link></div>
        </div>
        </>
    )
}
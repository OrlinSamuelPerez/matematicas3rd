import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, db } from '../../BD/Configuracion';
import DialogoPersonaje from '../../Components/DialogoPersonaje';
import DialogoPregunta from '../../Components/DialogoPregunta';
import Ejemplo from '../../Components/Ejemplo';
import Video from '../../Components/Video';
export default function HomeNumeracion(){
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [data, setData] =useState({});
    const [idPage, setId] = useState({id:""})
    const rutaActual = useRouter().query.id
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        if(data.Objetivos.length == counter2 + 1){
            setCounter(counter + 1)
            
        }else{
            setCounter2(counter2 + 1)

        }
        if(counter == 7){
            auth.onAuthStateChanged(async user=>{
                if(user != null){
                  const docSnap = doc(db, "11111", "Usuarios","Estudiantes",user.email)
                  await updateDoc(docSnap, {
                    posicionActual:{
                        posicionNIvel:2,
                        nivel:1
                    }
                    
                  });
                  location.href("/Start")
                }
              })
        }
    }
    useEffect(()=>{
        const docRef = doc(db, "11111", "Niveles","Nivel_1", rutaActual);
        getDoc(docRef)
        .then((docSnap)=>{
            if (docSnap.exists()) {
                setData(docSnap.data())
                setId(docSnap.id)
                }
        })
    },[])
    const tiempoEspera = ()=>{
        setTimeout(()=>{
            handleClick1()
        },1000)
    }
    return(
        counter == 0?
        <div className="space-fondo">
                <DialogoPersonaje
                        titulo={"Bienvenido a la "+data.Nombre }
                        dialogo={data.Definicion}
                        img="/img/astronauta-pc.jpg"
                />
            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
            
        </div>:counter==1?
             <div className="space-fondo">
             <DialogoPersonaje
                     titulo="Objetivos"
                     dialogo={data.Objetivos[counter2].Objetivos}
                     img="/img/astronauta-moto.jpg"
             />
             <div className="siguiente-espacial"><button onClick={handleClick2} >Continuar</button></div>
             
         </div>: counter ==2?
         <div className="space-fondo">
            <Video LinkVideo={data.Video}/>
            <div className="siguiente-espacial"><button onClick={handleClick1} >Continuar</button></div>
        </div>:counter ==3?
        <div className="space-fondo">
            <Ejemplo datos={data.Presentacion} buttonSiguiente={handleClick1} />
         </div>
        :counter == 4?
            <div className="space-fondo">
                <DialogoPregunta
                id={rutaActual}
                tipoPregunta="VyF"
                img=""
                Nivel="Nivel_1"
                buttonSiguiente = {handleClick1}
                idDeSubTema={idPage}

            />
            </div>
        :counter==5?<div className="space-fondo">
            {tiempoEspera()}
        </div>:counter ==6?
        <div className="space-fondo">
        <DialogoPregunta
            id={rutaActual}
            tipoPregunta="Razona"
            img=""
            Nivel="Nivel_1"
            buttonSiguiente = {handleClick1}
                idDeSubTema={idPage}
        />
         </div>
        :counter==7?<div className="space-fondo">
        {tiempoEspera()}
    </div>:counter == 8?
        <div className="space-fondo">
            <DialogoPregunta
                id={rutaActual}
                tipoPregunta="Completa"
                img=""
                Nivel="Nivel_1"
                buttonSiguiente = {handleClick1}
                idDeSubTema={idPage}


            />
        </div>:counter==9?<div className="space-fondo">
            {tiempoEspera()}
        </div>:counter == 10?
        <div className="space-fondo">
                <DialogoPregunta
                    id={rutaActual}
                    tipoPregunta="Seleccionm"
                    img=""
                    Nivel="Nivel_1"
                idDeSubTema={idPage}

                    buttonSiguiente = {handleClick1}
                />
        </div>:<h2>No deberian estar aqui</h2>
    )
}
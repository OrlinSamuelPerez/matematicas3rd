import { doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, db } from '../../BD/Configuracion';
import CardJuegos from '../../Components/CardJuegos';
import DialogoPersonaje from '../../Components/DialogoPersonaje';
import DialogoPregunta from '../../Components/DialogoPregunta';
import Ejemplo from '../../Components/Ejemplo';
import Felicitaciones from '../../Components/Felicitaciones';
import Secuencias from '../../Components/Practica/Secuencia';
import SignosComparacion from '../../Components/Practica/SignosComparacion';
import Suma from '../../Components/Practica/Suma';
import Video from '../../Components/Video';
import { ActualizarNivel } from '../../Service/ActualizarNivel';
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
    const atras = (valor)=>{
        if(valor == "objetivos"){
            if(counter2 == 0){
                setCounter(counter -1)
                console.log(counter2)
            }
            else{
                setCounter2(counter2-1)
                console.log(counter2)

            }
        }
    else{
        setCounter(counter-1)
    }
    }
   const Actualiza = ()=>{ActualizarNivel(
    data.position,"nivel1", "dd", true)
    handleClick1()
    }
    return(
        counter == 0?
        <div className="space-fondo">
                <DialogoPersonaje
                        titulo={"Bienvenido a la "+data.Nombre }
                        dialogo={data.Definicion}
                        img="/img/astronauta-pc.jpg"
                        color="#6418a1f7"


                />
            <div className="siguiente-espacial"><Link href="/Numeracion/Start"><button  >Atrás</button></Link><button onClick={handleClick1} >Continuar</button></div>
            
        </div>:counter==1?
             <div className="space-fondo">
             <DialogoPersonaje
                     titulo="Objetivos"
                     dialogo={data.Objetivos[counter2].Objetivos}
                     img="/img/astronauta-moto.jpg"
                     color="#6418a1f7"


             />
             <div className="siguiente-espacial"><button onClick={()=>atras("objetivos")} >Atrás</button><button onClick={handleClick2} >Continuar</button></div>
             
         </div>: counter ==2?
         <div className="space-fondo">
            <Video LinkVideo={data.Video}/>
            <div className="siguiente-espacial"><button onClick={()=>atras("oivos")} >Atrás</button><button onClick={handleClick2} >Continuar</button></div>

        </div>:counter ==3?
        <div className="space-fondo">
            <Ejemplo datos={data.Presentacion} atras={()=>atras("dd")} buttonSiguiente={handleClick1} />
         </div>
        :counter == 4?
            rutaActual == "Secuencias"?
            <div className='space-fondo'>
                <div className='juegoFondoSpace'>
                    <Secuencias/>
                </div>
            </div>
            :rutaActual == "SignosComparacion"?
            <div className='space-fondo'>
                <div className='juegoFondoSpace'>
                    <SignosComparacion/>
                </div>
            </div>
            :rutaActual == "Adicion"?
            <div className='space-fondo'>
                <div className='juegoFondoSpace'>
                    <Suma/>
                </div>
            </div>
            :<h1>jjj</h1>

        :counter==5?Actualiza():<div><Felicitaciones Link="/Numeracion/Start"/></div>
    )
}
import { doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, db } from '../../BD/Configuracion';
import DialogoPersonaje from '../../Components/DialogoPersonaje';
import Ejemplo from '../../Components/Ejemplo';
import Felicitaciones from '../../Components/Felicitaciones';
import Longitud from '../../Components/Practica/Longitud';
import Perimetro from '../../Components/Practica/Perimetro';
import Poligonos from '../../Components/Practica/Poligonos';
import SignosComparacion from '../../Components/Practica/SignosComparacion';
import Video from '../../Components/Video';
import { ActualizarNivel } from '../../Service/ActualizarNivel';
export default function HomeNumeracion() {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [data, setData] = useState({});
    const [idPage, setId] = useState({ id: "" })
    const rutaActual = useRouter().query.id
    const dataEjemplo = ["/img/L1.png", "/img/L2.png", "/img/L3.png", "/img/L4.png", "/img/L5.png", "/img/L6.png", "/img/L7.png", "/img/L8.png", "/img/L9.png", "/img/L10.png", "/img/L11.png", "/img/L12.png", "/img/L13.png", "/img/L14.png", "/img/L15.png", "/img/L16.png"]
    const dataEjemplo2 = ["/img/P1.png", "/img/P2.png", "/img/P3.png", "/img/P4.png", "/img/P5.png", "/img/P6.png"]
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        if (data.Objetivos.length == counter2 + 1) {
            setCounter(counter + 1)

        } else {
            setCounter2(counter2 + 1)

        }
        if (counter == 7) {
            auth.onAuthStateChanged(async user => {
                if (user != null) {
                    const docSnap = doc(db, "11111", "Usuarios", "Estudiantes", user.email)
                    await updateDoc(docSnap, {
                        posicionActual: {
                            posicionNIvel: 2,
                            nivel: 3
                        }

                    });
                    location.href("/Start")
                }
            })
        }
    }
    useEffect(() => {
        const docRef = doc(db, "11111", "Niveles", "Nivel_3", rutaActual);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    setData(docSnap.data())
                    setId(docSnap.id)
                }
            })
    }, [])
    const tiempoEspera = () => {
        setTimeout(() => {
            handleClick1()
        }, 1000)
    }
    const atras = (valor) => {
        if (valor == "objetivos") {
            if (counter2 == 0) {
                setCounter(counter - 1)
                console.log(counter2)
            }
            else {
                setCounter2(counter2 - 1)
                console.log(counter2)

            }
        }
        else {
            setCounter(counter - 1)
        }
    }
    const Actualiza = () => {
        ActualizarNivel(
            data.position, "nivel3", "dd", true)
        handleClick1()
    }
    return (
        counter == 0 ?
            <div className="fondo-med">
                <DialogoPersonaje
                    titulo={"Bienvenido a la " + data.Nombre}
                    dialogo={data.Definicion}
                    img="/img/cangrejo.png"
                    color="#6418a1f7"


                />
                <div className="siguiente-espacial"><Link href="/Numeracion/Start"><button  >Atr??s</button></Link><button onClick={handleClick1} >Continuar</button></div>

            </div> : counter == 1 ?
                <div className="fondo-med">
                    <DialogoPersonaje
                        titulo="Objetivos"
                        dialogo={data.Objetivos[counter2].Objetivos}
                        img="/img/floti.jpg"
                        color="#6418a1f7"


                    />
                    <div className="siguiente-espacial"><button onClick={() => atras("objetivos")} >Atr??s</button><button onClick={handleClick2} >Continuar</button></div>

                </div> : counter == 2 ?
                    <div className="fondo-med">
                        <Video LinkVideo={data.Video} />
                        <div className="siguiente-espacial"><button onClick={() => atras("oivos")} >Atr??s</button><button onClick={handleClick2} >Continuar</button></div>

                    </div> : counter == 3 ?
                        rutaActual == "Longitud" ?

                            <div className="fondo-med">

                                <Ejemplo datos={dataEjemplo} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                            </div>
                            : <div className="fondo-med">

                                <Ejemplo datos={dataEjemplo2} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                            </div>
                        : counter == 4 ?
                            rutaActual == "Longitud" ?
                                <div className='fondo-med'>
                                    <div className='juegoFondoSpace'>
                                        <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>
                                        <Longitud />

                                    </div>
                                </div>

                                : rutaActual == "Perimetro" ?
                                    <div className='fondo-med'>
                                        <div className='juegoFondoSpace'>
                                            <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>
                                            <Perimetro />
                                        </div>
                                    </div>

                                    : <h1></h1>
                            : counter == 5 ? Actualiza() : <div><Felicitaciones Link="/Numeracion/Start" /></div>
    )
}
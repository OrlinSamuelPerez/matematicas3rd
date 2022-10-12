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
import Division from '../../Components/Practica/Division';
import Mulpiplicacion from '../../Components/Practica/Multiplicacion';
import NumeroPares from '../../Components/Practica/NumeroPares';
import NumerosOrdinales from '../../Components/Practica/NumerosOrdinales';
import Resta from '../../Components/Practica/Resta';
import Secuencias from '../../Components/Practica/Secuencia';
import SignosComparacion from '../../Components/Practica/SignosComparacion';
import Suma from '../../Components/Practica/Suma';
import ValorPosicion from '../../Components/Practica/ValorPosicion';
import Video from '../../Components/Video';
import { ActualizarNivel } from '../../Service/ActualizarNivel';
export default function HomeNumeracion() {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [data, setData] = useState({});
    const [idPage, setId] = useState({ id: "" })
    const rutaActual = useRouter().query.id
    const ArraySecuencias = ["/img/S1.png", "/img/S2.png", "/img/S3.png", "/img/S4.png", "/img/S5.png", "/img/S6.png", "/img/S7.png", "/img/S8.png"]
    const ArrayVP = ["/img/VP1.png", "/img/VP2.png", "/img/VP3.png", "/img/VP4.png", "/img/VP5.png", "/img/VP6.png", "/img/VP7.png", "/img/VP8.png", "/img/VP9.png", "/img/VP10.png", "/img/VP11.png", "/img/VP12.png", "/img/VP13.png", "/img/VP14.png", "/img/VP15.png", "/img/VP16.png"]
    const ArrayPI = ["/img/PI1.png", "/img/PI2.png", "/img/PI3.png", "/img/PI4.png", "/img/PI5.png", "/img/PI6.png", "/img/PI7.png", "/img/PI8.png", "/img/PI9.png"]
    const ArraySignosComp = ["/img/SC1.png","/img/SC2.png","/img/SC3.png","/img/SC4.png","/img/SC5.png","/img/SC6.png","/img/SC7.png","/img/SC8.png","/img/SC9.png"]
    const ArrayNO = ["/img/NO1.png","/img/NO2.png","/img/NO3.png","/img/NO4.png","/img/NO5.png","/img/NO6.png","/img/NO7.png","/img/NO8.png","/img/NO9.png","/img/NO10.png","/img/NO11.png","/img/NO12.png"]
    const ArrayA = ["/img/A1.png","/img/A2.png","/img/A3.png","/img/A4.png","/img/A5.png","/img/A6.png","/img/A7.png","/img/A8.png","/img/A9.png","/img/A10.png","/img/A11.png","/img/A12.png","/img/A13.png","/img/A14.png","/img/A15.png","/img/A16.png","/img/A17.png"]
    const ArrayR = ["/img/R1.png","/img/R2.png","/img/R3.png","/img/R4.png","/img/R5.png","/img/R6.png","/img/R7.png","/img/R8.png","/img/R9.png","/img/R10.png","/img/R11.png","/img/R12.png","/img/R13.png","/img/R14.png","/img/R15.png","/img/R16.png","/img/R17.png"]
    const ArrayM = ["/img/M1.png","/img/M2.png","/img/M3.png","/img/M4.png","/img/M5.png","/img/M6.png","/img/M7.png","/img/M8.png","/img/M9.png","/img/M10.png","/img/M11.png","/img/M12.png","/img/M13.png","/img/M14.png","/img/M15.png","/img/M16.png","/img/M17.png","/img/M18.png","/img/M19.png","/img/M20.png","/img/M21.png","/img/M22.png"]
    
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
                            nivel: 1
                        }

                    });
                    location.href("/Start")
                }
            })
        }
    }
    useEffect(() => {
        const docRef = doc(db, "11111", "Niveles", "Nivel_1", rutaActual);
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
            data.position, "nivel1", "dd", true)
        handleClick1()
    }
    return (
        counter == 0 ?
            <div className="space-fondo">
                <DialogoPersonaje
                    titulo={"Bienvenido a "  + data.Nombre}
                    dialogo={data.Definicion}
                    img="/img/astronauta-pc.jpg"
                    color="#6418a1f7"


                />
                <div className="siguiente-espacial"><Link href="/Numeracion/Start"><button  >Atrás</button></Link><button onClick={handleClick1} >Continuar</button></div>

            </div> : counter == 1 ?
                <div className="space-fondo">
                    <DialogoPersonaje
                        titulo="Objetivos"
                        dialogo={data.Objetivos[counter2].Objetivos}
                        img="/img/astronauta-moto.jpg"
                        color="#6418a1f7"


                    />
                    <div className="siguiente-espacial"><button onClick={() => atras("objetivos")} >Atrás</button><button onClick={handleClick2} >Continuar</button></div>

                </div> : counter == 2 ?
                    <div className="space-fondo">
                        <Video LinkVideo={data.Video} />
                        <div className="siguiente-espacial"><button onClick={() => atras("oivos")} >Atrás</button><button onClick={handleClick2} >Continuar</button></div>

                    </div> : counter == 3 ?
                                rutaActual == "Secuencias" ?
                                    <div className="space-fondo">
                                        <Ejemplo datos={ArraySecuencias} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                    </div>
                                : rutaActual == "ValorPosicion" ?
                                    <div className="space-fondo">
                                        <Ejemplo datos={ArrayVP} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                    </div>
                                : rutaActual == "SignosComparacion" ?
                                    <div className="space-fondo">
                                        <Ejemplo datos={ArraySignosComp} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                    </div>
                                :rutaActual == "Numeros_pares_impares" ?
                                    <div className="space-fondo">
                                        <Ejemplo datos={ArrayPI} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                    </div>
                                : rutaActual == "NumerosOrdinales" ?
                                    <div className="space-fondo">
                                        <Ejemplo datos={ArrayNO} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                    </div>
                                 : rutaActual == "Adicion" ?
                                 <div className="space-fondo">
                                     <Ejemplo datos={ArrayA} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                 </div>
                                : rutaActual == "Sustraccion" ?
                                <div className="space-fondo">
                                    <Ejemplo datos={ArrayR} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                </div>
                                : rutaActual == "Multiplicacion" ?
                                <div className="space-fondo">
                                    <Ejemplo datos={ArrayM} atras={() => atras("dd")} buttonSiguiente={handleClick1} />
                                </div>
                            :<h1>jj</h1>

                        : counter == 4 ?
                            rutaActual == "Secuencias" ?
                                <div className='space-fondo'>
                                    <div className='juegoFondoSpace'>
                                        <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>
                                        <Secuencias />

                                    </div>
                                </div>

                                : rutaActual == "SignosComparacion" ?
                                    <div className='space-fondo'>
                                        <div className='juegoFondoSpace'>
                                            <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>
                                            <SignosComparacion />
                                        </div>
                                    </div>
                                    : rutaActual == "Adicion" ?
                                        <div className='space-fondo'>
                                            <div className='juegoFondoSpace'>
                                                <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>
                                                <Suma />

                                            </div>
                                        </div>

                                        : rutaActual == "ValorPosicion" ?
                                            <div className='space-fondo'>
                                                <div className='juegoFondoSpace'>
                                                    <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>

                                                    <ValorPosicion />

                                                </div>
                                            </div>
                                            : rutaActual == "Numeros_pares_impares" ?
                                                <div className='space-fondo'>
                                                    <div className='juegoFondoSpace'>
                                                        <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>
                                                        <NumeroPares />

                                                    </div>
                                                </div>
                                                : rutaActual == "NumerosOrdinales" ?
                                                    <div className='space-fondo'>
                                                        <div className='juegoFondoSpace'>
                                                            <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>
                                                            <NumerosOrdinales />

                                                        </div>
                                                    </div>

                                                    : rutaActual == "Division" ?
                                                        <div className='space-fondo'>
                                                            <div className='juegoFondoSpace'>
                                                                <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>

                                                                <Division />
                                                            </div>
                                                        </div>
                                                        : rutaActual == "Sustraccion" ?
                                                            <div className='space-fondo'>
                                                                <div className='juegoFondoSpace'>
                                                                    <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>

                                                                    <Resta />

                                                                </div>
                                                            </div>
                                                            : rutaActual == "Multiplicacion" ?
                                                                <div className='space-fondo'>
                                                                    <div className='juegoFondoSpace'>
                                                                        <div className="atras-practica" onClick={() => setCounter(3)}><button><img src="/img/libro-abierto.png" /></button></div>

                                                                        <Mulpiplicacion />

                                                                    </div>
                                                                </div>
                                                                : <h1></h1>


                            : counter == 5 ? Actualiza() : <div><Felicitaciones Link="/Numeracion/Start" /></div>
    )
}
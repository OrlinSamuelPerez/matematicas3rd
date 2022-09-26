import { useState } from "react";

export default function NumeroPares(){
    const [estadoJuego, setEstadoJuego] =useState(false)
    const [juegoMensajeActivo, setMensajeJuegoActivo] = useState("")
    const [counter, setCounter] = useState(0)

   const ImagenesDinamica = ()=>{
        const imagen = [
             "https://i.pinimg.com/564x/1f/f2/b7/1ff2b779b96d5cb29e2b45151480588c.jpg",
            "https://i.pinimg.com/564x/26/d9/ad/26d9adba72f9b3b1dc8e03aa7806f49e.jpg",
            "https://i.pinimg.com/564x/c2/9e/dc/c29edc4f49bfbe64960816ef4b2e87a6.jpg",
            "https://i.pinimg.com/564x/01/b0/30/01b0305cfecafbb3337a274e6730cf8a.jpg",
            "https://i.pinimg.com/564x/93/4c/09/934c0940c70cae8c9f7f9d78e9fb36b8.jpg"
        ]
        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
        
        const imagenPosicion = imagen[random(0,4)]
        const cantidadDeImagenesPantalla =random(2, 12)
        const array = []
        for (var i = 1; i < cantidadDeImagenesPantalla + 1 ; i++) {
            array.push("")
         }
         const validar =(valor)=>{
            if(array.length%2==0 && valor == "par"){
                setEstadoJuego(true)
                setMensajeJuegoActivo("FELICIDADES EL NUMERO ERA PAR")
                setCounter(counter + 1)
            }else if(array.length%2!=0 && valor == "impar"){
                setEstadoJuego(true)
                setMensajeJuegoActivo("FELICIDADES EL NUMERO ERA IMPAR")
                setCounter(counter + 1)

            }
            else{
                if(array.length%2==0 ){
                    setEstadoJuego(true)
                    setMensajeJuegoActivo("INCORRECTO EL NUMERO ERA PAR")
                }if(array.length%2!=0 ){
                    setEstadoJuego(true)
                    setMensajeJuegoActivo("INCORRECTO EL NUMERO ERA IMPAR")
                }
            }
         }
        return(
            <div>
                <h1 className="h1numeropares">Cuenta las imagenes y determina si es par o impar</h1>
                <div className="imagennumerospares">
                    {array.map(e=>
                        <div><img src={imagenPosicion}/></div>
                    )}
                </div>
                <div className="par-impar-boton">
                    <button onClick={()=>validar("par")}>Par</button>
                    <button onClick={()=>validar("impar")}>Impar</button>
                </div>
            </div>
        )
   }
   const Tiempo =()=>{
    setTimeout(()=>{setEstadoJuego(false)}, 2000)
    return(
        <h1 className="juegomensaje">{juegoMensajeActivo}</h1>
    )
   }
    return(
        <div>
            {
                counter==10?
                <h1>Pon lo que tu vaya a poner, o sea huevo</h1>
                :estadoJuego ==false?
                    <ImagenesDinamica/>
                :<Tiempo/>

            }
        </div>
    )
}
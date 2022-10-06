import { useState } from "react"

export default function Simetria(){
    const [counter, setCounter] = useState(0)
    const fotos = [
        {titulo:"La siguiente imagen es simetrica", img:"/Img/estrella-simetrica.png", validar:"simetrico"},
        {titulo:"La siguiente imagen es simetrica", img:"/Img/mariposa.png", validar:"asimetrico"},
        {titulo:"La siguiente imagen es simetrica", img:"/Img/corazon.png", validar:"simetrico"},
        {titulo:"La siguiente imagen es simetrica", img:"/Img/circulo-sime.png", validar:"asimetrico"},
        {titulo:"La siguiente imagen es simetrica", img:"/Img/diferentescuadros.png", validar:"asimetrico"},
    ]
    const comprobar = (validar)=>{
        console.log(fotos[counter].validar == validar)
        if(validar == fotos[counter].validar){
            console.log("aa")
            setCounter(counter + 1)
        }
        else{
            console.log("aam")
            setCounter(counter + 1)

        }
    }
    return(
        <div className="simetria">
            <h3>{fotos[counter].titulo}</h3>
            <div>
                <img src={fotos[counter].img}/>
            </div>
            <div className="simetria-sino">
                <button onClick={()=>comprobar("simetrico")}>SI</button>
                <button onClick={()=>comprobar("asimetrico")}>NO</button>
            </div>

        </div>
    )
}
import Link from "next/link";

export default function Felicitaciones(props){
    return(
        <div className="Felicitaciones">
            <div>
            <h1>FELICITACIONES PASASTE EL NIVEL</h1>
            <Link href={props.Link}><button><a>Continuar</a></button></Link> 
            </div>
        </div>
    )
}
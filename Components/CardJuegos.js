export default function CardJuegos(props){
    return(
        <div className="juego">
            <h1>Vamos A Jugar</h1>
            <iframe  src={props.linkJuego} />
            <div className="siguiente-espacial"><button onClick={props.Continuar} >Continuar</button></div>

        </div>
    )
}
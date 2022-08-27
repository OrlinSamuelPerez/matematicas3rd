export default function DialogoPersonaje(props){
    return(
        <>
        <style>
        {`
            .img-div{
                width:100%;
                height:100%;
                background: #292349;
                background-image: url(${props.img});
                background-position: center;
                background-size: cover;
    border-radius: 20px;

            }
       
        `
        }
         </style>
        <div>
           
            <div className="dialogo">
                <div className="img-div">
                </div>
                <div>
                    <h1>{props.titulo}</h1>
                    <p>{props.dialogo}</p>
                </div>
            </div>
        </div>
        </>
    )
}
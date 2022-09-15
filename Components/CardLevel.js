import Link from "next/link"
export default function CardLevel(props) {
  return (
    <>
      <style jsx>{`
        .cardlevelmain{
          background-color:${props.color};
          width:100%;
          color:white;
          height: 90%;
          box-shadow: -16px 25px 28px rgba(0, 0, 0, 0.25);
          border-radius: 50px;
          

        }
        .img-personaje{
          background-image: url(/img/${props.img});
          background-position: center;
          background-size: cover;
          width:40%;
          height:40%;
          margin-bottom:40px;
        }
        .not-active { 
          pointer-events: none; 
          cursor: default; 
      } 
      `}</style>
    { 
    <div className={props.clasDesabilitar}>
      <Link  href={props.id}>
        <a>
          <div className="cardLevel " >
              <div className="cardlevelmain">
                {props.numero}
                <p>{props.nombre}</p>
                <div className="img-personaje"></div>

                </div>
        </div>
        </a>
    </Link>
    </div>
    }
    </>
  )
}

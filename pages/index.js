import Link from 'next/link';
import { useState } from 'react';
export default function Home() {
  const [counter, setCounter] = useState(0)
  const handleClick1 = () => {
    if(counter < 4){
      setCounter(counter + 1)
    }
    else{
      setCounter(0)
    }
}
const handleClick2=()=>{
  if(counter == 0){
    setCounter(3)

  }
  else{
    setCounter(counter - 1)
  }
}
  return (
    <div>
      {
      counter == 0?
      <div className="HomeWork-monster">
              <div>
                <h1 className='numeraciontitulo'>Numeración</h1>

                  <div className='centrar'>
                  <Link href="/Numeracion/Start">
                      <a><button className='empezar-estadistica'>Empezar</button></a>
                  </Link>
                  </div>
                  <div className='bosquedivertido'>
                    <p>Explora el espacio infinito de los números.</p>
                  </div>
              </div>
      </div>:counter == 1?
      <div className="geometria-fondo">
          <div>
            <h1 className='geometriatitulo'>Geometría</h1>
              <div className='centrar'>
              <Link href="/Geometria/Start">
                  <a><button className='empezar-geomteria'>Empezar</button></a>
              </Link>
              </div>
              <div className='bosquedivertido'>
                <p>Explorar el bosque de figuras es divertido.</p>
              </div>
          </div>
    </div>
      :counter == 2?
      <div className="medicion-fondo">
          <div>
            <h1 className='mediciontitulo'>Medición</h1>
              <div className='centrar'>
              <Link href="/Medicion/Start">
                  <a><button className='empezar-medicion'>Empezar</button></a>
              </Link>
              </div>
              <div className='bosquedivertido'>
                <p>Explora el océano de las mediciones.</p>
              </div>
          </div>
    </div>
      :<div className="estadistica-fondo">
      <div>
        <h1 className='estadisticatitulo'>Estadística Elemental</h1>
          <div className='centrar'>
          <Link href="/EstadisticaElemental/Start">
              <a><button className='empezar-estadistica'>Empezar</button></a>
          </Link>
          </div>
          <div className='bosquedivertido'>
                <p>Explora el mundo de los piratas con la estadística elemental.</p>
              </div>
      </div>
</div>

      }
    <div className='botton-hero izquierdo' onClick={handleClick2} ><img src='/img/flecha-izquierda.png'/></div>
    <div className='botton-hero derecho' onClick={handleClick1}><img src='/img/flecha-izquierda.png'/></div>
  </div>
  )
}
 
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
                <h1 className='numeraciontitulo'>Numeracion</h1>

                  <div className='centrar'>
                  <Link href="/Numeracion/Start">
                      <a><button className='empezar-estadistica'>Empezar</button></a>
                  </Link>
                  </div>
                  <div className='bosquedivertido'>
                    <p>Explorar el espacio infinito de los numero</p>
                  </div>
              </div>
      </div>:counter == 1?
      <div className="geometria-fondo">
          <div>
            <h1 className='geometriatitulo'>Geometria</h1>
              <div className='centrar'>
              <Link href="/Geometria/Start">
                  <a><button className='empezar-geomteria'>Empezar</button></a>
              </Link>
              </div>
              <div className='bosquedivertido'>
                <p>Explorar el bosque de figuras es divertido</p>
              </div>
          </div>
    </div>
      :counter == 2?
      <div className="medicion-fondo">
          <div>
            <h1 className='mediciontitulo'>Medición</h1>
              <div className='centrar'>
              <Link href="/Geometria/Start">
                  <a><button className='empezar-medicion'>Empezar</button></a>
              </Link>
              </div>
              <div className='bosquedivertido'>
                <p>Explorar el oceano de las mediciones</p>
              </div>
          </div>
    </div>
      :<div className="estadistica-fondo">
      <div>
        <h1 className='estadisticatitulo'>EStadistica Elemental</h1>
          <div className='centrar'>
          <Link href="/Geometria/Start">
              <a><button className='empezar-estadistica'>Empezar</button></a>
          </Link>
          </div>
          <div className='bosquedivertido'>
                <p>El mundo de los piratas elementales</p>
              </div>
      </div>
</div>

      }
    <div className='botton-hero izquierdo' onClick={handleClick2} ><img src='/img/flecha-izquierda.png'/></div>
    <div className='botton-hero derecho' onClick={handleClick1}><img src='/img/flecha-izquierda.png'/></div>
  </div>
  )
}
 
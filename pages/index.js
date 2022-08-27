import Link from 'next/link';
export default function Home() {
  return (
    <div className="HomeWork-monster">
      <div>
        <div className='space-img'>
          <img src='/img/spacenumeracion.png'/>
        </div>
        <div className='centrar'>
          <Link href="/Numeracion/Start">
            <a><button className='empezar'>EMPEZAR</button></a>
          </Link>
        </div>
        <div className='triangulo'></div>
        <div className='triangulo-2'></div>
        <div className='triangulo-3'></div>
        <div className='triangulo-4'></div>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
        <div className='circle-4'></div>
      </div>
      
    </div>
  )
}
 
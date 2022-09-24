import '../styles/globals.css'
import '../styles/Login.css'
import '../styles/Home.css'
import '../styles/geometria.css'
import '../styles/medicion.css'
import '../styles/multiplicacion.css'
import '../styles/estadisticaelemental.css'
import Head from 'next/head';
import Login from './Login';
import { useState } from 'react';
import { auth } from '../BD/Configuracion';
import Navegacion from '../Components/Navegacion';
import { googleAnalitycs } from '../Service/googleAnalitycs'
import { tiempoDentrodeAplicacion } from '../Service/TiempoEnAplicacion'
tiempoDentrodeAplicacion()
googleAnalitycs()
function MyApp({ Component, pageProps }) {
  const [userName, setuserName] = useState(null);
   return (
    	
    <>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Michroma&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
         <title>Tecer Grado</title>
      </Head>
      {auth.onAuthStateChanged((user) => {
        setuserName(user);
       
      })}
      {userName ? (
         <Navegacion><Component {...pageProps} /></Navegacion>
        ) : (
        <Login />
      )}
</>
    )
}

export default MyApp

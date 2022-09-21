import { useState } from "react"


export default function ValorPosicion(){
    const [counter, setCounter] = useState(0)
    
    const Unidad = ()=>{
        const img =[{img:"https://i.pinimg.com/564x/09/c8/5c/09c85c7611054e1ca6043e1c21442ff4.jpg", validar:true}, {img:"https://i.pinimg.com/564x/e2/09/48/e2094847382a7e8329cfac4d42cc04bd.jpg",  validar:false}, {img:"https://i.pinimg.com/564x/fc/57/58/fc5758c8caf703d795f67a3679bd8f10.jpg",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <p>La unidad es el elemento entero más pequeño que se utiliza para contar y para representar cifras. Por ejemplo: 1 manzana. 5 lápices.4</p>
                <div>
                    <h4>Elige la imagenes que solo tienen una unidad</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><img onClick={()=>validar(e.validar)} src={e.img}/></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad1 = ()=>{
        const img =[{img:"https://i.pinimg.com/564x/9c/f9/a6/9cf9a649f26f20d88866496ab2b3c1c4.jpg", validar:false}, {img:"https://i.pinimg.com/564x/09/c8/5c/09c85c7611054e1ca6043e1c21442ff4.jpg", validar:true}, {img:"https://i.pinimg.com/564x/01/c9/6e/01c96e40cd0e4f775d3a8ae61f85efd9.jpg",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <p>La unidad es el elemento entero más pequeño que se utiliza para contar y para representar cifras. Por ejemplo: 1 manzana. 5 lápices.4</p>
                <div>
                    <h4>Elige la imagenes que solo tienen una unidad</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><img onClick={()=>validar(e.validar)} src={e.img}/></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad2 = ()=>{
        const img =[{numero:"300", validar:false}, {numero:"10", validar:true}, {numero:"150",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene una decena</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad3 = ()=>{
        const img =[{numero:"600", validar:false}, {numero:"1000", validar:false}, {numero:"30",  validar:true}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene una decena</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad4 = ()=>{
        const img =[{img:"https://i.pinimg.com/564x/9c/f9/a6/9cf9a649f26f20d88866496ab2b3c1c4.jpg", validar:false}, {img:"https://i.pinimg.com/564x/09/c8/5c/09c85c7611054e1ca6043e1c21442ff4.jpg", validar:true}, {img:"https://i.pinimg.com/564x/01/c9/6e/01c96e40cd0e4f775d3a8ae61f85efd9.jpg",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <p>La unidad es el elemento entero más pequeño que se utiliza para contar y para representar cifras. Por ejemplo: 1 manzana. 5 lápices.4</p>
                <div>
                    <h4>Elige la imagenes que solo tienen una unidad</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><img onClick={()=>validar(e.validar)} src={e.img}/></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad5 = ()=>{
        const img =[{numero:"600", validar:true}, {numero:"10,000", validar:false}, {numero:"50",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene una centena</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad6 = ()=>{
        const img =[{numero:"3,000", validar:false}, {numero:"800", validar:true}, {numero:"90",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene una centena</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad7 = ()=>{
        const img =[{numero:"60", validar:true}, {numero:"1000", validar:false}, {numero:"1",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene una decena</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad8 = ()=>{
        const img =[{numero:"700", validar:true}, {numero:"1000", validar:false}, {numero:"1200",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene una centena</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad9 = ()=>{
        const img =[{numero:"600", validar:false}, {numero:"10,000", validar:false}, {numero:"1000",  validar:true}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene UNIDAD DE MILLAR</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad10 = ()=>{
        const img =[{numero:"10,000", validar:true}, {numero:"800", validar:false}, {numero:"980",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                <h4>Elige la imagenes que tiene DECENA DE MILLAR</h4>


                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad11 = ()=>{
        const img =[{numero:"600", validar:false}, {numero:"60,000", validar:true}, {numero:"1000",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                    <h4>Elige la imagenes que tiene DECENA DE MILLAR</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const Unidad12 = ()=>{
        const img =[{numero:"3,000", validar:true}, {numero:"800", validar:false}, {numero:"90",  validar:false}]
       const validar = (validar)=>{
            if(validar == true){
                console.log("verdadero")
                setCounter(counter + 1  )
            }else{
                console.log("Falso")
            }
       }
        return(
            <div className="unidad">
                <div>
                <h4>Elige la imagenes que tiene UNIDAD DE MILLAR</h4>

                </div>
                <div className="grid-unidad">
                    {img.map(e=>
                    <div ><h1 onClick={()=>validar(e.validar)} >{e.numero}</h1></div>   
                    )}
                </div>
            </div>
        )
    }
    const EligirNumero = ()=>{
        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
        let numeroAleatorio = random(0,15000)
        const comprobar = (valor)=>{
            if(numeroAleatorio > 0 && numeroAleatorio < 10 && valor =="unidad"   ){
                console.log("Correcto")
            }
            else if(numeroAleatorio > 10 && numeroAleatorio < 100 && valor =="decena"   ){
                console.log("Correcto")
            }
            else if(numeroAleatorio >= 100 && numeroAleatorio < 1000 && valor =="centena"   ){
                console.log("Correcto")
            }
            else if(numeroAleatorio >= 1000 && numeroAleatorio < 10000 && valor =="unidadmillar"   ){
                console.log("Correcto")
            }else if(numeroAleatorio >= 10000 && valor == "decenamillar"){
                console.log("Correcto")
            }
            else{
                console.log("Incorrecto")
            }

        }
        return(
            <div>
                <h1>Este numero {numeroAleatorio} corresponde a:</h1>
                <div><button onClick={()=>comprobar("unidad")}>Unidad</button></div>
                <div><button onClick={()=>comprobar("decena")}>Decena</button></div>
                <div><button onClick={()=>comprobar("centena")}>Centena</button></div>
                <div><button onClick={()=>comprobar("unidadmillar")}>Unidad Millar</button></div>
                <div><button onClick={()=>comprobar("decenamillar")}>Decena Millar</button></div>
            </div>
        )
    }
    return(
        <div className="valorposicion">
            {counter==0?
                <Unidad/>
            :counter==1?
                <Unidad1/>
            :counter ==2?
                <Unidad2/>
            :counter == 3?
                <Unidad3/>
            :counter ==4?
                <Unidad4/>
            :counter==5?
                <Unidad5/>
            :counter ==6?
                <Unidad6/>
            :counter==7?
                <Unidad7/>
            :counter==8?
                <Unidad8/>
            :counter==9?
                <Unidad9/>
            :counter ==10?
                <Unidad10/>
            :counter==11?
                <Unidad11/>
            :counter ==12?
                <Unidad12/>
            :counter==13?
                <Unidad9/>
            :counter==14?
                <Unidad6/>
            :counter ==15?
                <Unidad12/>
            :counter == 16?
                <Unidad3/>
            :counter ==17?
                <Unidad10/>
            :counter==18?
                <Unidad8/>
            :counter ==19?
                <Unidad1/>
            :counter==20?
                <Unidad7/>
            :counter==21?
                <Unidad4/>
            :counter==22?
                <Unidad/>
            :counter ==23?
                <Unidad5/>
            :counter==24?
                <Unidad11/>
            :counter ==25?
            <Unidad2/>      
            :<EligirNumero/>
        }
        </div>
    )
}
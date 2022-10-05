import { useState } from "react";

export default function Congruencia(){
    const [counter, setCounter] = useState(0)
    const figuras = [
        {imagen:'/img/estrella.png', nombreFigura:"estrella"},
        {imagen:'/img/hexagono.png', nombreFigura:"hexagono"},
        {imagen:'/img/circulo.png', nombreFigura:"circulo"},
        {imagen:'/img/octagono.png', nombreFigura:"octagono"},
        {imagen:'/img/pentagono.png', nombreFigura:"pentagono"},
        {imagen:'/img/rectangulo.png', nombreFigura:"rectangulo"},
        {imagen:'/img/rombo.png', nombreFigura:"rombo"},
        {imagen:'/img/triangulo.png', nombreFigura:"triangulo"},

    ]
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    const validar = (validar)=>{
        if(validar == true){
            setCounter(counter + 1)
        }
    }
    const ImagenEstatica = ()=>{
        const imagen = figuras[random(0,7)]
        const i = ["", "", ""]
        return(
            <div className="igual">
                { i.map(e=>
                    <div><img src={imagen.imagen}/></div>
                )   
                 }
            </div>
        )
    }

    const ImagenesAleatoria = ()=>{
        return(
            <div className="aleatoria">
                <div><img src={figuras[random(0,7)].imagen}/></div>
                <div><img src={figuras[random(0,7)].imagen}/></div>
                <div><img src={figuras[random(0,7)].imagen}/></div>
            </div>
        )
    }
    const Juego1 = ()=>{
        return(
            <>
             <h3>Cuales de las siguientes imagenes son congruentes</h3>
             <div className="congruencia">
                <div onClick={()=>validar(false)}><ImagenesAleatoria/></div>
                <div onClick={()=>validar(true)} ><ImagenEstatica/></div>
                <div onClick={()=>validar(false)}><ImagenesAleatoria/></div>

            </div>
            </>
        )
        
    }
    const Juego2 = ()=>{
        return(
            <>
             <h3>Cuales de las siguientes imagenes no son congruentes</h3>
             <div className="congruencia">
                <div onClick={()=>validar(false)}><ImagenEstatica/></div>
                <div onClick={()=>validar(false)}><ImagenEstatica/></div>
                <div  onClick={()=>validar(true)}><ImagenesAleatoria/></div>

            </div>
            </>
        )
        
    }
    const Juego3 = ()=>{
        return(
            <>
             <h3>Cuales de las siguientes imagenes son congruentes</h3>
             <div className="congruencia">
                 <div  onClick={()=>validar(true)}><ImagenEstatica/></div>
                <div onClick={()=>validar(false)}><ImagenesAleatoria/></div>
                <div onClick={()=>validar(false)}><ImagenesAleatoria/></div>

            </div>
            </>
        )
        
    }
    const Juego4 = ()=>{
        return(
            <>
             <h3>Cuales de las siguientes imagenes no son congruentes</h3>
             <div className="congruencia">
                <div  onClick={()=>validar(true)}><ImagenesAleatoria/></div>
                 <div onClick={()=>validar(false)}><ImagenEstatica/></div>
                 <div onClick={()=>validar(false)}><ImagenEstatica/></div>

            </div>
            </>
        )
        
    }
    const drag = (e) => {
        //Aqui se obtiene el numero arratrado, el valor es el de id
        e.dataTransfer.setData("text", e.target.id)
    }
    let array6 = ["", ""]

    const drop = (e) => {
         //Para btener el id arrastrado
         if (array6[parseInt(e.target.id)] == "") {
            let data = e.dataTransfer.getData("text")
            //agrego el arreglo del elemento al elmento soltado
            array6[parseInt(e.target.id)] = data;
            //que se agregue al cuadro sleccioonad
            e.target.style.backgroundImage = `url(${data})`
            e.target.style.backgroundSize = "80%"
            e.target.style.backgroundPosition = "center"
            e.target.style.backgroundRepeat = "no-repeat"
           console.log(data)
        }
        if (array6[0] != "" && array6[1] != "" ) {
            if ((array6[0] == "http://localhost:3000/Img/rombo.png" || array6[1]== "http://localhost:3000/Img/circulo.png") ) {
                console.log("aa")

            }
            else {
                console.log("aaaa")
                



            } 
        }
    }
    const allowdrop = (e) => {
        e.preventDefault()
    } 
    const Juego5 = ()=>{
        return (
            <div className="secuencia">
                <h3>Ordena las figuras de manera congruente</h3>

                <div className="grid-congruencia-main">
                    <div className="congruencia-grid">
                        <div className="grid-congru">
                            <div><img src="/Img/rombo.png"/></div>
                            <div className="box-drop" id="0" onDragOver={allowdrop} onDrop={drop}></div>
                        </div>
                        <div className="grid-congru">
                            <div><img src="/Img/circulo.png"/></div>
                            <div className="box-drop" id="1" onDragOver={allowdrop} onDrop={drop}></div>
                        </div>
                    
                    </div>
                    <div><hr></hr></div>
                    <div className="drag-congruencia">
                        <div className="drag-d" draggable="true" id="/img/circulo.png" onDragStart={drag}><img src="/Img/circulo.png"/></div>
                        <div className="drag-d" draggable="true" id="/img/estrella.png" onDragStart={drag}><img src="/Img/estrella.png"/></div>
                        <div className="drag-d" draggable="true" id="/img/rombo.png" onDragStart={drag}><img src="/Img/rombo.png"/></div>
                        <div className="drag-d" draggable="true" id="/img/recatangulo.png" onDragStart={drag}><img src="/Img/recatangulo.png"/></div>
                        <div className="drag-d" draggable="true" id="/img/triangulo.png" onDragStart={drag}><img src="/Img/triangulo.png"/></div>
                        <div className="drag-d" draggable="true" id="/img/octagono.png" onDragStart={drag}><img src="/Img/octagono.png"/></div>
                    
                    </div>
                </div> 

            </div>

        )
    }
    return(
        <div className="congruencia-main">
            {counter==0?
                <Juego1/>
                :counter == 1?
                <Juego2/>:
                counter==3?
                <Juego3/>
                :counter==4?
                <Juego4/>
                :<Juego5/>
        }
        </div>
    )
}
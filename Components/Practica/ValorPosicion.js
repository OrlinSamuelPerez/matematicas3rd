import { useState } from "react"

export default function ValorPosicion() {
    const [counter, setCounter] = useState(0)

    const Ejercicio1 = () => {
        const img = [{ img: "/img/1.png", validar: true }, { img: "/img/2.png", validar: false }, { img: "/img/3.png", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <p>La unidad es el elemento entero más pequeño que se utiliza para contar y para representar cifras.</p>
                <div>
                    <h4>Elige la imagen que tiene 1 unidad.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><img onClick={() => validar(e.validar)} src={e.img} /></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio2 = () => {
        const img = [{ img: "/img/1.png", validar: false }, { img: "/img/2.png", validar: true }, { img: "/img/3.png", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Elige la imagen que tiene 4 unidades</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><img onClick={() => validar(e.validar)} src={e.img} /></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio3 = () => {
        const img = [{ numero: "Centena", validar: true }, { numero: "Decena", validar: false }, { numero: "Unidad ", validar: false },]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>En el número 5,782; ¿Qué valor posicional ocupa el dígito 7?</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio4 = () => {
        const img = [{ numero: "Centena", validar: false }, { numero: "Decena de Millar", validar: false }, { numero: "Unidad de Millar", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>En el número 15,783; el dígito 5 ocupa el lugar posicional de la: </h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio5 = () => {
        const img = [{ numero: "4", validar: true }, { numero: "5", validar: false }, { numero: "2", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>¿Cuántos dígitos posee el número 3,525?</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio6 = () => {
        const img = [{ numero: "5", validar: false }, { numero: "1", validar: true }, { numero: "8", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>En el número 15,783; ¿Cuál dígito ocupa el lugar posicional de la decena de millar? </h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio7 = () => {
        const img = [{ numero: "5", validar: true }, { numero: "3", validar: false }, { numero: "4", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>¿Cuántos dígitos posee el número 15,875?</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio8 = () => {
        const img = [{ numero: "230", validar: true }, { numero: "340", validar: false }, { numero: "220", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Elige el número que está formado por 2 centenas y 3 decenas.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio9 = () => {
        const img = [{ numero: "1,750", validar: false }, { numero: "750", validar: true }, { numero: "33", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Elige el número que tiene 3 dígitos.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio10 = () => {
        const img = [{ numero: "6", validar: false }, { numero: "2", validar: false }, { numero: "3", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>En el número 326, ¿Cuál dígito ocupa el valor posicional de la centena?</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio11 = () => {
        const img = [{ numero: "Centena", validar: true }, { numero: "Decena", validar: false }, { numero: "Unidad", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>En el número 78,524; el dígito 5 ocupa el valor posicional de la: </h4>


                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio12 = () => {
        const img = [{ numero: "25,200", validar: false }, { numero: "25,020", validar: true }, { numero: "25,002", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Elige el número formado por 2 decenas de millar, 5 unidades de millar y 2 decenas.</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio13 = () => {
        const img = [{ numero: "302", validar: true }, { numero: "320", validar: false }, { numero: "203", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Elige el número formado por 3 centenas y 2 unidades.</h4>

                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio14 = () => {
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Escribe el número representado y su composición</h4>
                </div>
                <div className="grid-unidad">

                    <div ><img onClick={() => validar(e.validar)} src="/img/img1.png" /></div>

                </div>
                <input type="number" max={9} min={0} />C + <input type="number" max={9} min={0} />D + <input type="number" max={9} min={0} />U <br></br>
                <input type="number" min={0} />

            </div>
        )
    }
    const Ejercicio15 = () => {
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Escribe el número representado y su composición</h4>
                </div>
                <div className="grid-unidad">

                    <div ><img onClick={() => validar(e.validar)} src="/img/img2.png" /></div>

                </div>
                <input type="number" max={9} min={0} />UM +<input type="number" max={9} min={0} />C + <input type="number" max={9} min={0} />D + <input type="number" max={9} min={0} />U <br></br>
                <input type="number" min={0} />

            </div>
        )
    }
    const Ejercicio16 = () => {
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>Escribe el número representado y su composición</h4>
                </div>
                <div className="grid-unidad">

                    <div ><img onClick={() => validar(e.validar)} src="/img/img3.png" /></div>

                </div>
                <input type="number" max={9} min={0} />UM +<input type="number" max={9} min={0} />C + <input type="number" max={9} min={0} />D  <br></br>
                <input type="number" min={0} />

            </div>
        )
    }
    const Ejercicio17 = () => {
        const img = [{ numero: "5,000 + 300 + 2", validar: false }, { numero: "500 + 30 + 2", validar: true }, { numero: "5,000 + 30 + 2", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>La descomposición del número 532 es:</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio18 = () => {
        const img = [{ numero: "5,000 + 300 + 2", validar: false }, { numero: "500 + 30 + 2", validar: false }, { numero: "5,000 + 30 + 2", validar: true }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>La descomposición del número 5,032 es:</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio19 = () => {
        const img = [{ numero: "5,000 + 300 + 2", validar: true }, { numero: "500 + 30 + 2", validar: false }, { numero: "5,000 + 30 + 2", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>La descomposición del número 5,302 es:</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    const Ejercicio20 = () => {
        const img = [{ numero: "70,000 + 5,000 + 500 + 20 +8", validar: true }, { numero: "70,000 + 500 + 20 +8", validar: false }, { numero: "70,000 + 5,000 + 20 +8", validar: false }]
        const validar = (validar) => {
            if (validar == true) {
                console.log("verdadero")
                setCounter(counter + 1)
            } else {
                console.log("Falso")
            }
        }
        return (
            <div className="unidad">
                <div>
                    <h4>La descomposición del número 75,528 es:</h4>
                </div>
                <div className="grid-unidad">
                    {img.map(e =>
                        <div ><h1 onClick={() => validar(e.validar)} >{e.numero}</h1></div>
                    )}
                </div>
            </div>
        )
    }
    return (
        <div className="valorposicion">
            {counter == 0 ?
                <Ejercicio1 />
                : counter == 1 ?
                    <Ejercicio2 />
                    : counter == 2 ?
                        <Ejercicio3 />
                        : counter == 3 ?
                            <Ejercicio4 />
                            : counter == 4 ?
                                <Ejercicio5 />
                                : counter == 5 ?
                                    <Ejercicio6 />
                                    : counter == 6 ?
                                        <Ejercicio7 />
                                        : counter == 7 ?
                                            <Ejercicio8 />
                                            : counter == 8 ?
                                                <Ejercicio9 />
                                                : counter == 9 ?
                                                    <Ejercicio10 />
                                                    : counter == 10 ?
                                                        <Ejercicio11 />
                                                        : counter == 11 ?
                                                            <Ejercicio12 />
                                                            : counter == 12 ?
                                                                <Ejercicio13 />
                                                                : counter == 13 ?
                                                                    <Ejercicio14 />
                                                                    : counter == 14 ?
                                                                        <Ejercicio15 />
                                                                        : counter == 15 ?
                                                                            <Ejercicio16 />
                                                                            : counter == 16 ?
                                                                                <Ejercicio17 />
                                                                                : counter == 17 ?
                                                                                    <Ejercicio18 />
                                                                                    : counter == 18 ?
                                                                                        <Ejercicio19 />
                                                                                        : counter == 19 ?
                                                                                            <Ejercicio20 />
                                                                                            : <h1>Fin</h1>
            }
        </div>
    )
}
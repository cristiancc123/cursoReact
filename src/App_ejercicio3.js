import React, { Component } from 'react'
import TarjetaFruta from './componentes/TarjetaFruta/'

/* 
En este ejercicio se muestra como usar un operador spread
para pasar props
*/
const Gato = (props) => (
    <div>
        <h1>Gato!!!</h1>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
)


class App extends Component{
    
    state = {
        fuerza: 100,
        vidasRestantes: 7
    }
    
    render(){
        const otrosDatos = {
            raza: 'Tropical',
            peleasNocturnas: 300
        }

        return(
            <div>
                <Gato
                    name='Garfield'
                    age='2 años'
                    {...otrosDatos}
                    {...this.state}
                />
                <Gato
                    name='Oliver'
                    age='5 años'
                />
            </div>
        )
    }
}


export default App
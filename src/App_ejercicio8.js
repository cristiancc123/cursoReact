/* Renderizar condicionales con React */
import React, { Component } from 'react'


const Saludo = (props) => {

    const saludo1 = "Hola, tu eres genial";
    const saludo2 = "Wops, no hay saludos para ti"

    return (
        /* Se aplica condicional para saber que mensaje mostrar en el componente */
        <div>

            <div>
                { props.name && <strong>{props.name}</strong> }
            </div>

            { props.saluda ? saludo1 : saludo2 }
        </div>
    )
}

const App = () => (
    <div>
        <Saludo saluda={true} name="Cristian"/>
    </div>
)

export default App
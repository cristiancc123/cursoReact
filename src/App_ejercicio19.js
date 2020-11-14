/** Pasar datos al iterar listas con React */

import React, { Component } from 'react'

class App extends Component {

    state = {
        fruits: [
            {name: 'Fresa', price: 9.0 },
            {name: 'Manzana', price: 7.6},
            {name: 'Sandia', price: 6.7},
            {name: 'Guayaba', price: 5.3},
            {name: 'Pera', price: 3.87},
            {name: 'Kiwi', price: 3.4},
            {name: 'Limon', price: 5.2}
        ],

        frutaSeleccionada: {}
    }

    select = (fruta, event) => {
        this.setState({
            frutaSeleccionada: fruta
        })
    }

    render () {
        return(
            <ul>
                { this.state.fruits.map(fruit => (
                    <li key={fruit.name} 
                        onClick={this.select.bind(this,fruit)} 
                        style={{
                            color: this.state.frutaSeleccionada.name === fruit.name ? 'red' : 'black'
                        }}>
                        { fruit.name } - $ { fruit.price }
                    </li>
                ))}
            </ul>
        )
    }
}

export default App
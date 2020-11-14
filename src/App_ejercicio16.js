/** Iterando listas con React */
import React, { Component } from 'react'

const frutas = [
    'fresa',
    'manzana',
    'sandia',
    'kiwi',
    'durazno',
    'mango',
    'pina'
]

class App extends Component {
    render () {
        return(
            <div>
                <ul>
                    {frutas.map((fruta) => {
                        return(
                        <li>{fruta}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default App
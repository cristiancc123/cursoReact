/** Manejando (inputs no controlados) con formularios */
import React, { Component } from 'react'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)

class InputNoControlado extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target[0].value
        const email = event.target[1].value

        //Manejo de datos
        this.props.onSendws({ name, email })
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Nombre'/>
                <input type='text' placeholder='email'/>
                <button>Enviar</button>
            </form>
        )
    }

}

class App extends Component {

    sendww = (data) => {
        console.log(data)
    }

    render() {
        return(
            <div>
                <h1>
                    Inputs No controlados Refs <Unicorn/>
                </h1>
                <InputNoControlado onSendws={this.sendww}/>
            </div>
        )
    }
}

export default App
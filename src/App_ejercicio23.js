/** Manejando Inputs no controlados con Refs */
import React, { Component } from 'react'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
        🦄
    </span>
)

class InputNoControlado extends Component {
    
    nombre = React.createRef()
    email = React.createRef()
    
    handleClick = () => {
        const nombre =  this.nombre.current.value
        const email = this.email.current.value

        //Manejo de datos
        this.props.onSendws({ nombre, email })
    }

    render () {
        return(
            <div>
                <input type="text" ref={this.nombre} placeholder='Nombre'/>
                <input type="text" ref={this.email} placeholder='Email'/>
                <button onClick={this.handleClick}></button>
            </div>
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
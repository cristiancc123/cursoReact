/* CREAR EVENTOS PERSONALIZADOS */
/* Enviar información desde los componentes hijos a los componentes padres */

import React, { Component } from 'react'
import  './estilos/global.css'

class Hijo extends Component{

    manejadorClick = () => {
        this.props.onSaluda('Hola este es un mensaje de prueba')
    }

    render(){
        return(
            <div className='box blue' >
                <h2>Hijo</h2>
                <button onClick={this.manejadorClick} >Saluda</button>
            </div>
        )
    }
}

class App extends Component{

    state = {
        name: ''
    }

    manejador = (nameParameter) => {

        this.setState({
            name: nameParameter
        })

    }

    render () {
        return(
            <div className='box red'>
                <Hijo
                    onSaluda={this.manejador}
                />
                <h1>
                    Nombre: {this.state.name}
                </h1>
            </div>
        )
    }

}

export default App
/** Propagación de datos con inputs controlados */

import React, { Component } from 'react'

class InputControlado extends Component {
    state = {
        text: '',
        tieneError: false,
        color: '#E8E8E8'
    }

    actualizar = (event) => {
        const text = event.target.value
        let color = 'green'

        if(text.trim() === ''){
            color = '#E8E8E8'
        }

        if(text.trim() !== '' && text.trim().length < 5){
            color = 'red'
        }

        this.setState({ text, color })

        //Propagando los datos al padre
        this.props.enCambio( this.props.nombreCampo ,text)
    }

    render(){

        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }

        return(
            <input 
                type="text"
                value={this.state.text}
                onChange={this.actualizar}
                style={styles}/>
        )
    }
}


class App extends Component {

    state = {
        name: '',
        email: ''
    }

    actualizarPadre = (nombreCampo, text) => {
        this.setState({
            [nombreCampo]: text
        })
    }

    render(){
        return(
            <div>
                <h1>Inputs Controlados</h1>
                <InputControlado
                    enCambio={this.actualizarPadre}
                    nombreCampo='name'
                    placeholder='Nombre completo'
                />
                <InputControlado
                    enCambio={this.actualizarPadre}
                    nombreCampo='email'
                    placeholder='Tu email'
                />

                <h2>
                    Nombre: {this.state.name}
                </h2>

                <h2>
                    Email: {this.state.email}
                </h2>
            </div>
        )
    }
}

export default App
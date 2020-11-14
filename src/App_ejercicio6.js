import React, { Component } from 'react'

class PersistenciaEventos extends Component {

    state = {
        color: 'blue'
    }

    handlerChange = (event) => {
        console.log(event.target.value)

        /* El metodo set state es un metodo asincrono */
        this.setState({
            color: event.target.value
        })

    }

    render () {
        return(
            <div>
                <input type="text" onChange={this.handlerChange}>

                </input>
                <h1 style={{color: this.state.color}}>
                    {this.state.color}
                </h1>
            </div>
        )
    }
}

const App = () => (
    <div>
        <PersistenciaEventos />
    </div>
)

export default App
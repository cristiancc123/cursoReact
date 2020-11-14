/** Ejemplo de formulario con opciones de selección */
import React, { Component } from 'react'

class App extends Component {

    state = {
        tech: 'React'
    }

    handleChange = (event) => {
        this.setState({
            tech: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>
                    Etiqueta Select
                    <br></br>
                    { this.state.tech }
                </h1>
                <form>
                    <select value={this.state.tech} onChange={this.handleChange}>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="React">React</option>
                        <option value="Vanilla">Vanilla</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default App
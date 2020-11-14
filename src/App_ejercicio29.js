/** Ejemplo de formulario con opciones de Selección Multiple */
import React, { Component } from 'react'

class App extends Component {

    state = {
        techs: ['React']
    }

    handleChange = (event) => {

        const techs = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        )

        this.setState({ techs })
    }

    render() {
        return(
            <div>
                <h1>
                    Etiqueta Select
                </h1>
                <form>
                    <select multiple value={this.state.techs} onChange={this.handleChange}>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="React">React</option>
                        <option value="Vanilla">Vanilla</option>
                    </select>
                </form>

                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App
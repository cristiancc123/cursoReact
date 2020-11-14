/** Ejemplo de Input Checkbox */
import React, { Component } from 'react'

class App extends Component {

    state = {
        active: false
    }

    handleChange = (event) => {
        this.setState({
            active: event.target.checked
        })
    }

    render() {
        return(
            <div>
                { this.state.active && ( 
                    <h1>
                         Etiqueta Checkbox
                    </h1>
                )}
                
                <form>
                    <input 
                        type="checkbox" 
                        checked={this.state.active}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default App
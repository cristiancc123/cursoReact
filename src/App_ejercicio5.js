import React , { Component } from 'react'



class App extends Component {

    state = {
        text: '',
        event: ''
    }

    manejador = (evento) => {
        this.setState({
            text: evento.target.value,
            event: evento.type
        })
    }

    render(){
        return(
            <div>
                <input type="text"
                    onChange={this.manejador}
                    onCopy={this.manejador}
                    onPaste={this.manejador}>         
                </input>

                <h1>
                    {this.state.text}
                </h1>
                <h2>
                    {this.state.event}
                </h2>
            </div>
        )
    }

}

export default App
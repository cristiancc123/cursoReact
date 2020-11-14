/** Usanso las refs de react */

import React, { Component } from 'react'

class Entrada extends Component{

    entradaRef = React.createRef()

    focus = () => {
        this.entradaRef.current.focus();
        console.log(this.entradaRef);
    }

    blur = () => {
        this.entradaRef.current.blur();
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.entradaRef}/>
                <button onClick={this.focus}>
                    focus
                </button>
                <button onClick={this.blur}>
                    blur
                </button>
            </div>
        )
    }
}


class App extends Component {
    render(){
        return(
            <div>
                <h1>React Refs</h1>
                <Entrada/>
            </div>
        )
    }
}

export default App
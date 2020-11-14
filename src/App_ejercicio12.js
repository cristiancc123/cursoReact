/** Elementos sin etiquetas con fragments 
 * 
 * Con fragment puedo unir las dos listas de computacion y ropa 
 * y quedaria como una sola
 * 
*/
import React, {Component, Fragment } from 'react'

const Computacion = () => (
    <Fragment>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Teclado</li>
    </Fragment>
)

const Ropa = () => (
    <Fragment>
        <li>Playera</li>
        <li>Jeans</li>
        <li>Shorts</li>
    </Fragment>
)

class App extends Component {
    render(){
        return (
            <div>
                <Computacion/>
                <Ropa/>
            </div>
        )
    }
}

export default App;
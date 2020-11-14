import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta/'

/* 
En este ejercicio se muestra como se puede mutar 
el estado de un componente con una funcion
*/

/* Mutando el estado de componente con una funcion */
class Contador extends React.Component{
    
    state = {
        video: {
            title: 'Super Video e',
            likes: 0
        }
    }

    add = () => {
        this.setState( (state) => ({
            video: {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }

    render () {
        return(
            <div>
                <h1>
                    {this.state.video.title}
                </h1>
                <button onClick={this.add}>
                Likes: ({this.state.video.likes})
                </button>
            </div>
        
        )
    }

}

const App = () => (
    <div>
        <Contador />
    </div>
)


export default App
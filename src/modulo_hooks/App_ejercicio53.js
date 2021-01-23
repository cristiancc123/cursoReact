/** Hook useState */
import React, { Component, useState } from 'react'

const Header = () => {
    const styles = {
      background: 'linear-gradient(20deg, #6813cb, #2575fc)',
      textAlign: 'center',
      borderRadius: '0.2em',
      color: '#FFF',
      padding: '0.3em',
      margin: '0.3em',
      fontSize: '14px'
    }
  
    return (
      <header style={styles}>
        <h1>
          Hook useState
          <span
            role='img'
            aria-label='hook emoji'
          >
            ⚓
          </span> 
        </h1>
      </header>
    )
  }

/* Como se usaba antes los estados */
// class App extends Component {
//   state = {
//     clicks: 0
//   }

//   addClicks = () => {
//     this.setState(state => ({
//       clicks: state.clicks + 1
//     }))
//   }

//   render () {
//     const { clicks } = this.state
//     return (
//       <div>
//         <Header />
//         <button onClick={this.addClicks}>
//           Clicks ({ clicks })
//         </button>
//       </div>
//     )
//   }
// }

const App = () => {

    //Por destructuracion, la primera posicion contiene el valor del estado, y la segunda posicion contiene la funcion para actualizar ese estado
    const [ clicks, setClicks ] = useState(0)
    const [ edad, aumentarEdad ] = useState(10)

    const addClicks = () => {
        setClicks(clicks + 1)
    }

    const agregarEdad = () => {
        aumentarEdad(edad + 5)
    }

    return(
        <div>
            <Header />
            <button onClick={addClicks}>
                Agregar click
            </button>
            <button onClick={agregarEdad}> 
                Agregar edad
            </button>
            <p>La cantidad de clicks es {clicks}</p>
            <p>La edad actual es {edad}</p>
        </div>
    )

}

export default App
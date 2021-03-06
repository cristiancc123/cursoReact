/** Como usar el componente Link */
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = (props) => {
  console.log(props)
  return (
    <h1>Home</h1>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const Navegation = () => (
  <nav style={navStyles}>
    <Link to={{
      pathname: '/',
      search: '?ordenar=nombre',
      hash: '#hash-otro',
      state: {
        name: 'Ninja PRO',
        age: 25
      }
    }}>Home </Link>
    <Link to='/hola'>Hola </Link>
    <Link to='/productos'>Productos </Link>
  </nav>
)

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/hola' render={Hola} />
      <Route path='/productos' render={Productos}/>
    </BrowserRouter>
  )
}

export default App
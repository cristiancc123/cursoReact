/** Estilizando Elementos Anidados en styled-components */
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: linear-gradient(20deg, #db7093, #daa357);
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;

  h1 {
    color: purple;
  }

  div {
    width: 50px;
    height: 50px;
    background: #000;
  }
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
        <div>-</div>
        <div>*</div>
      </Header>
    </div>
  )
}

export default App
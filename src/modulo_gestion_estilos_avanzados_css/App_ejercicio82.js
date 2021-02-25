/** Pseudo Clases CSS */
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
  transition: all 350ms ease-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    background: #000;

    h1 {
      color: red;
    }
  }

  h1 {
    color: purple;
  }
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>
    </div>
  )
}

export default App
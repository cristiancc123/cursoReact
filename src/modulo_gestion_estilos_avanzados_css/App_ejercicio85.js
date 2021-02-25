/** extendiendo estilos con styled-components */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: #db7093;
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;
`

const Button = styled.button`
  padding: 0.6em 1.5em;
  background: ${(props) => props.bg || 'black'};
  border-radius: 0.1em;
  color: #FFF;
  border: 0;
  margin: 0.4em;
`

const ButtonSpecial = styled(Button)`
  color: gray;
  transition: all 300ms ease-out;

  &:hover {
    transform: scale(1.3);
  }
`

const Move = ({ className }) => {
  const [ mouseX, setMouseX ] = useState(0)

  const handleMove = (e) => {
    setMouseX(e.clientX)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <div className={className}>
      { mouseX }
    </div>
  )
}

const MoveStyled = styled(Move)`
  background: yellow;
  font-size: 30px;
  height: 200px;
  text-align: center;
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
      </Header>

      <Button>
        Un Boton
      </Button>

      <ButtonSpecial>
        Special
      </ButtonSpecial>

      <MoveStyled />
    </div>
  )
}

export default App
/** Animaciones con libreria reveal */
import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import Rotate from 'react-reveal/Rotate'

const App = () => {
  return (
    <div>
      <section>
        <h3>Ejemplo de Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio nulla distinctio eius, consequuntur, blanditiis nostrum dignissimos laudantium deserunt dolorum numquam eaque! Sit nostrum, iste autem officiis adipisci est in!
        </p>
      </section>
      <section>
        <h3>Ejemplo de Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio nulla distinctio eius, consequuntur, blanditiis nostrum dignissimos laudantium deserunt dolorum numquam eaque! Sit nostrum, iste autem officiis adipisci est in!
        </p>
      </section>
      <Zoom>
        <section>
          <h3>Ejemplo de Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio nulla distinctio eius, consequuntur, blanditiis nostrum dignissimos laudantium deserunt dolorum numquam eaque! Sit nostrum, iste autem officiis adipisci est in!
          </p>
        </section>
      </Zoom>
      <Zoom>
        <section>
          <h3>Ejemplo de Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio nulla distinctio eius, consequuntur, blanditiis nostrum dignissimos laudantium deserunt dolorum numquam eaque! Sit nostrum, iste autem officiis adipisci est in!
          </p>
        </section>
      </Zoom>
      <Bounce>
        <section>
          <h3>Ejemplo de Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio nulla distinctio eius, consequuntur, blanditiis nostrum dignissimos laudantium deserunt dolorum numquam eaque! Sit nostrum, iste autem officiis adipisci est in!
          </p>
        </section>
      </Bounce>
      <Rotate>
        <section>
          <h3>Ejemplo de Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio nulla distinctio eius, consequuntur, blanditiis nostrum dignissimos laudantium deserunt dolorum numquam eaque! Sit nostrum, iste autem officiis adipisci est in!
          </p>
        </section>
      </Rotate>
    </div>
  )
}

export default App
/** Workshop de Componente Acordion */

import React from 'react'
import Acordion from './Acordion'

const App = () => {
  return (
    <div>
      <Acordion
        title='Ejemplo de Acordion'
        content='Lorem ipsum...'
        bgColor='#000'
      />
      <Acordion
        title='Porque Universidad React'
        content='El curso mas completo y actualizado de React ✪, aprenderás desde nivel cero hasta conocer y dominar no solo React si no su core y podrás crear componentes de calidad de producción.'
      />
      <Acordion
        title='Ejemplo de Acordion'
        content='Lorem ipsum...'
        bgColor='orangered'
      />
    </div>
  )
}

export default App
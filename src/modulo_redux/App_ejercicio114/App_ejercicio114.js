/** Conectar componentes con Redux usando react-redux */
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Counter from './Counter'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}

export default App
/** Introduccion a los midlewares en redux */
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

// import Counter from './components/Counter'
// import Info from './components/Info'
// import Fruits from './components/Fruits'
import Todos from './components/Todos'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info /> */}
        {/* <Counter /> */}
        {/* <Fruits /> */}
        <Todos />
      </div>
    </Provider>
  )
}

export default App
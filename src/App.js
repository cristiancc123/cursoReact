import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta/'

/* Aca se llamand los componentes y se meten a la constante app  */
const App = () => (
    <div>
        <TarjetaFruta name='Sandia' price={10.00}/>
        <TarjetaFruta name='Manzana' price={16.00}/>
        <TarjetaFruta name='Papaya' price={14.99}/>
    </div>
)

export default App
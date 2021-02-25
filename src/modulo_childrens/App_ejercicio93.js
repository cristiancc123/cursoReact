/** Tratamiento de children con utilidades de React.Children */

import React, { Component } from 'react'

class Parent extends Component{
    render(){
        const { children: ch } = this.props

        //Transforma cualquier parametro que reciba en un array
        const childArray = React.Children.toArray(ch)

        //Recorre los childres en array
        const children = React.Children.map(ch, (child) => {
            return child
        })

        //Recorre los childres en array
        const children = React.Children.forEach(ch, (child) => {
            console.log(child)
            return child
        })

        //Cuenta la cantidad de elementos del children
        console.log(React.Children.count(ch));


        return(
            <div>
                { children }
            </div>
        )

    }

}


class App extends Component {
    render(){
        return(
            <div>
                <Parent>
                    Hijo de texto
                    <div>Elementos</div>
                    { () => {} }
                    { 444 }
                    {`La suma es: ${ 5 + 5}`}
                </Parent>
            </div>
        )
    }
}

export default App 
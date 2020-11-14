/** Destructuracion avanzada aplicada a componentes */
import React, {Component} from 'react'

const user1 = {
    name: 'Cristian Cano',
    username: 'cristiancc123',
    country: 'Colombia',
    social: {
        facebook: 'https://fb....',
        twitter: 'https://tw....'
    }
}

const saluda = (user) => {
    
    var {name: nombre , country: pais, social: red } = user
    var {twitter: tw} = red

    const array = ['pizza','te verde','pay',124, false, 'hola']
    const [comida, bebida, postre, ...restantes] = array

    console.log(restantes)

    console.log(`la comida es: ${comida} la bebida es: ${bebida}
        y el postre es: ${postre}`)

    console.log(
        `Hola soy ${nombre} y vivo en ${pais}. 
        Mi red social es ${tw}`
    )
}

saluda(user1)


const Title = (props) => { 

    const {color, children} = props;
    
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: color,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }

    return(

        <h1 style={styles}>
            { children }
        </h1>
    )
}


class App extends React.Component{

    state = {
        uiColor: 'tomato'
    }

    render(){

        const { uiColor : colorSeleccionado } = this.state

        return(
            <div>
                <Title color={colorSeleccionado}>
                    Super <em>Ninja</em>
                    <div>Hola</div>
                </Title>
            </div>
        )
    } 

}

export default App
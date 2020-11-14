import React from 'react'
//import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

/* Crear un componente */
/* const TarjetaFruta = (props) => (
        <div>
            <h3>{props.name}</h3>
            <hr/>
            <p>$ {props.price}</p>
        </div>
    ) */

    /* Componente como constante */
/*     const TarjetaFruta = (props) => {
        console.log(props)
        return (
            <div>
                <h3>{props.name}</h3>
                <hr/>
                <p>$ {props.price}</p>
            </div>
        )
    } */

    /* Componente como funcion */
/*     function TarjetaFruta(props){
        console.log(props)
        return (
            <div>
                <h3>{props.name}</h3>
                <hr/>
                <p>$ {props.price}</p>
            </div>
        )
    } */
    

/* Componente como clase */
class TarjetaFruta extends React.Component{

    /* Este es el contructor del componente de clase */
    constructor(){

        /* Este metodo siempre debe ir */
        super()

        /* Esto sirve para mandarle el contexto this de la clase
        al metodo, es decir que el metodo use el this de la clase y no
        del metodo */
        /*
        this.agregar = this.agregar.bind(this)
        this.quitar = this.quitar.bind(this) 
        */

        /* Una manera más practica de vincular los contextos es asi: */
        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ]

        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })

        /* acá se define el estado del componente y al estado le puedo
        definir propiedades */
        this.state = {
            cantidad: 0
        }
    }

    /* ------------------------- */
    /* Funciones Inicio*/
    /* ------------------------- */
    agregar(){
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }

    quitar(){
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }

    limpiar(){
        this.setState({
            cantidad: 0
        })
    }
    /* ------------------------- */
    /* Funciones Fin*/
    /* ------------------------- */

    render(){
        console.log(this.props)
        return(
            <div>
                <h3>{this.props.name}</h3>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>limpiar</button>
                <hr/>
                <p>$ {this.props.price}</p>
            </div>
        )
    }
}    

/* Componente como clase usando inicializadores de propiedad*/
class TarjetaFruta2 extends React.Component{

    /* ------------------------- */
    /* Funciones Inicio*/
    /* Se usan las aron functions y se debe tener en cuenta que las
    aron functions heredan el this del padre */
    /* ------------------------- */
    state = {
        cantidad: 0
    }

    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1
    })

    quitar = () => this.setState({
        cantidad: this.state.cantidad - 1
    })

    limpiar = () => this.setState({
        cantidad: 0
    })

    /* ------------------------- */
    /* Funciones Fin*/
    /* ------------------------- */

    render(){
        console.log(this.props)

        /* Puedo tener estilos en una constante y llamarla */
        /* const tiene = this.state.cantidad > 0
        const styles = {
            border: '1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: tiene ? 'green' : '#FFFFFF',
            color: tiene ? '#FFF' : '#000',
            transition: 'all 250ms ease-out'
        } */

        /* Esto se aplica cuando el estilo esta por una constante */
        /* <div style={styles}> */

        const tiene = this.state.cantidad > 0
        const clases = `${styles.card} ${tiene ? styles['card-active'] : ''}`

        return(
            
            <div className={clases}>
                <h3>{this.props.name}</h3>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>limpiar</button>
                <hr/>
                <p>$ {this.props.price}</p>
                <p>Total ${this.props.price * this.state.cantidad}</p>
            </div>
        )
    }
}    

/* Para exportar el componente para que sea utilizado por otros
se debe exportar de forma explicita */
export default TarjetaFruta2
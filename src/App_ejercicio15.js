/** Datos de entrada por defecto con defaultProps */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

const noop = () => {}

class Profile extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    }
    
    static defaultProps = {
        name: 'Nombre por defecto',
        bio: 'bio por defecto',
        email: 'email por defecto',
        age: 'age por defecto',
        onHello: noop
    }

    saluda = () => {
        this.props.onHello();
    }

    render () {
        const { name, bio, email } = this.props
        return(
            <div>
                <h1>{name}</h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
                <button onClick={this.saluda}>
                    saluda
                </button>
            </div>
        )
    }
}



class App extends Component {
    render (){
        return(
            <div>
                <Profile/>
            </div>
        )
    }
}

export default App
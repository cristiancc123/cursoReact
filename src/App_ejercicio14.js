/** Controlar los datos de entrada con props-types */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Profile extends Component {
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
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number
}

class App extends Component {
    render (){
        return(
            <div>
                <Profile
                    name={444}
                    bio='Soy desarrollador web'
                    email='canoosorio@gmail.com'
                />
            </div>
        )
    }
}

export default App
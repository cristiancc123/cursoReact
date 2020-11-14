/** iterando propiedades de objetos */
import React, { Component } from 'react'

class App extends Component {

    state = {
        user: {
            name: 'Cristian Cano',
            country: 'Mexico',
            twitter: '@cristiancc123',
            youtube: 'tectsss'
        }
    }

    render(){

        const { user } = this.state;
        const keys = Object.keys(user);

        return(
            <div>
                <ul>
                    { keys.map((key) => (
                        <li>
                            <strong>{key}:</strong> {user[key]}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default App
/** El metodo componentDidMount en el ciclo de vida */
import React, { Component } from 'react'

class Http extends Component{

    state = {
        photos: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(photos => this.setState({ photos }))
    }

    render(){
        const { photos } = this.state
        return(
            <div>
                {photos.map(photo =>(
                    <img
                        key={photo.id}
                        src={photo.thumbnailUrl}
                        alt={photo.title}
                    />                    
                ))}
            </div>
        )
    }

}

class Events extends Component{

    state = {
        width: window.innerWidth
    }

    handlerResize = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    componentDidMount(){
        window.addEventListener('resize', this.handlerResize)
    }

    render(){
        return(
            <div>
                <h2>Events { this.state.width } </h2>
            </div>
        )
    }

}



class App extends Component{

    componentDidMount(){
        /** Normalmente se agregan:
         * Solicitudes HTTP
         * O para agregar Event Listeners
         */
    }

    render(){
        return(
            <div>
                <h1>componentDidMount</h1>
                <Events/>
                <Http/>
            </div>
        )
    }

}

export default App
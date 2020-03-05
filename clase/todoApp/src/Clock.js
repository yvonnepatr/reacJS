import React, { Component } from 'react';

class Clock extends Component {
    state = {
        hora: '',
        usuario: 'Manuel'
    };

    // constructor() {
    //     super();
    //     this.state = {
    //         hora: '',
    //         usuario: 'Manuel'
    //     };
    // }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.actualizarHora();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    actualizarHora() {
        this.setState({
            hora: (new Date()).toLocaleTimeString()
        });
    }

    render() {
        return (
            <div>
                La hora es: { this.state.hora }
            </div>
        )
    }
}

export default Clock;
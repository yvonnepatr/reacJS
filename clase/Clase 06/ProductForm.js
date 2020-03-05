import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        name: '',
        detail: ''
    };

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { name, detail } = this.state;

        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <div>
                    <input
                        name="name"
                        type="input"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Ingresa el nombre" />
                    { 
                        name.length < 5 ?
                        <p style={{color: 'red'}}>El campo es requerido</p>:
                        null
                    }
                </div>
                <div>
                    <textarea
                        name="detail"
                        value={detail}
                        onChange={this.handleChange}
                    ></textarea>
                </div>
                <div>
                    <button
                        disabled={name.length <= 0 || detail.length <= 0}
                    >Guardar</button>
                </div>
            </form>
        );
    }
}

export default ProductForm;

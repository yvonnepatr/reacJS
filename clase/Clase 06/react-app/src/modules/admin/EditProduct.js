import React, { Component } from 'react'

import ProductService from '../services/ProductService';

class EditProduct extends Component {
    async componentDidMount() {
        const { id } = this.props.match.params;
        const { data: product } = await ProductService.getProductsById(id);
        console.log(product);
    }

    render() {
        return (
            <div>
                <h1>
                    Editar Producto
                </h1>
            </div>
        );
    }
}

export default EditProduct;

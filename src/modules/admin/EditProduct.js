import React, { Component } from 'react'

import ProductForm from './ProductForm';
import ProductService from '../services/ProductService';

class EditProduct extends Component {
    state = { product: null };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const { data } = await ProductService.getProductsById(id);
        this.setState({ product: data });
    }

    goBack = () => {
        this.props.history.goBack();
    }

    handleUpdate = async product => {
        await ProductService.updateProduct(product);
        this.goBack();
    }

    render() {
        const { product } = this.state;

        return (
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <h2 className="subtitle is-3 has-text-centered">Actualizar Producto</h2>
                    { product ?
                        <ProductForm
                            title="Actualizar"
                            product={product}
                            handleSubmit={this.handleUpdate}
                            back={this.goBack}
                        /> : null
                    }
                </div>
            </div>
        );
    }
}

export default EditProduct;

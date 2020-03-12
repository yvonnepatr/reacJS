import React from 'react'

import ProductForm from './ProductForm';
import ProductService from '../services/ProductService';

const NewProduct = (props) => {
    const product = { name: '', detail: '', price: '', stock: '' };

    const handleCreate = async product => {
        await ProductService.createProduct(product);
        goBack();
    };

    const goBack = () => {
        props.history.goBack();
    }

    return (
        <div className="columns">
            <div className="column is-10 is-offset-1">
                <h2 className="subtitle is-3 has-text-centered">Crear Producto</h2>
                <ProductForm
                    title="Crear"
                    product={product}
                    handleSubmit={handleCreate}
                    back={goBack}
                />
            </div>
        </div>
    );
};

export default NewProduct;

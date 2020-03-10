import React from 'react'

import ProductService from '../services/ProductService';
import ProductForm from './ProductForm';
const product = { name: '',    detail: '',    price: '',    stock: ''}; 


const NewProduct = (props) => {
    const goback = () => {
        props.history.goBack();
        }
    const handleCreate = async product =>{
       await ProductService.createProduct(product);
       goback();
       }
        return (
        <div  className="columns">
            <div className="column is-10 is-offset-1">
           <h2 className="subtitle is-3 has-text-centered">Crear Producto</h2> 
            <ProductForm title="Crear " 
            product={product}
            handleSubmit={handleCreate}/>
            </div>
        </div>
    );
};

export default NewProduct;

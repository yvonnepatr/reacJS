import React, { Component } from 'react'

import ProductService from '../services/ProductService';
import ProductForm from './ProductForm';
class EditProduct extends Component {

    state ={
        product:null
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        
        const { data: product } = await ProductService.getProductsById(id);
       
        this.setState({product})
    }

    goBack(){
        this.props.history.goBack();
    }


    handleUpdate = product => {
        ProductService.updateProduct(product);
        this.goBack();
    }
    
    render() {
     
        const {product} = this.state;
        return (
             <div className="columns">
                  <div className="column is-10 is-offset-1">
                <h2 className="subtitle is-3 has-text-centered">
                    Editar Producto</h2>
                    {product ?
                    <ProductForm
                    product={this.state.product}
                    title="Actualizar Producto"
                    handleSubmit={this.handleUpdate}
                    ></ProductForm>:null}
                
                </div> 
            </div> 

            
        );
    }
}

export default EditProduct;

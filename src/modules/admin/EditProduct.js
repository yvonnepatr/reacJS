import React, { Component } from 'react'
import ProductsService from '../service/ProductService';

class EditProduct extends Component{
    state ={
        product:{}
    };
   
 
    async componentDidMount (){
       const {id} = this.props.match.params;
       const {data:producto} = await ProductsService.getProductsById(id);
       this.setState({product:producto});
      
    }
    render(){
      // const {id} = props.match.params;
      return(
            <div>
               Nombre Producto {this.state.product.name}
            </div>

      )  ;
    }
}

/*
const EditProduct = (props)=>{
    const {id} = props.match.params;
    return (
    <div>Editar Producto <strong>{id}</strong></div>
    );
};
*/
export default EditProduct;
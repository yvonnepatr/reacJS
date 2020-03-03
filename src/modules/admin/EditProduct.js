import React, { Component } from 'react'


class EditProduct extends Component{
    state ={
        product:{}
    };
   
 
    componentDidMount(){
       
        fetch('http://localhost:4000/products/')
        .then(response => response.json())
        .then(data =>{
            this.setState({
                product:data
            });
        });
    }
    render(){
      // const {id} = props.match.params;
      return(
            <div>

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
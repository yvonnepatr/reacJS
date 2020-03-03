import React from 'react'

const EditProduct = (props)=>{
    const {id} = props.match.params;
    return (
    <div>Editar Producto <strong>{id}</strong></div>
    );
};

export default EditProduct;
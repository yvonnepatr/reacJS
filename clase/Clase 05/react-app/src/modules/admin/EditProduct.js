import React from 'react'

const EditProduct = (props) => {
    const { id } = props.match.params;

    return (
        <div>
            <h1>
                Editar el producto con id: <strong>{ id }</strong>
            </h1>
        </div>
    );
};

export default EditProduct;

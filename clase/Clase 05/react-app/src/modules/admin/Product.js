import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({ data, removeProduct, index }) => {
    const styles = {
        marginRight: '10px'
    };

    const type = data.stock ? 'has-text-grey' : 'has-text-danger';

    return (
        <>
            <tr>
                <td className="has-text-grey">{ index }</td>
                <td className="has-text-grey">{ data.name }</td>
                <td className="has-text-grey">{ data.detail }</td>
                <td className="has-text-grey">{ data.price }</td>
                <td className={type}>{ data.stock }</td>
                <td className="has-text-grey">
                    <Link to={`products/${data.id}`}
                        className="button is-small is-info"
                        style={styles}>Editar</Link>
                    <button className="button is-small is-danger" onClick={() => {
                        removeProduct(data.id);
                    }}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

export default Product;

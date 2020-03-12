import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Product from './Product';
import SearchProduct from './SearchProduct';
import ProductService from '../services/ProductService';

import { fetchProducts } from '../../actions/productActions';

class Products extends Component {
    state = {
        titles: ['#', 'Nombre', 'Detalle', 'Precio', 'Stock', 'Acciones']
    };

    async componentDidMount() {
        this.props.getProducts();
    }

    handleRemove = async (id) => {
        try {
            await ProductService.deleteProduct(id);
            this.setState((prevState) => {
                const products = prevState.products.filter((prod => {
                    return prod.id !== id;
                }));

                return { products, productsFiltered: products };
            });
        } catch(e) {
            console.log(e);
        }        
    }

    onSearch = searchValue => {
        this.setState((prevState) => {
            return {
                productsFiltered: prevState.products.filter(prod => {
                    return prod.name.toLowerCase().includes(searchValue.toLowerCase())
                })
            };
        });
    }

    render() {
        const { titles } = this.state;
        const { productsFiltered } = this.props;

        return (
            <div className="column is-10 is-offset-1">
                <div className="level">
                    <div className="level-left">
                        <h2 className="subtitle is-3">
                            Lista de productos
                        </h2>
                    </div>
                    <div className="level-right">
                        <Link to="products/new" className="button is-info">Nuevo Producto</Link>
                    </div>
                </div>
                <SearchProduct onSearch={this.onSearch}/>
                {
                    productsFiltered.length ?  (
                        <table className="table is-striped is-hoverable is-bordered is-fullwidth">
                            <thead>
                                <tr>
                                    {titles.map((title, idx) => (
                                        <th key={idx}>{ title }</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {productsFiltered.map((product, idx) => (
                                    <Product
                                        key={product.id}
                                        index={idx + 1}
                                        data={product}
                                        removeProduct={this.handleRemove}
                                    />
                                ))}
                            </tbody>
                        </table>
                    ) : <p>No existen productos</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.products.items,
        productsFiltered: state.products.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(fetchProducts());
        }
    }
};

const component = connect(mapStateToProps, mapDispatchToProps)(Products);
export default component;

// export default connect((state) => {
//     return {
//         products: state.products.items,
//         productsFiltered: state.products.items
//     };
// }, {getProducts: fetchProducts})(Products);

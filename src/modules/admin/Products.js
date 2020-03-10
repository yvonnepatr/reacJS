import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Product from './Product';
import SearchProduct from './SearchProduct';
import ProductService from '../services/ProductService';

/* const productos = [
    {
        id: 2,
        name: 'Televisor 49" 4K UHD',
        detail: 'Modelo: 49UK6200',
        price: '1499.00',
        stock: 8,
    },
    {
        id: 3,
        name: 'Laptop 15" AMD A6 4GB 500GB',
        detail: 'Módelo: IdeaPad 330',
        price: '1299.00',
        stock: 5,
    }
]; */

class Products extends Component {
    state = {
        products: [],
        productsFiltered: [],
        titles: ['#', 'Nombre', 'Detalle', 'Precio', 'Stock', 'Acciones']
    };

    async componentDidMount() {
        const { data: products } = await ProductService.getProducts();
        this.setState({ products, productsFiltered: products });
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
        const { titles, productsFiltered } = this.state;

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

export default Products;

import React, { Component } from 'react'
import Product from './Product';
import SearchProduct from './SearchProduct';
import ProductsService from '../service/ProductService';

/*const productos = [
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
];*/

class Products extends Component {
    state = {
        products: [],
        productsFiltered: [],
        titles: ['#', 'Nombre', 'Detalle', 'Precio', 'Stock', 'Acciones']
    };

    async componentDidMount(){
       
        const {data:products} = await ProductsService.getProducts();
        this.setState({products,productsFiltered:products});
       
        /* const response = await ProductsService.getProducts();
        const products = await response.json();
        this.setState({products,productsFiltered:products});*/

       /* fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(data =>{
            this.setState({
                products:data,
                productsFiltered:data
            });
        });*/
    }

    handleRemove = async (id) => {
        try {
             await ProductsService.deleteProduct(id);
             this.setState((prevState)=>{
                const products = prevState.products.filter((prod=>{
                    return prod.id !== id; 
                }))
                
                  return{products,productsFiltered:products};
             });
        } catch (error) {
            console.log(error);
        }

      /*  try {
            const response =  await ProductsService.deleteProduct(id);
        } catch (error) {
            console.log(error);
        }*/


      /*const response =  await ProductsService.deleteProduct(id);
      console.log(response);*/
      /*
        this.setState((prevState) => {
            const products = prevState.products.filter((prod => {
                return prod.id !== id;
            }));

            return { products };
        });*/
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
                        <a className="button is-info">Nuevo Producto</a>
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

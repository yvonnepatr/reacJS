import axios from 'axios';

const API = axios.create({
    //baseURL:'http://localhost:4000'
    baseURL: `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}`
})


export default{

    getProducts(){
        return API.get('/products');
        },
    getProductsById(id){
        return API.get(`/products/${id}`);
    },
    deleteProduct(id){
        return API.delete(`/products/${id}`);
    },
    createProduct(producto){
        return API.post(`/products/`,producto);
    },
    updateProduct(producto){
        return API.put(`/products/${producto.id}`,producto);
    }


};


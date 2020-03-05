import API from './api';

export default {
    getProducts() {
        return API.get('/products');
    },
    getProductsById(id) {
        return API.get(`/products/${id}`);
    },
    deleteProduct(id) {
        return API.delete(`/products/${id}`);
    },
    createProduct(product) {
        return API.post(`/products`, product);
    },
    updateProduct(product) {
        return API.put(`/products/${product.id}`, product);
    }
};

import {
    FETCH_PRODUCTS_SUCCESS,
    FETCHING_PRODUCTS
} from '../constants/action-types';

import ProductService from '../modules/services/ProductService';

// Actions creators
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({ type: FETCHING_PRODUCTS });

        const { data } = await ProductService.getProducts();
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    };

    // return { type: FETCH_PRODUCTS_SUCCESS, payload: data };
};

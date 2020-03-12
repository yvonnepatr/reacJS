import { FETCH_PRODUCTS_SUCCESS, FETCHING_PRODUCTS } from '../constants/action-types';

const initialState = {
    items: [],
    item: {},
    filtered: []
};

// store = {
//     products : {
//         items: [],
//         item: {},
//         filtered: []
//     },
//     users: {

//     }
// }

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case FETCHING_PRODUCTS:
            return {...state, loading: true }
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, items: payload }
        default:
            return state;
    };
}

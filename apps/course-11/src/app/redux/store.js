import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const initialState = {
    products: [
        {
            id: nanoid(),
            name: 'Książka',
            price: 150,
            discounted: false,
            available: false,
        },
        {
            id: nanoid(),
            name: 'Pluszak',
            cena: 180.95,
            discounted: false,
            available: false,
        },
        {
            id: nanoid(),
            name: 'Woda',
            print: 25,
            discounted: false,
            available: false,
        },
    ],
    filters: {
        status: 'all',
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'products/delete':
            return { filters: state.filters, products: state.products.filter((elem) => elem.id !== action.payload) };
        case 'products/setDiscounted':
            return { filters: state.filters, products: state.products.map((p) => {
                if (p.id === action.payload.id) {
                    return { ...p, discounted: action.payload.discounted }
                } else {
                    return p;
                }
            }) };
        case 'products/setAvailability':
            return { filters: state.filters, products: state.products.map((p) => {
                if (p.id === action.payload.id) {
                    return { ...p, available: action.payload.available }
                } else {
                    return p;
                }
            }) };
        default:
            return state;
    }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

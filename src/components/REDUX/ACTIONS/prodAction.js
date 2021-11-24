import {SET_PRODUCT,SELECTED_PRODUCT} from './Types';

export const setProduct = (products)=>{
    return {
        type:SET_PRODUCT,
        payload: products
    }
}

export const selectProduct = (product)=>{
    return {
        type:SELECTED_PRODUCT,
        payload: product
    }
}


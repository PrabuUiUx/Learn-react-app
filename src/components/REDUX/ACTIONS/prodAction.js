import StoreApi from '../../API/StoreApi';
import {SET_PRODUCT,SELECTED_PRODUCT,FETCH_PRODUCTS} from './Types';

export const setProduct = (products)=>{
    return {
        type:SET_PRODUCT,
        payload: products
    }
}

// export const selectProduct = (product)=>{
//     return {
//         type:SELECTED_PRODUCT,
//         payload: product
//     }
// }

export const fetchProducts = () => async (dispatch)=>
{
    const response = await StoreApi.get("/products");
    dispatch({type:FETCH_PRODUCTS,payload:response.data})
};
  

export const selectProduct = (id)=>async(dispatch)=>{
    const response = await StoreApi.get(`/products/${id}`);
    dispatch({type:SELECTED_PRODUCT,payload:response.data})

}
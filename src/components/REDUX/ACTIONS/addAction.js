import {ADD_TO_BASKET} from './Types';

export const AddBasket =()=>{
    return (dispatch)=>{
        console.log('added to cart');
    dispatch({
        type:ADD_TO_BASKET
    });    
}
} 
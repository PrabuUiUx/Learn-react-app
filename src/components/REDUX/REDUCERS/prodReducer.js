import {SELECTED_PRODUCT, SET_PRODUCT} from '../ACTIONS/Types';


const initialState= {
    products:[],
};
export const prodReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case SET_PRODUCT:
            return {...state,products:payload}
        default :
            return state;
    }

}

export const selectProdReducer =(state={},{type,payload})=>{
    switch(type){
        case SELECTED_PRODUCT:
            return {...state,...payload}
        default :
            return state;
    }

}
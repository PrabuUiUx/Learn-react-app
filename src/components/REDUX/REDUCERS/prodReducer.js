import {SELECTED_PRODUCT,FETCH_PRODUCTS} from '../ACTIONS/Types';


const initialState= {
    products:[],
};
export const prodReducer =(state=initialState,{type,payload})=>{
    switch(type){
      
            case FETCH_PRODUCTS:
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
import {SET_PRODUCT} from '../ACTIONS/Types';


const initialState= {
    products:[],
};
 const prodReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case SET_PRODUCT:
            return {...state,products:payload}
        default :
            return state;
    }

}
export default prodReducer
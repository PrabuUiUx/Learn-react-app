 import {ADD_TO_BASKET,GET_NUMBER_INCART} from '../ACTIONS/Types';
 
 const InitialState={
    basketNumber:0
}


export const countReducer =(state=InitialState,action)=>{
    switch(action.type){
        case ADD_TO_BASKET:
            return{
                basketNumber:state.basketNumber + 1

            }
        case GET_NUMBER_INCART: 
            return{
                ...state
            }
        default:
            return state;
    }
}
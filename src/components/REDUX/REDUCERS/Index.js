import {combineReducers} from 'redux';
// import {countReducer} from './Reducers';
import {prodReducer,selectProdReducer} from './prodReducer';


 export const allReducers =  combineReducers({
    allProducts:prodReducer,
    product:selectProdReducer
});
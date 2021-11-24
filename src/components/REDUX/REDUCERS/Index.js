import {combineReducers} from 'redux';
// import {countReducer} from './Reducers';
import prodReducer from './prodReducer';


 export const allReducers =  combineReducers({
    allProducts:prodReducer
});
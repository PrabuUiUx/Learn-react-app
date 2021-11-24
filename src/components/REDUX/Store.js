import {createStore} from 'redux';
import {allReducers} from './REDUCERS/Index';




const store = createStore(
    allReducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;

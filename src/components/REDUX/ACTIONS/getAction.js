import {GET_NUMBER_INCART} from './Types';


export const getNumber =()=>{
    return(dispatch)=>{
        console.log('getting incart number')
        dispatch({
            type:GET_NUMBER_INCART
        })
    }
}
import React from 'react';
import {connect} from "react-redux";
import {AddBasket} from './ACTIONS/addAction';

 const Test = (props) => {
     console.log('reduxres',props);
    return (
        <div>
            <h1>for test alone test</h1>
        </div>
    )
}
export default connect(null,{AddBasket})(Test);

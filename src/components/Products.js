import axios from 'axios';
import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../App.css';
import {connect} from "react-redux";
import {AddBasket} from './REDUX/ACTIONS/addAction';
import {setProduct} from './REDUX/ACTIONS/prodAction';
import 'semantic-ui-css/semantic.min.css';



 const Products =()=> {

const prod= useSelector((state) => state.allProducts.products );
const dispatch = useDispatch();

console.log('prod',prod)
// const { title,price,image} = prod [0];


const fetchProduct =async()=>{
 const res = await axios.get("https://fakestoreapi.com/products")
 .catch((err)=>{
  console.log("error", err);
 });
 dispatch(setProduct(res.data));
}
useEffect(() => {  
  fetchProduct (); 
}, []);
console.log('appProd',prod)

const renderList = prod.map((products)=>{
  const {id, title,image ,price, category} = products

  return (
    <div className="prods"  style={{marginTop:"25px"}} key={id}>
      <div className="ui special cards uic">
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">${price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );  
  });
  return (
    <>{renderList}</>
  )  
    
  }

export default Products

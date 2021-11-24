import axios from 'axios';
import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {setProduct} from './REDUX/ACTIONS/prodAction';
import {Link} from 'react-router-dom';



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

const renderList = prod.map((products)=>{
  const {id, title,image ,price, category} = products

  return (
    <div className="four column wide"  style={{marginTop:"25px"}} key={id}>
      <Link to={`/product/${id}`}>
      <div className="ui link cards">
        <div className="card" style={{width:"250px",height:"auto"}}>
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
      </Link>
    </div>
  );  
  });
  return (
    <>{renderList}</>
  )  
    
  }

export default Products

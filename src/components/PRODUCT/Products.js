import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {fetchProducts} from '../REDUX/ACTIONS/prodAction';
import {Link} from 'react-router-dom';
import "../../App.css";



 const Products =()=> {

const prod= useSelector((state) => state.allProducts.products );
const dispatch = useDispatch();

console.log('prod',prod)


useEffect(() => {  
  dispatch(fetchProducts()); 
}, []);

const renderList = prod.map((products)=>{
  const {id, title,image ,price, category} = products

  return (
    <div className=" prods">
    <div className="ui container" style={{marginTop:"25px"}} >
      <Link to={`/product/${id}`}>
      <div className="ui special cards" key={id}>
        <div className="card" style={{width:"250px",height:"auto"}}>
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">Rs.{Math.round(price*75)}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    </div>  
  );  
  });
  return (
    <>{renderList}</>
  )  
    
  }

export default Products

import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {selectProduct} from '../REDUX/ACTIONS/prodAction';
import axios from "axios";

 const ProductDetails = () => {
     const product = useSelector(state => state.product);
     const {id, title,image ,price, category,description}= product
     const {productId}= useParams();
     const dispatch = useDispatch();    

     console.log('productId',productId);

const fetchProductDetail = async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {console.log(err)});
    dispatch(selectProduct(res.data))
}

useEffect(() => {
    if(productId && productId !=="")fetchProductDetail()
                }, [productId])

    return (
        <div className="ui grid container" style={{marginTop:"25px"}}>
            <div class="ui breadcrumb">
  <a class="section" href="/home">Home</a>
  <span class="divider">/</span>
  <a class="section"  href="/products">Products</a>
  <span class="divider">/</span>
  <div class="active section">{title}</div>
</div>
            {Object.keys(product).length == 0?(<div>...Loading</div>):(

            
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="middle aligned row">
                        <div className="column 1p">
                            <img className="ui fluid image" src={image}/>
                        </div>
                        <div className="column rp">
                            <h1 style={{marginTop:"0px"}}>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">Rs. {Math.round(price*75)}</a>
                            </h2>
                            <h3 className="ui brown block header" style={{marginTop:"auto"}}> {category} </h3>
                            <p style={{fontSize:"25px",fontFamily:"-moz-initial"}}> {description} </p>
                            <div className="ui vertical animated button green" tabIndex="0"> Add to Cart
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            )}
        </div>
    )
}  
export default ProductDetails
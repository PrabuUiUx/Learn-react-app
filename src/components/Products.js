import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            prod:[]
        }
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products').then((res)=>{
        console.log("res",res.data)
        this.setState({
            prod:res.data
        })    
    })
    }
    render() {
        const {prod} = this.state;
        // const [cartItem,setCartItem]= useState([]);
        return (
            <div className="prods " style={{marginTop:"25px"}}>
                <div class="ui special cards uic" >
          {prod.map((list)=>(
          <div class="card " style={{width:"230px",height:"auto"}}>
          <div class="blurring dimmable image">
          <div class="ui dimmer">
        <div class="content">
          <div class="center">
            <div class="ui inverted button">Add to Cart</div>
          </div>
        </div>
      </div>

          <img  className="imgcrd" src={list.image} style={{width:"200px",height:"200px"}} alt="img"/>
    </div>
    <div class="content">
      <a class="header">{list.title}</a>
      <div class="meta">
        <span class="date">{list.price}</span>
      </div>
    </div>
    <div class="extra content">
      <a>
        Rating:{list.rating.rate}
      </a>
      <button className="ui green button btng" style={{marginLeft:"20px"}} >Add to Cart</button>
    </div>
  </div>
      ))}
  </div>
            </div>
        )
    }
}

import React from 'react';
import "../App.css";
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="NavBar">
        <div className="LeftSide">
            <div className="Links">
                <img src={logo} alt="Logo"  style={{width:'20px',marginLeft:"15px"}}/>
               <Link to="/home">Home</Link>
               <Link to="/products">Products</Link>
               <Link to="/aboutus">AboutUs</Link>
            </div>
        </div>
        <div className="RightSide">
        <Link style={{marginLeft:"25px",marginRight:"25px"}} to="/cart">Mycart</Link>
        <div className="ui icon input">
        <input  type="text" placeholder="Search..." style={{width:"400px"}} />
        <i className="circular search link icon"></i>
        </div>
        <Link style={{marginLeft:"25px",marginRight:"25px"}} to="/login">Login</Link>
        </div>
        </div>
    )
}

export default Navbar;

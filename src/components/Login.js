import React from 'react'
import {useForm}  from 'react-hook-form';
import login from '../images/login.jpg'

export default function Login (){

    
        const {register,handleSubmit}= useForm();
        const onSubmit =(data) =>{
            console.log("data",data);
        }

        return(
            <div className="ui container" style={{marginTop:"25px",marginBottom:"25px"}}>
            <div className="ui card raised very padded text container segment" style={{padding:"10px"}}>
                <div style={{textAlign:"center", alignContent:"center",alignItems:"center"}} >
                <h2>Login</h2>
                <img src ={login} alt="" style={{width:"100px",height:"100px"}}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="ui form">
                 
                    <div className="field">
                        <label>Email</label>
                        <input type="email" placeholder="name@domain.com" name="email" {...register('email', { required: true })}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" placeholder="password"  {...register('password', { required: true })}/>
                    </div>
                
                    <button className="ui fluid button green" type="submit">LOGIN </button>
                </div>
                <div style={{textAlign:"right"}}>
                    <a  href="/">New User?</a>
                </div>
                </form>
            </div>
            
            </div>
        )
   
}

import axios from 'axios'
import React, { Component } from 'react'

export default class Test extends Component {
componentDidCatch(){
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
        console.log('res',res)
    })
}        

    render() {
        return (
            <div>
                <h1>hi</h1>
            </div>
        )
    }
}

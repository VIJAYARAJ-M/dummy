import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Addnum extends Component{
    constructor(props){
        super(props);
        this.state={count:1}
    }
    componentDidMount(){
        this.setState({
            count:count+1
        });
        console.log(this.setState);
    }
    render(){
        return(
            <div>
             {this.state.count}
             <button onClick={()=>(this.state.count+1)}>Add</button>
            </div>
        )
    }
}
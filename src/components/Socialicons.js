import React from "react";
import "./Socialicons.css";

export class Socialicons extends React.Component{
    render(){
        return (
           <div className="socialicons">
               <i class={this.props.icon}></i>
           </div>
        )
    }
};
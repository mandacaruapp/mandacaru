import React from "react";
import "./Socialicons.css";

export class Socialicons extends React.Component{
    render(){
        return (
           <div className="socialicons">
               <a href={this.props.href}>
                     <i className={`fas fa-${this.props.icon}`}></i>
               </a>
           </div>
        )
    }
};
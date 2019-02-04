import React from "react";
import "./SocialLink.css";

export class SocialLink extends React.Component{
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
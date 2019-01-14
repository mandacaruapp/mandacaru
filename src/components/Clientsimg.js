import React from "react";
import "./Clientsimg.css";

export class Clientsimg extends React.Component{
    render(){
        return (
           <img src={this.props.src} alt={this.props.alt}/>
        )
    }
};
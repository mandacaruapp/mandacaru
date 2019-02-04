import React from "react";
import "./ClientsImg.css";

export class ClientsImg extends React.Component{
    render(){
        return (
           <img className="clientsimg" src={this.props.src} alt={this.props.alt}/>
        )
    }
};
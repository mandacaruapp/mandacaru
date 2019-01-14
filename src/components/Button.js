import React from "react";
import "./Button.css";

export class Button extends React.Component{
    render(){
        return (
            <button className="button">{this.props.name}</button>
        )
    }
};
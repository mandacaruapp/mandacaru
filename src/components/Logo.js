import React from "react";
import "./Logo.css"

export class Logo extends React.Component{
    render(){
        return (
            <h2><a href="x">{this.props.name}</a></h2>
        )
    }
};
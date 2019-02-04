import React from "react";
import "./FeaturedTitle.css";

export class FeaturedTitle extends React.Component{
    render(){
        return (
            <div className="title">
                <h1>{this.props.textbox}</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
};
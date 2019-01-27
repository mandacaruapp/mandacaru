import React from "react";
import "./Titles.css";

export class Titles extends React.Component{
    render(){
        return (
            <div className="title">
                <h1>{this.props.textbox}</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
};
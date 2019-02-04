import React from "react";
import "./Button.css";

export class Button extends React.Component{
    render(){
        return (
            <a className="learnmore" href={this.props.src}>
                <p>{this.props.name}</p>
            </a>
        )
    }
};
import React from "react";
import "./Cards.css";

export class Cards extends React.Component{
    render(){
        return (
            <article className="cards">
                <div>
                    <i class={this.props.icon}></i>
                </div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </article>
        )
    }
};
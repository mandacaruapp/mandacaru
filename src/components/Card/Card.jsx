import React from "react";
import "./Card.css";

export class Card extends React.Component{
    render(){
        return (
            <article className="cards">
                <div>
                    <i className={`fas fa-${this.props.icon}`}></i>
                </div>
                <h3 className="titlecard">{this.props.title}</h3>
                <p>{this.props.text}</p>
            </article>
        )
    }
};
import React from "react";
import "./Logo.css"
import img from "../../assets/img/MandacaruLanding.png";

export class Logo extends React.Component{
    render(){
        return (
                <h2>
                    <a href="x">{this.props.name}</a>
                    <img className="imglogo" src={img} alt="mandacaru"/>
                </h2>
        )
    }
};
import React from "react";
import "./Header.css";
import { Button } from "./Button";
import { Navigation } from "./Navigation.js";
import figure from "../img/MandacaruLanding.png"
import { Ovalheader } from "./Ovalheader.js";

export class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="left">
                    <Navigation/>
                    <h3>Leave the tech to us, focus on your mission</h3>
                    <h1>We develop clear-cut web, mobile and IoT experiences</h1>
                    <Button name="Learn More"/>
                </div>
                <img src={figure} alt="mandacaru"/>
            </header>
        )
    }
}
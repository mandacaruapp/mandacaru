import React from "react";
import { Links } from "./Links.js";
import { Logo } from "./Logo.js";
import "./Navigation.css"

export class Navigation extends React.Component{
    render(){
        
        return (
            <nav className="navigation">
                <Logo name="Mandacaru"/>
                <Links/>
            </nav>
        )
    }
};
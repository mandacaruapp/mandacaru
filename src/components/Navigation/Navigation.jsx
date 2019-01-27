import React from "react";
import { Links } from "../Links/Links.jsx";
import { Logo } from "../Logo/Logo.jsx";
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
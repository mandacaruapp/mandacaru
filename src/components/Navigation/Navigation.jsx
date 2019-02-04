import React from "react";
import { NavBar } from "../NavBar/NavBar.jsx";
import { Logo } from "../Logo/Logo.jsx";
import "./Navigation.css"

export class Navigation extends React.Component{
    render(){
        
        return (
            <nav className="navigation">
                <Logo name="Mandacaru"/>
                <NavBar/>
            </nav>
        )
    }
};
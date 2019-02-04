import React from "react";
import "./NavBar.css"

export class NavBar extends React.Component{
    render(){
        
        return (
            <ul>
                <li key='1'><a href="x">About us</a></li>
                <li key='2'><a href="x">Contact</a></li>
            </ul>
        )
    }
};
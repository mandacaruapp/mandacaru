import React from "react";
import "./Footer.css";
import { Socialicons } from "./Socialicons.js";

export class Footer extends React.Component{
    render(){
        return (
           <footer className="footer">
                <Socialicons href="x"/>
                <Socialicons href="x"/>
           </footer>
        )
    }
};
import React from "react";
import "./Footer.css";
import { Socialicons } from "./Socialicons.js";

export class Footer extends React.Component{
    render(){
        return (
           <footer className="footer">
                <Socialicons icon='fas fa-laptop'/>
                <Socialicons icon='fas fa-laptop'/>
           </footer>
        )
    }
};
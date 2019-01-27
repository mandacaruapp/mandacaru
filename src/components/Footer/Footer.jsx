import React from "react";
import "./Footer.css";
import { Socialicons } from "../Socialicons/Socialicons.jsx";
import 'font-awesome/css/font-awesome.min.css'

export class Footer extends React.Component{
    render(){
        return (
           <footer className="footer">
                <Socialicons href="x" icon="home"/>
                <Socialicons href="x" icon="home"/>
           </footer>
        )
    }
};
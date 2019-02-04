import React from "react";
import "./Footer.css";
import { SocialLink } from "../SocialLink/SocialLink.jsx";
import 'font-awesome/css/font-awesome.min.css'

export class Footer extends React.Component{
    render(){
        return (
           <footer className="footer">
                <SocialLink href="x" icon="home"/>
                <SocialLink href="x" icon="home"/>
           </footer>
        )
    }
};
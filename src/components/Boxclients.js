import React from "react";
import "./Boxclients.css";
import { Clientsimg } from "./Clientsimg.js";

export class Boxclients extends React.Component{
    render(){
        return (
           <div className="boxclients">
                <Clientsimg src="" alt="xxx"/>
                <Clientsimg src="" alt="xxx"/>
                <Clientsimg src="" alt="xxx"/>
                <Clientsimg src="" alt="xxx"/>
                <Clientsimg src="" alt="xxx"/>
                <Clientsimg src="" alt="xxx"/>
           </div>
        )
    }
};
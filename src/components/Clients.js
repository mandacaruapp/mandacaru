import React from "react";
import "./Clients.css";
import { Boxclients } from "./Boxclients.js";
import { Titles } from "./Titles.js"

export class Clients extends React.Component{
    render(){
        return (
           <div className="clients">
                <Titles 
                    title="Building trust" textbox="CLIENTS"/>
                <Boxclients/>
           </div>
        )
    }
};
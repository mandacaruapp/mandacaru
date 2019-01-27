import React from "react";
import "./Clients.css";
import { Boxclients } from "../Boxclients/Boxclients.jsx";
import { Titles } from "../Titles/Titles.jsx"

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
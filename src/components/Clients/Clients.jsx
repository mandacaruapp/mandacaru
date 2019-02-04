import React from "react";
import "./Clients.css";
import { Boxclients } from "../Boxclients/Boxclients.jsx";
import { FeaturedTitle } from "../FeaturedTitle/FeaturedTitle.jsx"

export class Clients extends React.Component{
    render(){
        return (
           <div className="clients">
                <FeaturedTitle 
                    title="Building trust" textbox="CLIENTS"/>
                <Boxclients/>
           </div>
        )
    }
};
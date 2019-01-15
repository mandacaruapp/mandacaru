import React from "react";
import "./Production.css";
import { Columncards } from "./Columncards.js"
import { Presentation } from "./Presentation.js";

export class Production extends React.Component{
    render(){
        return (
           <section className="production">
              <Presentation/>
              <Columncards position="rightcard"/>
              <Columncards position="leftcard"/>     
           </section>
        )
    }
};
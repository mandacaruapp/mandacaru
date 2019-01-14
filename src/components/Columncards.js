import React from "react";
import "./Columncards.css";
import { Cards } from "./Cards.js"

export class Columncards extends React.Component{
    render(){
        return (
           <div className={this.props.position}>
                <Cards
                icon='fas fa-laptop' 
                title='startups'
                text='If you have the idea, we have the talent to
                execute and support you throughout the journey.' />
                <Cards
                icon='fas fa-laptop' 
                title='startups'
                text='If you have the idea, we have the talent to
                execute and support you throughout the journey.' />
           </div>
        )
    }
};
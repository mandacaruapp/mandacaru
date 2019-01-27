import React from "react";
import "./Production.css";
import { Presentation } from "../Presentation/Presentation.jsx";
import { Card } from "../Card/Card.jsx"


export class Production extends React.Component{
    render(){
        return (
           <section className="production">
              <Presentation/>
              <div className="rightcard">
                <Card
                icon='laptop' 
                title='startups'
                text='If you have the idea, we have the talent to
                execute and support you throughout the journey.' />
                <Card
                icon='laptop' 
                title='startups'
                text='If you have the idea, we have the talent to
                execute and support you throughout the journey.' />
              </div>
              <div className="leftcard">
                <Card
                icon='laptop' 
                title='startups'
                text='If you have the idea, we have the talent to
                execute and support you throughout the journey.' />
                <Card
                icon='laptop' 
                title='startups'
                text='If you have the idea, we have the talent to
                execute and support you throughout the journey.' />
              </div>     
           </section>
        )
    }
};
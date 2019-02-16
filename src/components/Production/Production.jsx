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
                  title='web'
                  text='We specialize developing web applications with React, Node.js, Golang and Wordpress.' />
                  <Card
                  icon='mobile'
                  title='mobile'
                  text='We leverage the power of React Native to build mobile applications for Android and IOS.' />
                </div>
                <div className="leftcard">
                  <Card
                  icon='desktop'
                  title='devops'
                  text='Management and CI/CD infrastructure configuration with Docker and Kubernetes.' />
                  <Card
                  icon='network-wired'
                  title='distributed apps'
                  text='We help you architect your system using microservices and fault-tolerance techniques.' />
                </div>
           </section>
        )
    }
};

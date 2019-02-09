import React from "react";
import "./Boxclients.css";
import { ClientsImg } from "../ClientsImg/ClientsImg.jsx";

export class Boxclients extends React.Component{
    render(){
        return (
           <div className="boxclients">
                <ClientsImg src="https://placeimg.com/140/140/any" alt="xxx"/>
                <ClientsImg src="https://placeimg.com/140/140/any" alt="xxx"/>
                <ClientsImg src="https://placeimg.com/140/140/any" alt="xxx"/>
                <ClientsImg src="https://placeimg.com/140/140/any" alt="xxx"/>
                <ClientsImg src="https://placeimg.com/140/140/any" alt="xxx"/>
                <ClientsImg src="https://placeimg.com/140/140/any" alt="xxx"/>
           </div>
        )
    }
};
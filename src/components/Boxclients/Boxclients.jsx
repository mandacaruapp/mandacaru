import React from "react";
import "./BoxClients.css";
import { ClientsImg } from "../ClientsImg/ClientsImg.jsx";

export class BoxClients extends React.Component{
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
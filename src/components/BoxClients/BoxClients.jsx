import React from "react";
import "./BoxClients.css";
import { ClientsImg } from "../ClientsImg/ClientsImg.jsx";
import imgDoskofoto from "../../assets/img/clients/doskofoto.png";
import imgVikingflom from "../../assets/img/clients/vikingflom.png";
export class BoxClients extends React.Component {
  render() {
    return (
      <div className="boxclients">
        <ClientsImg src={imgDoskofoto} alt="Doskofoto" />
        <ClientsImg src={imgVikingflom} alt="Viking Flom Construction" />
      </div>
    );
  }
}

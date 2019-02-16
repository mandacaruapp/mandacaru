import React from "react";
import "./TitleClients.css";
import { FeaturedTitle } from "../FeaturedTitle/FeaturedTitle.jsx";

export class TitleClients extends React.Component {
  render() {
    return (
      <div className="titleclients">
        <FeaturedTitle title="Building trust" textbox="CLIENTS" />
      </div>
    );
  }
}

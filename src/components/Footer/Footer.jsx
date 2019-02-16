import React from "react";
import "./Footer.css";
import { SocialLink } from "../SocialLink/SocialLink.jsx";
import "font-awesome/css/font-awesome.min.css";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <SocialLink href="mailto:contact@mandacaru.app" icon="envelope-open" />
      </footer>
    );
  }
}

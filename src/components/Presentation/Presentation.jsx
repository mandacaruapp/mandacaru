import React from "react";
import "./Presentation.css";
import { FeaturedTitle } from "../FeaturedTitle/FeaturedTitle.jsx";

export class Presentation extends React.Component{
    render(){
        return (
           <aside className="presentation">
                <FeaturedTitle title="Who we are" textbox="WHO"/>
                <p>Right from the start  Mandacaru has been working under the staff augmentation paradigm.  Understanding the needs of each particular business is the first step towards project execution success.  The familiarization of the business’ day to day practices are integral to the steps of our software development lifecycle.  Our team thinks and acts about projects as if they were one with your company.  This allows for a painless process of ramping up and ramping down and one more aligned with the demand. </p>
           </aside>
        )
    }
};
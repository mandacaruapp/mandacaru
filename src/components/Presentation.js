import React from "react";
import "./Presentation.css";
import { Titles } from "./Titles.js";

export class Presentation extends React.Component{
    render(){
        return (
           <aside className="presentation">
                <Titles title="Who we are" textbox="WHO"/>
                <p>Right from the start Mandacaru has been working under
                the staff augmentation paradigm. Understanding the
                needs of each par7cular business is the first step towards
                project execu7on success. The familiariza7on of the
                business’ day to day prac7ces are integral to the steps of
                our soCware development lifecycle. Our team thinks and
                acts about projects as if they were one with your
                company. This allows for a painless process of ramping up
                and ramping down and one more aligned with the
                demand.</p>
           </aside>
        )
    }
};
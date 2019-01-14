import React, { Component } from 'react';
import './App.css';
import { Header } from "./components/Header.jsx";
import { Production } from "./components/Production.js";
import { Clients } from "./components/Clients.js";
import { Footer } from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Production/>
        <Clients/>
        <Footer/>
      </div>
    );
  }
}

export default App;

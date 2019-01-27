import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import { Header } from "./components/Header/Header.jsx";
import { Production } from "./components/Production/Production.jsx";
import { Clients } from "./components/Clients/Clients.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

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

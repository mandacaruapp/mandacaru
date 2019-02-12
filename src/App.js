import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import { Header } from "./components/Header/Header.jsx";
import { Production } from "./components/Production/Production.jsx";
import { BoxClients } from "./components/BoxClients/BoxClients.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { TitleClients } from "./components/TitleClients/TitleClients.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Production/>
        <TitleClients/>
        <BoxClients/>
        <Footer/>
      </div>
    );
  }
}

export default App;

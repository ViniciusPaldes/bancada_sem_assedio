import "./App.css";
import { components } from "./loader";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <components.header />
        <components.mainDisplay />
        <components.map />
        <components.denuncia />
        <components.footer />
      </div>
    );
  }
}

export default App;

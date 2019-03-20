import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { components } from "./loader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <components.header />
        <components.mainDisplay />
        <components.helper />
        <components.footer />
      </div>
    );
  }
}

export default App;

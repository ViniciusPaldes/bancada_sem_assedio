import "./index.css";
import React from "react";
import imgHeader from "../../assets/bg_topo.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={imgHeader} alt="Cabeçalho" />
      </div>
    );
  }
}

export default Header;

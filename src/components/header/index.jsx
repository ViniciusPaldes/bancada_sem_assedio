import React from "react";
import "./index.css";
import imgHeader from "../../assets/bg_topo.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={imgHeader} />
      </div>
    );
  }
}

export default Header;

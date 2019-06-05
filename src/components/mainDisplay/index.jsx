import "./index.css";
import React from "react";
import icLogo from "../../assets/ic_logo.jpg";
import imgTorcida from "../../assets/bg_torcida_cinza.png";

class MainDisplay extends React.Component {
  render() {
    return (
      <div className="mainDisplay">
        <div className="mainDisplayLogo">
          <img src={icLogo} alt="Logo" />
        </div>
        <div className="btDenuncie">
          <span> Denunciar agora!</span>
        </div>
        <img className="imgTorcida" src={imgTorcida} alt="Torcida" />
      </div>
    );
  }
}

export default MainDisplay;

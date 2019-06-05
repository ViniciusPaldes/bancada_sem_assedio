import "./index.css";
import React from "react";

class Map extends React.Component {
  render() {
    return (
      <div className="map">
        <p className="mapeamento">Mapeamento</p>
        <p className="mapeamentoTxt">
          Seu registro vai indicar em qual parte dos estádios mais acontecem
          assédios
        </p>
      </div>
    );
  }
}

export default Map;

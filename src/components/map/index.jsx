import "./index.css";
import React from "react";
import icMapeamento from "../../assets/mapeamento.png";
import torcidaCinza from "../../assets/torcida_cinza.png";

class Map extends React.Component {
  render() {
    return (
      <div className="map">
        <legend>Mapeamento</legend>
        <h4>
          Seu registro vai indicar em qual parte dos estádios mais acontecem
          assédios
        </h4>
        <img
          className="iconeMapeamento"
          src={icMapeamento}
          alt="Ícone mapeamento"
        />
        <img className="torcidaCinza" src={torcidaCinza} alt="Torcida Cinza" />
      </div>
    );
  }
}

export default Map;

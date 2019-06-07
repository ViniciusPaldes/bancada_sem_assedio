import "./index.css";
import React from "react";
import icMapeamento from "../../assets/mapeamento.png";
import imgTorcida from "../../assets/bg_torcida_cinza.png";

class Map extends React.Component {
  render() {
    return (
      <div className="map">
        <p>
          Criamos esta ferramenta que visa reunir denúncias e produzir um efeito
          de protesto às mulheres.
          <br />
          <br />O assédio sexual nos estádios é um fruto da nossa sociedade
          machista que não dá o direito de uma mulher ir ao estádio, torcer para
          o seu time sem sofrer algum tipo de assédio sexual. Com o aplicativo,
          hoje, decidimos gritar, lutar e resistir.
        </p>
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
        <img className="torcidaCinza" src={imgTorcida} alt="Torcida Cinza" />
      </div>
    );
  }
}

export default Map;

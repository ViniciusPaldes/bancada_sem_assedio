import React from "react";
import "./index.css";
import imgTxt from "../../assets/ic_txt.png";
import imgMulher from "../../assets/ic_mulher.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <img
          src={imgTxt}
          className="imgTxt"
          alt="Não é uma ferramenta. É uma guerra contra o assédio sexual"
        />
        <img className="imgMulher" src={imgMulher} alt="Mulher" />
      </div>
    );
  }
}

export default Footer;

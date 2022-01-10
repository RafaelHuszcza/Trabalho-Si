import React from "react";

import Logo from "../../assets/news.png";

import "./styles.css";

const Purpose = () => {

  return (
    <div className="purpose">
      <div className = "purposeContent">

        <img id="logo" src={Logo} alt="" />
        <div className ="purposeText">
        <h2 id="title">
        Nossa missão
        </h2>
          <p>Trazer notícias voltadas a tecnologia com a maior fidelidade possível, sempre relatando fatos de uma maneira fidedigna. Temos como objetivo espalhar conhecimento sobre os acontecimentos que estão ocorrendo ao redor do mundo.</p>
        </div>
        <img id="logo" src={Logo} alt="" />
      </div>        
    </div>
  );
};

export default Purpose;

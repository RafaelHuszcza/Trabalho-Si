import React from "react";
import { useHistory } from 'react-router-dom'

import Logo from "../../assets/M.png";
import "./styles.css";

const Header = () => {
  const { push } = useHistory()

  const goToHome = () => push('/')
  
  return (
    <div className="header">
      <div className="headerLogo" onClick={() => goToHome()}>
        <img id="logo" src={Logo} alt="Logo Meta Team" />
        <p id="menuTitle">eta Team</p>
      </div>
      <h1 className="headerTitle">Notícias Tec</h1>
    </div>
  );
};

export default Header;

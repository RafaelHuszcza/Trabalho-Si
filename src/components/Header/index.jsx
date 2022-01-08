import React from "react";
import { useHistory } from 'react-router-dom'

import Logo from "../../assets/M.png";
import "./styles.css";

const Header = () => {
  const history = useHistory();


  
  return (
    <div className="header">
      <div className="headerLogo" onClick={() => history.push('/feed')}>
        <img id="logo" src={Logo} alt="Logo Meta Team" />
        <p id="menuTitle">eta Team</p>
      </div>
      <div className="headerTitle">
      <h1>Notícias Tec</h1>
      </div>
    </div>
  );
};

export default Header;

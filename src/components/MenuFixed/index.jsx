import React from "react";

import {UserOutlined,PoweroffOutlined } from "@ant-design/icons"

import { useHistory } from "react-router-dom";

import { useAuth } from "../../context/authContext";

import Logo from "../../assets/M.png";
import "./styles.css";

const MenuFixed = () => {
  const { signOut  } = useAuth();
  const history = useHistory();
 


  return (
    <div className="menu">
      <div className="menuLogo">
        <img id="logo" src={Logo} alt="Logo Meta Team" />
        <p id="menuTitle">eta Team</p>
      </div>
      
      <div className="menuOptions">
            <button className= "buttonMenu" onClick={() => {history.push("/contato")}}>Contato</button>
            <PoweroffOutlined
                className="rightIcons"
                onClick={() => signOut()}
              />        
      </div>
    </div>
  );
};

export default MenuFixed;

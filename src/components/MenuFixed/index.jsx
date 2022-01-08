import React from "react";

import {PoweroffOutlined } from "@ant-design/icons"

import { useHistory } from "react-router-dom";

import { useAuth } from "../../context/authContext";
import { useToast } from '../../context/toastContext';

import Logo from "../../assets/M.png";
import "./styles.css";

const MenuFixed = () => {
  const { addToast } = useToast()
  const { signOut, isLogged  } = useAuth();
  const history = useHistory();
 
  return (
    <div className="menu">
      <div className="menuLogo" onClick={() => history.push('/feed')} >
        <img id="logo" src={Logo} alt="Logo Meta Team" />
        <p id="menuTitle">eta Team</p>
      </div>
      
      <div className="menuOptions">
      <button className= "buttonMenu" onClick={() => {history.push("/sobre")}}>Sobre</button>
            <button className= "buttonMenu" onClick={() => {history.push("/contato")}}>Contato</button>
            {isLogged() ?
            <PoweroffOutlined
                className="buttonMenu"
                onClick={() => {signOut(); addToast({ type: "success", title: "Login", message:"Deslogado com sucesso" });}}
                
                
              />   
              : <button className= "buttonMenu" onClick={() => {history.push("/login")}}>Login</button>}     
            
            
      </div>
    </div>
  );
};

export default MenuFixed;

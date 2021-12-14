import React, { useState} from "react";
import {
  UserOutlined,
  BellOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import { useLocation, useHistory } from "react-router-dom";

import { useAuth } from "../../context/authContext";
import { useRouting } from "../../context/routingContext";
import { useUsers } from "../../context/usersContext";

import Logo from "../../assets/M.png";
import "./styles.css";

// import NotificationMenu from "../notificationMenu";

const Header = () => {
  const { data, isLogged } = useAuth();
  const { setThisUrlAsPrevious } = useRouting();
  const { setUserToEdit } = useUsers();
  const { pathname } = useLocation();
  const history = useHistory();
  const { signOut } = useAuth();

  return (
    <div className="header">
      <div className="header__logo">
        <img id="logo" src={Logo} alt="Logo Meta Team" />
      </div>
      <h1 className="header__title">Notícias Tec</h1>
      {/* <div className="header__options"> */}
        {/* {isLogged() && (
          <>
            <UserOutlined
              onClick={() => {
                setThisUrlAsPrevious(pathname);
                setUserToEdit(data.user);
                if (data.user.user_type === "mechanical")
                  history.push("/editar-mecanico");
                else history.push("/editar-usuario");
              }}
            />
            <BellOutlined
              className="right-icons"
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && <NotificationMenu />}
            {data.user.user_type === "mechanical" && (
              <PoweroffOutlined
                className="right-icons"
                onClick={() => signOut()}
              />
            )}
          </>
        )} */}
      {/* </div> */}
    </div>
  );
};

export default Header;

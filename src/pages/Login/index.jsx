import React, { useState, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useToast } from "../../context/toastContext";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import errorHandle from "../../helpers/errorHandle";

import "./styles.css";

const login = async ({ login, password }) => {
  try {
    const regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{6,20}$/;
    const content = {
      login: "rafaelhuszcza@gmail.com",
      password: "123456789@",
    };

    if (login.length === 0) return { error: "Insira um nome de usuário." };
    else if (password.length === 0) return { error: "Insira uma senha." };
    else if (password.length > 20 || password.length < 6)
      return { error: "A senha deve conter entre 6 a 20 caracteres!" };
    else if (!regex.test(password))
      return { error: "A senha deve conter caracteres especiais!" };
    else if (login !== content.login)
      return { error: "Usuário não encontrado no banco de dados!" };
    else if (password !== content.password)
      return { error: "Usuário e senha não coincidem" };

    const data = {
      user: { id: "1", name: "Rafael", userType: "admin" },
      token: "1234567890",
    };
    return { user: data.user, token: data.token, error: null };
  } catch (e) {
    const error = errorHandle(e);
    return { user: null, token: null, error: error[0] };
  }
};

const Login = () => {
  const [error, setError] = useState(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef();
  const [inputType, setInputType] = useState("password");

  async function onSubmit(event) {
    event.preventDefault();
    const inputValues = [...formRef.current.elements].reduce(
      (total, { name, value }) => {
        if (name) return { ...total, [name]: value };
        return total;
      },
      {}
    );

    const { user, token, error } = await login(inputValues);
    if (error) {
      setError(error);
      addToast({
        type: "error",
        title: "Erro ao logar",
        message: "Cheque as credenciais",
      });
    }

    if (token && user) {
      addToast({
        type: "success",
        title: "Login",
        message: "Realizado com sucesso",
      });
      signIn(user, token);
      history.push("/Trabalho-Si/home");
    }
  }
  return (
    <div>
      <Header />
      <div className="login">
        <div className="loginUser">
          <form onSubmit={onSubmit} ref={formRef}>
            <div className="loginForm">
              <label htmlFor="user">E-mail:</label>
              <input
                placeholder="exemplo@mail.com"
                id="user"
                type="text"
                name="login"
              />
            </div>
            <div className="loginForm" style={{ position: "relative" }}>
              <label htmlFor="password">Senha:</label>
              <input
                placeholder="********"
                id="password"
                type={inputType}
                name="password"
              />
              <div className="loginFormPasswordEye">
                {inputType === "password" && (
                  <EyeOutlined
                    onClick={() => {
                      setInputType("text");
                    }}
                  />
                )}
                {inputType === "text" && (
                  <EyeInvisibleOutlined
                    onClick={() => {
                      setInputType("password");
                    }}
                  />
                )}
              </div>
            </div>

            {error && <div className="loginUserError">{error}</div>}

            <button className="loginSubmitButton">Entrar</button>

            <div className="loginForgotPassword">
              <Link to="/esqueceu-senha">Esqueceu sua senha?</Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;

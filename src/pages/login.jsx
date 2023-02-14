import React from "react";
import { TextField } from "@mui/material";
import Header from "../components/Header";
import Button from "../components/Button";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="login-container">
      <Header h2="Entrar na sua conta" p="Ou " a="fazer cadastro" />
      <form action="">
        <div className="email-cont">
          <label htmlFor="email">E-mail</label>
          <input type="email" required />
        </div>

        <div className="password-cont">
          <label htmlFor="">Password</label>
          <input type="password" required />
        </div>
        <div className="forget-cont">
          <a href="" id="a">
            Esqueceu a senha?
          </a>
        </div>
        <div className="btn-cont">
          <Button type="submit" name="Entrar" />
        </div>
      </form>
    </div>
  );
}

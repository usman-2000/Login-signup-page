import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import "../styles/signup.css";
import "../styles/login.css";

export default function Signup() {
  const [email1, setEmail1] = useState();
  const [email2, setEmail2] = useState();

  const matchEmail = () => {
    if (email1 !== email2) {
      alert("Email address doesnot match");
    } else {
      return "Email matched";
    }
  };
  return (
    <div className="login-container">
      <Header h2="Criar nova conta" p="Ou " a="entrar na sua conta existente" />

      <form action="">
        <div className="email-cont">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail1(e.target.value)}
          />
        </div>

        <div className="reenter-email-cont">
          <label htmlFor="email">Repetir e-mail</label>
          <input type="email" required onChange={(e) => setEmail2(e)} />
        </div>

        <div className="password-cont">
          <label htmlFor="">Password</label>
          <input type="password" required />
        </div>
        <div className="check-box-cont">
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <p>
              Eu li e aceito os <a href="">termos de uso</a>,
              <a href="">termos de licença de uso de software</a>,
              <a href="">política de conteúdo</a> da Kiwify
            </p>
          </div>
        </div>
        <div className="btn-cont">
          <Button type="submit" name="Entrar" onSubmit={matchEmail} />
        </div>
      </form>
    </div>
  );
}

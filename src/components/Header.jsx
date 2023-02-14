import React from "react";
import kiwify_green from "../images/kiwify_green.png";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <img src={kiwify_green} alt="" />
      <h2>{props.h2}</h2>
      <p>
        {props.p}
        <Link to="/signup">
          <a href="/signup">{props.a}</a>
        </Link>
      </p>
    </div>
  );
}

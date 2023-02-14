import React from "react";
import "../styles/button.css";
export default function Button(props) {
  return (
    <div>
      <button type={props.type} className="btn" onSubmit={props.onSubmit}>
        {props.name}
      </button>
    </div>
  );
}

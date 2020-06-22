import React from "react";

import styles from "./inputBox.css";

const inputBox = (props) => {
  return (
    <div
      className="inputBoxContainer"
      style={{
        flex: props.flex,
      }}
    >
      <p className="inputBoxLabel">{props.boxName}</p>
      <input
        className="inputBox"
        type="text"
        style={{
          width: props.width,
          height: "2rem",
        }}
      ></input>
    </div>
  );
};

export default inputBox;

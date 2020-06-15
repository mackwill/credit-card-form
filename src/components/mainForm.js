import React, { Component } from "react";
import InputBox from "./inputBoxes/inputBox";

import styles from "./mainForm.css";

class mainForm extends Component {
  render() {
    return (
      <div className="formContainer">
        <div className="inputBoxWrapper">
          <InputBox boxName="Credit Card Number" width="90%" />
          <InputBox boxName="Name on Credit Card" width="90%" />
        </div>
      </div>
    );
  }
}

export default mainForm;

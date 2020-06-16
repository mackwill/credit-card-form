import React, { Component } from "react";
import InputBox from "./inputBoxes/inputBox";
import * as inputConstants from "./constants";
import DropDownBox from "./dropDownBox/dropDownBox";

import styles from "./mainForm.css";

class mainForm extends Component {
  render() {
    console.log("mainForm monthExpiry: ", inputConstants.MONTHEXPIRY);
    console.log("mainForm yearExpiry: ", inputConstants.YEAREXPIRY);
    return (
      <div className="formContainer">
        <div className="inputBoxWrapper">
          <InputBox boxName="Credit Card Number" width="90%" />
          <InputBox boxName="Name on Credit Card" width="90%" />

          {/* <p id="expiryDateLabel">Expiry Date</p> */}
          <div className="bottomInputWrapper">
            <div className="dropDownBoxWrapper">
              <p id="expiryDateLabel">Expiry Date</p>
              <DropDownBox
                dropDownListName="Month"
                expiryArr={inputConstants.MONTHEXPIRY}
              />
              <DropDownBox
                dropDownListName="Year"
                expiryArr={inputConstants.YEAREXPIRY}
              />
            </div>
            <InputBox boxName="CVV" width="90%" />
          </div>
        </div>
      </div>
    );
  }
}

export default mainForm;

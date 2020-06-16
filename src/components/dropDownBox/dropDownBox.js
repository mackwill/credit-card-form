import React, { Fragment } from "react";
import styles from "./dropDownBox.css";

const dropDownBox = (props) => {
  return (
    <Fragment>
      <select id={props.dropDownListName} className="dropDownBox">
        {/* <i class="fas fa-chevron-down">So</i> */}
        {props.expiryArr.map((elem) => (
          <option id={elem.id} className="dropDownOption">
            {elem.value}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default dropDownBox;

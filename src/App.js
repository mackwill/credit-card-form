import React from "react";
import logo from "./logo.svg";
import MainForm from "./components/mainForm";
import creditCardTemp from "./creditcardtemp.png";
import "./App.css";

function App() {
  return (
    <div className="pageContainer">
      {/* <img
        src={creditCardTemp}
        style={{ width: "400px", height: "300px" }}
      ></img> */}
      <MainForm />
    </div>
  );
}

export default App;

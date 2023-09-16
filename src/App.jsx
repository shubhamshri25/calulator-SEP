import { useState } from "react";
import React from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [result, setResult] = useState("");

  function handleInput1(e) {
    setNum1(e.target.value);
  }
  function handleInput2(e) {
    setNum2(e.target.value);
  }

  function add() {
    if (num1 == "") {
      setErr("num1 cannot be empty");
      setSuccess("");
    } else if (num2 == "") {
      setErr("num2 cannot be empty");
      setSuccess("");
    } else {
      setErr("");
      setSuccess("Success");
      setResult(parseInt(num1) + parseInt(num2));
    }
  }

  function subtract() {
    if (num1 == "") {
      setErr("num1 cannot be empty");
      setSuccess("");
    } else if (num2 == "") {
      setErr("num2 cannot be empty");
      setSuccess("");
    } else {
      setErr("");
      setSuccess("Success");
      setResult(parseInt(num1) - parseInt(num2));
    }
  }

  function multiply() {
    if (num1 == "") {
      setErr("num1 cannot be empty");
      setSuccess("");
    } else if (num2 == "") {
      setErr("num2 cannot be empty");
      setSuccess("");
    } else {
      setErr("");
      setSuccess("Success");
      setResult(parseInt(num1) * parseInt(num2));
    }
  }

  function division() {
    if (num1 == "") {
      setErr("num1 cannot be empty");
      setSuccess("");
    } else if (num2 == "") {
      setErr("num2 cannot be empty");
      setSuccess("");
    } else {
      setErr("");
      setSuccess("Success");
      setResult(parseInt(num1) / parseInt(num2));
    }
  }
  return (
    <div className="container">
      <h2>React Calculator</h2>
      <input
        type="text"
        placeholder="NUM 1 "
        value={num1}
        onChange={handleInput1}
      />
      <input
        type="text"
        placeholder="NUM 2 "
        value={num2}
        onChange={handleInput2}
      />

      <div className="button-div">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={division}>/</button>
      </div>

      <div className="message">
        <p className="err">{err && "Error !"}</p>
        {err && err}
        <p className="success">{success && "Success !"}</p>
      </div>

      <div className="result">
        {result !== "" && "Result :"} {result && result}
      </div>
    </div>
  );
}

export default App;

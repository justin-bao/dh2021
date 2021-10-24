import React from "react";
import Button from "../components/Button/Button.js";
import InputButton from "../components/InputButton/InputButton.js";
import "./Login.css"

function Login() {
  document.body.style.backgroundColor = "#BCD1E4";
  return (
    <div id="login">
      <h1>Welcome to Noctua!</h1>
      <InputButton Id="email-input" name="email-btn" value="email-value" placeholder="EMAIL"/>
      <InputButton Id="password-input" name="password-btn" value="password-value" placeholder="PASSWORD"/>
      <Button path="/goals" buttonType="" text="LOGIN" />
    </div>
  )
}

export default Login;
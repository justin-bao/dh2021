import React from "react";
import Button from "../components/Button/Button.js";
import "./Login.css"

function Login() {
  document.body.style.backgroundColor = "#BCD1E4";
  return (
    <div>
      <Button path="/goals" buttonType="" text="LOGIN" />
    </div>
  )
}

export default Login;
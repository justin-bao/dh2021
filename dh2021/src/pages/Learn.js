import React from "react";
import Button from "../components/Button.js";
import LearnBox from "../components/LearnBox/LearnBox.js"
import "../pages/Learn.css"

function Learn() {
  document.body.style.backgroundColor = "#BCD1E4";
  return (
    <div>
      <h1>Let's Learn!</h1>
      <LearnBox text="Math" />
    </div>
  )
}

export default Learn;
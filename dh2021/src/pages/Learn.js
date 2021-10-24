import React from "react";
import Button from "../components/Button/Button.js";
import LearnBox from "../components/LearnBox/LearnBox.js"
import "../pages/Learn.css"

function Learn() {
  document.body.style.backgroundColor = "#BCD1E4";
  return (
    <div id="learn">
      <h1>Let's Learn!</h1>
      <LearnBox text="Math" />
      <LearnBox text="Art" />
      <LearnBox text="Reading" />
      <LearnBox text="Science" />
      <LearnBox text="History" />
      <LearnBox text="Tech" />
    </div>
  )
}

export default Learn;
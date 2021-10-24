import React from "react";
import Button from "../components/Button/Button.js";
import LearnBox from "../components/LearnBox/LearnBox.js"
import "../pages/Learn.css"

function Learn() {
  document.body.style.backgroundColor = "#BCD1E4";
  return (
    <div id="learn">
      <h1>Let's Learn!</h1>
      <div id="learn-boxes">
        <LearnBox text="Math" />
        <LearnBox text="Art" user="Justin Bao" />
        <LearnBox text="Reading" />
        <LearnBox text="Science" />
        <LearnBox text="History" />
        <LearnBox text="Tech" />
      </div>
    </div>
  )
}

export default Learn;
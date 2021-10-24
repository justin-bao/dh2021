import React from "react";
import Button from "../components/Button/Button.js";
import Target from "../imgs/target.png";
import "./Break.css"

function Break() {
  document.body.style.backgroundColor = "#BCD1E4";
  return (
    <div id="break">
      <h1>Take a Break!</h1>
      <h2>Meditate</h2>
      <p>
        Is your brain tired? Meditation helps to not only refresh yourself mentally, but also to improve sleep,
        focus, and to relieve stress, allowing you to be more focused and learn more effectively afterwards!
      </p>
      <p>Breathe in...</p>
      <img src={Target} alt="Pastel colored target" width="300" height="300" />
    </div>
  )
}

export default Break;
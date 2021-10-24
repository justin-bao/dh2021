import React from "react";
import "./LearnBox.css"

function LearnBox(props) {
  return (
    <div id="learn-box">
      <h3>{props.text}</h3>
    </div>
  )
}

export default LearnBox;
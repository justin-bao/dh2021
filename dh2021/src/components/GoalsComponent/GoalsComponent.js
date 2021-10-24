import React from "react";
// import Checkbox from "../components/Checkbox.js";
import Bullets from "../Bullets/Bullets.js";
import "./GoalsComponent.css"


function GoalsComponent(props) {
  return (
    <div>
      <h2>{props.text}</h2>
      <div id="purple-square">
        <Bullets path="../imgs/star.dms"/>
      </div>
    </div>
  )
}

export default GoalsComponent;
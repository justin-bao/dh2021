import React from "react";
import Checkbox from "../components/Checkbox.js";
import Bullets from "../components/Bullets.js";


function GoalsComponent(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <div className="purple-square">
        <Bullets path="../imgs/star.dms"/>
      </div>
    </div>
  )
}

export default GoalsComponent;
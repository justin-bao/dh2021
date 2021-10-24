import React from "react";
import Button from "../components/Button.js";
import GoalsComponent from "../components/GoalsComponent/GoalsComponent.js"
import "../pages/Goals.css"

function Goals() {
  document.body.style.backgroundColor = "#BCD1E4";

  return (
    <div id="goals">
      <h1>My Goals</h1>
      <GoalsComponent text="In Progress"/>
      <GoalsComponent text="Completed" />
    </div>
  )
}

export default Goals;
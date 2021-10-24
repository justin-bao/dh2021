import React from "react";
import Button from "../components/Button/Button.js";
import GoalsComponent from "../components/GoalsComponent/GoalsComponent.js"
import "../pages/Goals.css"

function Goals() {
  document.body.style.backgroundColor = "#BCD1E4";

  return (
    <div id="goals">
      <h1>My Goals</h1>
      <div id="goal-components">
        {/* <GoalsComponent text="In Progress"/>
        <GoalsComponent text="Completed" /> */}

        <div id="in-progress">
          <h2>In Progress</h2>
          <div id="purple-square">
            <li className="todo stack-small">
              <div className="c-cb">
                <input id="todo-0" type="checkbox"/>
                <label>
                  Count to 20
                </label>
              </div>
            </li>
            <li className="todo stack-small">
              <div className="c-cb">
                <input id="todo-0" type="checkbox"/>
                <label>
                  Practice Grammar
                </label>
              </div>
            </li>
          </div>
        </div>

        <div id="completed">
          <h2>Completed</h2>
          <div id="purple-square">
            
          </div>
        </div>


      </div>
    </div>
  );
}

export default Goals;
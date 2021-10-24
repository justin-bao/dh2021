import React from "react";
import Button from "../components/Button/Button.js";
import GoalsComponent from "../components/GoalsComponent/GoalsComponent.js";
import "../pages/Goals.css";
import Star from "../imgs/star.dms";

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
          <div className="purple-square">
            <ul className="todo">
              <li>
                <input id="goal-0" type="checkbox"/>
                <label> Count to 20 </label>
              </li>
              <li>
                <input id="goal-1" type="checkbox"/>
                <label>Practice Grammar</label>
              </li>
            </ul>
          </div>
        </div>

        <div id="completed">
          <h2>Completed</h2>
          <div className="purple-square">
            <ul className="todo">
              <li><img src={Star} alt="Star bullet point" height="30px" width="30px"/>Count to 10</li>
              <li><img src={Star} alt="Star bullet point" height="30px" width="30px"/>Read Chapter 1</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Goals;
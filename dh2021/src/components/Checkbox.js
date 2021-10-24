import React from "react";

function Checkbox(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox"/>
        <label>
        {/* <label className="todo-label" htmlFor="todo-0"> */}
          {props.text}
        </label>
      </div>
    </li>
  )
}

export default Checkbox;
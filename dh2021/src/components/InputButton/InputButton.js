import React from "react"
import "./InputButton.css"

function InputButton(props) {
  return (
    <div id="input-btn">
      <form> 
        {/* <label for={props.Id}>{props.text}</label> */}
        <input type="text" id={props.Id} name={props.name} value={props.text} placeholder={props.placeholder}></input>
      </form>
    </div>
  )
}

export default InputButton;
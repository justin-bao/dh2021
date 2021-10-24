import React from "react"

function InputButton(props) {
  return (
    <div>
      <form> 
        {/* <label for={props.Id}>{props.text}</label> */}
        <input type="text" id={props.Id} name={props.name} value={props.text}></input>
      </form>
    </div>
  )
}

export default InputButton;
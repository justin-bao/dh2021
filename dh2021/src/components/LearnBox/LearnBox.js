import React, { useState, useEffect } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import "./LearnBox.css"

function LearnBox(props) {
  const [answer, setAnswer] = useState("");

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answer == props.correctAnswer) {
      alert("You got it!");
    } else {
      alert("Try again!");
    }
  };

  return (
    <div id="learn-box">
      <h3>{props.text}</h3>
      <div id="box1">
        {props.box1}
      </div>
      <div id="box2">
        {props.box2}
      </div>
      <div id="box3">
        {props.box3}
      </div>
      <form onSubmit={handleSubmit}>
        <label for="answer">What's the answer?</label>
        <input type="text" id="answer" name="answer" value={answer} onChange={handleChange} />
        <input type="submit" value="I got it!"/>
      </form>
    </div>
  )
}

function handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}

export default LearnBox;
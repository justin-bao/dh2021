import React, { useState, useEffect } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import "./LearnBox.css"

function LearnBox(props) {
  const [question, setQuestion] = useState({question: "", correct_answer: null});
  const [answer, setAnswer] = useState("");

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    if (answer === question.correct_answer) {
      console.log(props.user);
      alert("You got it!");
      fetch('/api/add-stickers', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: props.user, stickers: 1})
      }).then(response => {
        console.log(response.text());
      }).catch (error => {
        console.log(error)
      })
    } else {
      alert("Try again!");
    }
  };

  const handleNewQuestionSubmit = (event) => {
    event.preventDefault();
    fetch('/api/question?subject=' + props.text.toLowerCase())
    .then(response => response.json())
    .then(data => {
      console.log(question);
      console.log(data);

      setQuestion(data);
    }).catch (error => {
      console.log(error)
    })
  };

  return (
    <div id="learn-box">
      <h3>{props.text}</h3>
      <div id="question">
        <p>{question.question}</p>
      </div>
      <form onSubmit={handleAnswerSubmit}>
        <label>What's the answer?</label>
        <input type="text" id="answer" name="answer" value={answer} onChange={handleChange} />
        <input type="submit" value="I got it!"/>
      </form>
      <form onSubmit={handleNewQuestionSubmit}>
        <input type="submit" value="Gimme a new question!"/>
      </form>

    </div>
  )
}

export default LearnBox;
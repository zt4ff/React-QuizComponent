import React, { Component } from "react";

class QuizQuestion extends Component {
  render() {
    return (
      <main>
        <section>
          <p>{props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {props.quiz_question.answer.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;

import "./assets/app.css";
import Trivia from "./component/Trivia";
import Timer from "./component/Timer";
import { useState } from "react"



function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: " 1 + 1 = ?",
      answers: [
        {
          text: "-2",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "I don't know",
          correct: false,
        },
        {
          text: "Rickroll",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What's the name of the song ?",
      answers: [
        {
          text: "I don't heard anything",
          correct: true,
        },
        {
          text: "???",
          correct: true,
        },
        {
          text: "What's wrong with you",
          correct: true,
        },
        {
          text: "Definitely Rickroll",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Do you think my group will succeed in the project?",
      answers: [
        {
          text: "nope",
          correct: false,
        },
        {
          text: "still nope",
          correct: false,
        },
        {
          text: "Yes, why not",
          correct: true,
        },
        {
          text: "another Rickroll",
          correct: true,
        },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="main">
        {timeOut ? <h1 className="endText">
          Thank you for playing!</h1> : (
<>
        <div className="top">

          <div className="timer">
            <Timer setTimeOut={setTimeOut} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Trivia
            data={data}
            setTimeOut={setTimeOut}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div></>
        )}
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react"
import correctSound from "../assets/correct.mp3";
import wrongSound from "../assets/wrong.mp3";

export default function Trivia({ data, setTimeOut, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const correctAudio = new Audio(correctSound);
  const wrongAudio = new Audio(wrongSound);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1500,() => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
      if (a.correct) {
        correctAudio.play();
      } else {
        wrongAudio.play();
      }
  });
  
    delay(3500, ()=>{
      if (a.correct && questionNumber !== data.length) {
        setQuestionNumber((prev) => prev +1);
        setSelectedAnswer(null);
      } else if (questionNumber === data.length){
        setTimeOut(true);
      }
      else {
        setQuestionNumber((prev) => prev +1);
        setSelectedAnswer(null);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)} // Use an arrow function here
            key={a.text} // Add a unique key to each answer
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}

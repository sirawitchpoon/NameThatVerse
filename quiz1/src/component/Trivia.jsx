import React, { useEffect, useState, useRef } from 'react';
import correctSound from "../assets/correct.mp3";
import wrongSound from "../assets/wrong.mp3";
import questionSound from "../assets/RickRoll.mp3";

function Trivia({ data, setTimeOut, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const correctAudio = new Audio(correctSound);
  const wrongAudio = new Audio(wrongSound);
  const questionAudio = new Audio(questionSound);

  const questionAudioRef = useRef(questionAudio);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    // Pause and reset the question sound using the ref
    questionAudioRef.current.pause();
    questionAudioRef.current.load();
    setQuestion(data[questionNumber - 1]);

    // Play the question sound for the new question
    questionAudioRef.current.play().catch(error => {
      console.error("Audio playback error:", error);
    });
  }, [data, questionNumber, questionAudioRef]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1500, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
      if (a.correct) {
        correctAudio.play().catch(error => {
          console.error("Audio playback error:", error);
        });
      } else {
        wrongAudio.play().catch(error => {
          console.error("Audio playback error:", error);
        });
      }
    });

    delay(3500, () => {
      if (a.correct && questionNumber !== data.length) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else if (questionNumber === data.length) {
        setTimeOut(true);
      } else {
        setQuestionNumber((prev) => prev + 1);
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
            onClick={() => handleClick(a)}
            key={a.text}
          >
            {a.text}
          </div>
        ))}
      </div>
      
      <button onClick={() => questionAudioRef.current.play()}>Play Question Sound</button>
    </div>
  );
}

export default Trivia;

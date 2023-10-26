import React from "react";
import { useState } from "react"
import Timer from "./Timer";
import Trivia from "./Trivia";
import Start from "./Start";
import './../assets/Game.css';

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false); // เพิ่มสถานะเริ่มเกม

  const [isPlayingQuestionSound, setIsPlayingQuestionSound] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  const [score, setScore] = useState(0);

  const data = [
    {
      id: 1,
      question: "What's the name of the song ?",
      answers: [
        {
          text: "Rick and Morty",
          correct: false,
        },
        {
          text: "Ricardo Milos",
          correct: false,
        },
        {
          text: "Ricko",
          correct: false,
        },
        {
          text: "Rickroll",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "What's the name of the song ?",
      answers: [
        {
          text: "Moonlight ",
          correct: true,
        },
        {
          text: "Kiss Kiss",
          correct: false,
        },
        {
          text: "I just wanna pen fan you dai bor",
          correct: false,
        },
        {
          text: "Definitely Rickroll",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What's the name of the song ?",
      answers: [
        {
          text: "คนจนละมีสิทธิ์มั้ยคะ",
          correct: true,
        },
        {
          text: "Rick Roll",
          correct: false,
        },
        {
          text: "คนรวย",
          correct: false,
        },
        {
          text: "ซุปเปอร์วาเลนไทน์",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What's the name of the song ?",
      answers: [
        {
          text: "N---a",
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
    {
      id: 5,
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
        {isGameStarted ? ( // ตรวจสอบว่าเกมเริ่มหรือยัง
          timeOut ? (
            <h1 className="endText">Thank you for playing!</h1>
          ) : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
                </div>
              </div>
              <div className="bottom">
                <Trivia
                  data={data}
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  isPlayingQuestionSound={isPlayingQuestionSound}
                  setIsPlayingQuestionSound={setIsPlayingQuestionSound}
                  setScore={setScore} // Pass the setScore function to Trivia
                  score={score} // Pass the score to Trivia
                />
              </div>
            </>
          )
        ) : (
          <Start startGame={startGame} /> // แสดงหน้าเริ่มต้นถ้าเกมยังไม่เริ่ม
        )}
      </div>
      <div className="score">Score: {score}</div> {/* Display the score */}
    </div>
  );
}
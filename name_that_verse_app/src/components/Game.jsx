import React from "react";
import { useState } from "react"
import Timer from "./Timer";
import Trivia from "./Trivia";
import './../assets/Game.css';

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [showStartPage, setShowStartPage] = useState(true);

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

  const startGame = () => {
    // เมื่อผู้เล่นเริ่มเกม
    setQuestionNumber(1); // กำหนดคำถามให้เริ่มที่ 1
    setTimeOut(false); // รีเซ็ต timeOut เป็น false
    setShowStartPage(false); // ซ่อนหน้าแรก
  };

  return (
    <div className="app">
      <div className="main">
        {showStartPage ? ( // แสดงหน้าแรกเมื่อ showStartPage เป็น true
          <StartPage startGame={startGame} />
        ) : timeOut ? (
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
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StartPage({ startGame }) {
  return (
    <div className="start">
      <h1>Song Guesser Game</h1>
      <h2>Do you want to start playing?</h2>
      <button className="startButton" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
}
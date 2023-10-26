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
      question: "1. What's the name of the song ?",
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
          text: "Never Gonna Give You Up",
          correct: true,
        },
        {
          text: "Rickroll",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "2. What's the name of the song ?",
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
      question: "3. What's the name of the song ?",
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
      question: "4. What's the name of the song ?",
      answers: [
        {
          text: "N---a (I mean Ninja)",
          correct: false,
        },
        {
          text: "Darari",
          correct: true,
        },
        {
          text: "Daranee",
          correct: false,
        },
        {
          text: "DaoMeeWaiBherng",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "5. What's the name of the song ?",
      answers: [
        {
          text: "seven",
          correct: true,
        },
        {
          text: "eight",
          correct: false,
        },
        {
          text: "nine",
          correct: false,
        },
        {
          text: "ten",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "6. What's the name of the song ?",
      answers: [
        {
          text: "Daler Mehndi",
          correct: false,
        },
        {
          text: "Tunak Tunak Tun",
          correct: true,
        },
        {
          text: "Rusputin",
          correct: false,
        },
        {
          text: "Trut Trut",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "7. What's the name of the song ?",
      answers: [
        {
          text: "White Tee",
          correct: true,
        },
        {
          text: "Star Boy",
          correct: false,
        },
        {
          text: "RIZZZZZZZZZZ",
          correct: false,
        },
        {
          text: "Double Take",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "8. What's the name of the song ?",
      answers: [
        {
          text: "Kung Fuu",
          correct: false,
        },
        {
          text: "Dragon Warrior",
          correct: false,
        },
        {
          text: "Tom",
          correct: false,
        },
        {
          text: "Ching Chen Hon Chi",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "9. What's the name of the song ?",
      answers: [
        {
          text: "9MM",
          correct: true,
        },
        {
          text: "wadadadang",
          correct: false,
        },
        {
          text: "wadadudung",
          correct: false,
        },
        {
          text: "10MM",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "10. What's the name of the song ?",
      answers: [
        {
          text: "Lion",
          correct: false,
        },
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Panda",
          correct: true,
        },
        {
          text: "Zebra",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "11. What's the name of the song ?",
      answers: [
        {
          text: "ดาวหางฮัลเลย์",
          correct: true,
        },
        {
          text: "ดาวหางฮัลลาล",
          correct: false,
        },
        {
          text: "ดาวหางฮัลโหล",
          correct: false,
        },
        {
          text: "ดาวหางฮัลเลลูย่า",
          correct: false,
        },
      ],
    },

  ];

  return (
    <div className="app">
      <div className="main">
        {isGameStarted ? ( // ตรวจสอบว่าเกมเริ่มหรือยัง
          timeOut ? (
              <h1 className="endText">
                Thank you for playing!
                <br />
                <span>Your score is: {score}</span>
              </h1>
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
    </div>
  );
}
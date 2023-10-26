import React, { useEffect, useState, useRef } from 'react';
import correctSound from "../assets/correct.mp3";
import wrongSound from "../assets/wrong.mp3";
import question1 from "../assets/RickRoll.mp3";
import question2 from "../assets/Moonlight.mp3";
import question3 from "../assets/konjon.mp3";
import question4 from "../assets/Darari.mp3";
import question5 from "../assets/Seven.mp3";


function Trivia({ data, setTimeOut, questionNumber, setQuestionNumber, isPlayingQuestionSound, setScore, score }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const correctAudio = new Audio(correctSound);
  const wrongAudio = new Audio(wrongSound);
  const questionAudioRef1 = useRef(new Audio(question1)); // สร้าง useRef สำหรับคำถามที่ 1
  const questionAudioRef2 = useRef(new Audio(question2)); // สร้าง useRef สำหรับคำถามที่ 2
  const questionAudioRef3 = useRef(new Audio(question3)); // สร้าง useRef สำหรับคำถามที่ 3
  const questionAudioRef4 = useRef(new Audio(question4)); // สร้าง useRef สำหรับคำถามที่ 4
  const questionAudioRef5 = useRef(new Audio(question5)); // สร้าง useRef สำหรับคำถามที่ 5

  
  
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };


  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    if (questionNumber === 1) {
      if (!questionAudioRef1.current) {
        questionAudioRef1.current = new Audio(question1);
      }
      questionAudioRef2.current.pause(); // หยุดเสียงคำถาม 2
      questionAudioRef1.current.volume = 1;
      questionAudioRef1.current.play().catch(error => {
        console.error("Audio playback error for question 1:", error);
      });
    } else if (questionNumber === 2) {
      if (!questionAudioRef2.current) {
        questionAudioRef2.current = new Audio(question2);
      }
      questionAudioRef1.current.pause(); // หยุดเสียงคำถาม 1
      questionAudioRef2.current.volume = 1;
      questionAudioRef2.current.play().catch(error => {
        console.error("Audio playback error for question 2:", error);
      });
    }
    else if (questionNumber === 3) {
      if (!questionAudioRef3.current) {
        questionAudioRef2.current = new Audio(question3);
      }
      questionAudioRef2.current.pause(); // หยุดเสียงคำถาม 1
      questionAudioRef3.current.volume = 1;
      questionAudioRef3.current.play().catch(error => {
        console.error("Audio playback error for question 3:", error);
      });
    }
    else if (questionNumber === 4) {
      if (!questionAudioRef4.current) {
        questionAudioRef4.current = new Audio(question4);
      }
      questionAudioRef3.current.pause(); // หยุดเสียงคำถาม 1
      questionAudioRef4.current.volume = 1;
      questionAudioRef4.current.play().catch(error => {
        console.error("Audio playback error for question 4:", error);
      });
    }
    else if (questionNumber === 5) {
      if (!questionAudioRef5.current) {
        questionAudioRef5.current = new Audio(question5);
      }
      questionAudioRef4.current.pause(); // หยุดเสียงคำถาม 1
      questionAudioRef5.current.volume = 1;
      questionAudioRef5.current.play().catch(error => {
        console.error("Audio playback error for question 4:", error);
      });
    }
  }, [data, questionNumber, isPlayingQuestionSound]);
  


  

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1500, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
      if (a.correct) {
        correctAudio.play().catch(error => {
          console.error("Audio playback error:", error);
        });
        setScore(score + 1);
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
    </div>
  );
}

export default Trivia;

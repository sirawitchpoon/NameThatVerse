import React from "react";
import styled from "styled-components";
import SongGuesserLogo from "../assets/NameThatVerse_SongGuesser_Logo.png";

export default function Start({ startGame }) {

  const handleClick = () => {
      startGame(); // เริ่มเกมเมื่อกด "Start"
  };

  return (
        <Container>
          <img
          src={SongGuesserLogo}
          alt="song-guesser-logo"
          width={1080}
          height={550}
          />
          <button className="startButton" onClick={handleClick}>Start</button>
      </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: purple;
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: purple;
    border: none;
    font-size: 3rem;
    cursor: pointer;
  }

`;
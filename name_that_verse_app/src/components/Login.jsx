import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NameThatVerseLogo from "../assets/NameThatVerse_Logo.png";

export default function Login() {
  const handleLoginClick = async () => {
    const client_id = "9c4c386dc61444c4979955c04e234f9d";
    
    //Use this redirect_uri if you deploy on Netlify. The sound work but there will be a problem if you run on localhost
    // const redirect_uri = "https://name-that-verse.netlify.app";

    // //Use this redirect_uri if you run on localhost. But the sound will not work due to the CORS policy
    const redirect_uri = "http://localhost:3000";


    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src={NameThatVerseLogo}
        alt="spotify"
        width={1080}
        height={550}
      />
      <button className="buttonMain" onClick={handleLoginClick}>Music Streaming <br /> <i>(Require Spotify login)</i></button>
      <Link to="/game" target="_blank">
      <button className="buttonGame">Song Guesser Game</button>
      </Link>
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
  background-color: #1db954;
  gap: 1.5rem;
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  i {
    font-size: 1rem;
  }

`;

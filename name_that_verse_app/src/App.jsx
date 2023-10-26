import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // ใช้ Routes แทน Switch
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import Game from "./components/Game";

import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "NameThatVerse";
  }, [dispatch, token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Spotify /> : <Login />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

import "./assets/app.css";
import Trivia from "./component/Trivia";

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">15</div>
        </div>
        <div className="bottom">
          <Trivia></Trivia>
        </div>
      </div>
    </div>
  );
}

export default App;
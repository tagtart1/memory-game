import "../styles/App.css";
import Header from "./Header";
import Scoreboard from "./Scoreboard";

import { useState, useEffect } from "react";
import CardManager from "./CardManager";

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, [score, highscore]);

  const increaseScore = () => {
    console.log("jorge");
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
        <Scoreboard score={score} highscore={highscore} />
      </div>
      <div className="main">
        <CardManager increaseScore={increaseScore} resetScore={resetScore} />
      </div>
    </div>
  );
}

export default App;

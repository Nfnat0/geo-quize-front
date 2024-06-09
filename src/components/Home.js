import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/game?difficulty=${difficulty}`);
  };

  return (
    <div className="home">
      <h1>Geo Quiz</h1>
      <div className="difficulty-label-group">
        <label>
          <input
            type="radio"
            value="easy"
            checked={difficulty === "easy"}
            onChange={() => setDifficulty("easy")}
          />
          Easy
        </label>
        <label>
          <input
            type="radio"
            value="medium"
            checked={difficulty === "medium"}
            onChange={() => setDifficulty("medium")}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            value="hard"
            checked={difficulty === "hard"}
            onChange={() => setDifficulty("hard")}
          />
          Hard
        </label>
      </div>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Home;

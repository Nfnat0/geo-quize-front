import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchImagesByDifficulty } from "../api/mockApi";
import "../styles/Game.css";

const Game = () => {
  const [imageData, setImageData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = new URLSearchParams(location.search).get("difficulty");

  useEffect(() => {
    fetchImagesByDifficulty(difficulty).then((data) => setImageData(data));
  }, [difficulty]);

  const handleConfirm = () => {
    const selectedCoordinates = { latitude: 37.7749, longitude: -122.4194 }; // mock data for selected coordinates
    navigate("/results", { state: { imageData, selectedCoordinates } });
  };

  return (
    <div className="game">
      {imageData && (
        <>
          <img src={imageData.image_path} alt="Geo Quiz" />
          <div className="map">Map Placeholder</div>
          <button onClick={handleConfirm}>Confirm</button>
        </>
      )}
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default Game;

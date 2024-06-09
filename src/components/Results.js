import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { calculateDistance } from "../utils/calculateDistance";
import "../styles/Results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageData, selectedCoordinates } = location.state || {};

  if (!imageData) {
    return <div>No data available. Please go back and play again.</div>;
  }

  const distance = calculateDistance(
    imageData.coordinates.latitude,
    imageData.coordinates.longitude,
    selectedCoordinates.latitude,
    selectedCoordinates.longitude
  );

  return (
    <div className="results">
      <h2>Results</h2>
      <p>Distance: {distance.toFixed(2)} km</p>
      <p>Address: {imageData.address}</p>
      <button onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
};

export default Results;

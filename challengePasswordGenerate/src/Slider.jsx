import React, { useState } from "react";
import "./Slider.css";

function Slider() {
  const [valor, setValor] = useState(10);

  const handleSliderChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className="slider-container">
      <label className="slider-label">Character Lenght</label>
      <div className="slider-value">{valor}</div>
      <div className="slider-wrapper">
        <input
          type="range"
          min="0"
          max="20"
          value={valor}
          onChange={handleSliderChange}
          className="slider-input"
        />
        <div className="slider-fill" style={{ width: `${(valor / 20) * 95}%` }}></div>
      </div>
    </div>
  );
}

export default Slider;

import React from 'react';
import './Slider.css';

function Slider({ passwordLength, setPasswordLength }) {
  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setPasswordLength(newValue);
  };

  return (
    <div className="slider-container">
      <label className="slider-label">Character Length</label>
      <div className="slider-value">{passwordLength}</div>
      <div className="slider-wrapper">
        <input
          type="range"
          min="0"
          max="20"
          value={passwordLength}
          onChange={handleSliderChange}
          className="slider-input"
        />
        <div className="slider-fill" style={{ width: `${(passwordLength / 20) * 95}%` }}></div>
      </div>
    </div>
  );
}

export default Slider;


import React, { useState } from "react";
import './Slider.css'

function Slider() {
  const [valor, setValor] = useState(10);

  const handleSliderChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="20"
        value={valor}
        onChange={handleSliderChange}
      />
      <p>{valor}</p>
    </div>
  );
}

export default Slider;

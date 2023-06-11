import React from "react";
import "./Rectangle.css";
const Rectangle = ({ dim, setDim, dim2, setDim2 }) => {
  return (
    <div>
      <div className="rectangle-wrapper">
        <div>
          <span>Length (Max. 230 cm)</span>
          <div className="input-wrapper">
            <input
              type="number"
              className="d-input"
              value={dim}
              onChange={(e) => setDim(e.target.value)}
            />
            <span>Cm</span>
          </div>
        </div>
        <div>
          <span>Width (Max. 110 cm)</span>
          <div className="input-wrapper">
            <input
              type="number"
              className="d-input"
              value={dim2}
              onChange={(e) => setDim2(e.target.value)}
            />
            <span>Cm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;

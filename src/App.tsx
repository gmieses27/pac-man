import React from "react";
import "./App.css";

function App() {

  



  return (
  <div className="game-wrapper">
    <div className="game-container">
      <h1 className="game-title">Pac Man</h1>
      <canvas id="game-canvas" width={448} height={496} />
    </div>
  </div>  
  );
}

export default App;

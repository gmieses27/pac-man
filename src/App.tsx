import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    // Game state variables
    let x = 50;
    let y = 50;
    const speed = 2;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    };

    const update = () => {
      // Basic movement logic (e.g. move right)
      x += speed;
    };

    const loop = () => {
      update();
      draw();
      requestAnimationFrame(loop);
    };

    loop();

    // Keyboard input
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') x += speed;
      else if (e.key === 'ArrowLeft') x -= speed;
      else if (e.key === 'ArrowUp') y -= speed;
      else if (e.key === 'ArrowDown') y += speed;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


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

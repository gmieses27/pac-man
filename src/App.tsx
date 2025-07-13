import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    let gameRunning = true;

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      if (pacman.direction === 'right') pacman.x += pacman.speed;
      if (pacman.direction === 'left') pacman.x -= pacman.speed;
      if (pacman.direction === 'up') pacman.y -= pacman.speed;
      if (pacman.direction === 'down') pacman.y += pacman.speed;


      ctx.beginPath();
      ctx.arc(pacman.x, pacman.y, pacman.radius, 0.2, Math.PI * 2 - 0.2);
      ctx.lineTo(pacman.x, pacman.y);
      ctx.fillStyle = 'yellow';
      ctx.fill();

      if(gameRunning) {
        requestAnimationFrame(gameLoop);
      }
    };

    const pacman = {
      x: 224,  // Center position
      y: 368,
      radius: 15,
      speed: 2,
      direction: 'right' as 'up' | 'down' | 'left' | 'right'
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') pacman.direction = 'right';
      if (e.key === 'ArrowLeft') pacman.direction = 'left';
      if (e.key === 'ArrowUp') pacman.direction = 'up';
      if (e.key === 'ArrowDown') pacman.direction = 'down';
    };

    window.addEventListener('keydown', handleKeyDown);





    gameLoop();

    return () => {
    gameRunning = false; // Cleanup
    };
  }, []);


  return (
  <div className="game-wrapper">
    <div className="game-container">
      <h1 className="game-title">Pac Man</h1>
      <canvas id="game-canvas" width={448} height={496} ref={canvasRef} />
    </div>
  </div>  
  );
}

export default App;

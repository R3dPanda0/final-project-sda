import React, { useEffect, useRef } from "react";
import { BallMovement } from "./BallMovement";
import data from "../util/data";
import WallCollision from "../util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "../util/BrickCollision";
import PaddleHit from "../util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "../util/AllBroke";
import ResetBall from "../util/ResetBall";

let bricks = [];
let { ballObj, paddleProps, brickObj, player } = data;

let inMenu = 1;
let inPause = 1;

export default function Board() {
  const canvasRef = useRef(null);

  const currentBestScore = localStorage.getItem("Breakout Best Score");

  const [score, setScore] = React.useState(currentBestScore);

  React.useEffect(() => {
    localStorage.setItem('Breakout Best Score', score);
  }, [score]);

  useEffect(() => {
    const render = () => {
    if(inMenu === 0)
    {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleProps.y = canvas.height - 30;

      // Assign Bricks
      let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      PlayerStats(ctx, player, canvas);

      // Display Bricks
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      // Handle Ball Movement
      if(inPause === 0) {
        BallMovement(ctx, ballObj);
      }

      if(inPause === 1) {
        BallMovement(ctx, ballObj);
        ballObj.x = 600;
        ballObj.y = 430;
      }

      canvas.addEventListener('click', function() {
        inPause = 0;
      }, false);
      
      // Check all broken
      AllBroken(bricks, player, canvas, ballObj);

      if (player.lives === 0) {
        const currentScore = player.score;
        const bestScore = localStorage.getItem("Breakout Best Score");
        if(currentScore > bestScore) {
          setScore(currentScore);
        }
        inMenu = 1;
        player.lives = 5;
        player.level = 1;
        player.score = 0;
        ResetBall(ballObj, canvas, paddleProps);
        bricks.length = 0;
        brickObj.y = 50;
      }
      // Ball and Wall Collision
      WallCollision(ballObj, canvas, player, paddleProps);

      // Brick Collision
      let brickCollision;

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);

        if (brickCollision.hit && !bricks[i].broke) {
          if (brickCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10;
        }
      }
      Paddle(ctx, canvas, paddleProps);

      // Paddle + Ball Collision
      PaddleHit(ballObj, paddleProps);

      requestAnimationFrame(render);
    }
    else if(inMenu === 1) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "50px Arial";
      ctx.fillText("Breakout", 600, 100);
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

      ctx.font = "40px Arial";
      ctx.fillText("Click to Play", 600, 300);
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

      canvas.addEventListener('click', function() {
        inMenu = 0;
      }, false);

      requestAnimationFrame(render);
    }
  }
  render();
}, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="gameHeader">Breakout Game</h1>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={(event) =>
          (paddleProps.x =
            event.clientX -
            (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
            paddleProps.width / 2 -
            10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }
      />
    </div>
  );
}
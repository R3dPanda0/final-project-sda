export default function Brick(level, bricks, canvas, brick) {
  brick.width = canvas.width / 5 - 1;
  let newbricks = [];
  if (!bricks) {
    return [];
  }
  // If all the levels are filled
  if (bricks.length >= 5 * level) {
    return;
  }

  // Brick Formation here
  for (let i = 0; i < 5 * level; i++) {
    let newBrick = new SingleBrick(
      brick.x + brick.width,
      brick.y,
      brick.width,
      brick.height,
    );
    newbricks.push(newBrick);
    // newBrick.draw();
    brick.x += brick.width + 1;
    if (brick.x + brick.width >= canvas.width) {
      brick.x = 0.5;
      brick.y += brick.height + 1;
    }
  }
  return newbricks;
}

class SingleBrick {
  constructor(x, y, w, h) {
    this.x = x - w;
    this.y = y;
    this.width = w;
    this.height = h;
    this.broke = false;
  } 
  draw(ctx) {
    const grd = ctx.createLinearGradient(220, 190, 210, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.broke ? "rgba(19, 73, 89, 0)" : grd;
    ctx.lineWidth = 2;
    ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0)" : "black";
    // ctx.globalCompositeOperation = "destination-atop";
    // ctx.shadowBlur = 0;
    // ctx.shadowColor = "blue";
    ctx.fill();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}
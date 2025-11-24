export class TiltedTowers {
  constructor() { this.area = { x: 200, y: 200, w: 600, h: 600 }; }
  draw(ctx) {
    ctx.fillStyle = "rgba(100,100,255,0.3)";
    ctx.fillRect(this.area.x, this.area.y, this.area.w, this.area.h);
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Tilted Towers", this.area.x + 10, this.area.y + 40);
  }
}

export class Zone {
  constructor(){
    this.radius = 1500;
    this.shrinkRate = 0.05;
    this.center = {x:1000, y:1000};
  }
  update(player){
    this.radius -= this.shrinkRate;
    const d = Math.hypot(player.x - this.center.x, player.y - this.center.y);
    if(d > this.radius) player.hp -= 0.1;
  }
  draw(ctx){
    ctx.strokeStyle="rgba(0,255,0,0.5)";
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI*2);
    ctx.stroke();
  }
}

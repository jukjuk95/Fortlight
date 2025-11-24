export class LootSystem {
  constructor() {
    this.drops = [];
    for(let i=0;i<10;i++){
      this.drops.push({ x: Math.random()*2000, y: Math.random()*2000, item:'AR' });
    }
  }
  update(player) {
    this.drops = this.drops.filter(l => {
      const d = Math.hypot(player.x-l.x, player.y-l.y);
      return d>50; // picked up
    });
  }
  draw(ctx) {
    ctx.fillStyle="yellow";
    this.drops.forEach(l=>ctx.fillRect(l.x,l.y,20,20));
  }
}

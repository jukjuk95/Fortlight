export class BuildingSystem {
  constructor() { this.structures = []; }
  place(x, y) { this.structures.push({ x, y }); }
  draw(ctx) {
    ctx.fillStyle = "orange";
    this.structures.forEach(s => ctx.fillRect(s.x, s.y, 50, 50));
  }
}

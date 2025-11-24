import { mobileInput } from './mobileControls.js';
import { BuildingSystem } from './building.js';
import { TiltedTowers } from './tilted.js';
import { LootSystem } from './loot.js';
import { Zone } from './zone.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth; canvas.height = innerHeight;

let player = { x:500, y:500, hp:100 };
const buildings = new BuildingSystem();
const tilted = new TiltedTowers();
const loot = new LootSystem();
const zone = new Zone();

document.getElementById("buildBtn").onclick = () => buildings.place(player.x, player.y);

function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  player.x += mobileInput.x*4;
  player.y += mobileInput.y*4;

  tilted.draw(ctx);
  loot.update(player);
  loot.draw(ctx);
  buildings.draw(ctx);
  zone.update(player);
  zone.draw(ctx);

  ctx.fillStyle="cyan";
  ctx.fillRect(player.x,player.y,40,40);

  requestAnimationFrame(loop);
}
loop();

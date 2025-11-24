export const mobileInput = { x: 0, y: 0, shooting: false };
const joy = document.getElementById("joystick");
const stick = document.getElementById("stick");
let drag = false, center = { x: 0, y: 0 };

joy.addEventListener("touchstart", e => {
  drag = true;
  const r = joy.getBoundingClientRect();
  center.x = r.left + r.width/2;
  center.y = r.top + r.height/2;
});

joy.addEventListener("touchmove", e => {
  if (!drag) return;
  const t = e.touches[0];
  const dx = t.clientX - center.x;
  const dy = t.clientY - center.y;
  const dist = Math.min(Math.sqrt(dx*dx + dy*dy), 40);
  const angle = Math.atan2(dy, dx);
  stick.style.left = 30 + Math.cos(angle) * dist + "px";
  stick.style.top = 30 + Math.sin(angle) * dist + "px";
  mobileInput.x = Math.cos(angle) * (dist / 40);
  mobileInput.y = Math.sin(angle) * (dist / 40);
});

joy.addEventListener("touchend", () => {
  drag = false;
  stick.style.left = "30px";
  stick.style.top = "30px";
  mobileInput.x = 0;
  mobileInput.y = 0;
});

document.getElementById("shootBtn").addEventListener("touchstart", () => mobileInput.shooting = true);
document.getElementById("shootBtn").addEventListener("touchend", () => mobileInput.shooting = false);

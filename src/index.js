import './index.scss';
import Male3Walk from './assets/Male-3-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;
let bottomDownPressed = false;
let bottomUpPressed = false;
let bottomLeftPressed = false;
let bottomRightPressed = false;
let pY = 300;
let pX = 275;
let pDir = 0;
function keyDownHandler(e) {
  switch (e.key) {
    case 'ArrowDown':
    case 'Down':
      bottomDownPressed = true;
      break;
    case 'ArrowUp':
    case 'Up':
      bottomUpPressed = true;
      break;
    case 'ArrowLeft':
    case 'Left':
      bottomLeftPressed = true;
      break;
    case 'ArrowRight':
    case 'Right':
      bottomRightPressed = true;
      break;
    default:
      break;
  }
}
function keyUpHandler(e) {
  switch (e.key) {
    case 'ArrowDown':
    case 'Down':
      bottomDownPressed = false;
      break;
    case 'ArrowUp':
    case 'Up':
      bottomUpPressed = false;
      break;
    case 'ArrowLeft':
    case 'Left':
      bottomLeftPressed = false;
      break;
    case 'ArrowRight':
    case 'Right':
      bottomRightPressed = false;
      break;
    default:
      break;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = Male3Walk;

img.addEventListener('load', () => {
  setInterval(() => {
    switch (true) {
      case bottomDownPressed:
        if (pY <= 545) {
          pY += 10;
        }
        cycle = (cycle + 1) % shots;
        pDir = 0;
        break;
      case bottomUpPressed:
        if (pY >= 5) {
          pY -= 10;
        }
        cycle = (cycle + 1) % shots;
        pDir = 144;
        break;
      case bottomLeftPressed:
        if (pX >= 5) {
          pX -= 10;
        }
        cycle = (cycle + 1) % shots;
        pDir = 48;
        break;
      case bottomRightPressed:
        if (pX <= 552) {
          pX += 10;
        }
        cycle = (cycle + 1) % shots;
        pDir = 96;
        break;
      default:
        break;
    }

    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 600, 600);
    ctx.lineWidth = 10;
    ctx.beginPath();
    const Base = { x: 300, y: 90 };
    ctx.moveTo(Base.x, Base.y);
    const radius = 240;
    ctx.beginPath();
    ctx.strokeStyle = '#D60606';
    ctx.moveTo(Base.x, Base.y);
    for (let i = 1; i <= 5; i += 1) {
      const th = (i * 4 * Math.PI) / 5;
      const x = Base.x + radius * Math.sin(th);
      const y = Base.y + radius - radius * Math.cos(th);
      ctx.lineTo(x, y);
    }
    ctx.lineJoin = 'miter';
    ctx.closePath();
    ctx.stroke();

    ctx.drawImage(img, cycle * spriteW, pDir, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});

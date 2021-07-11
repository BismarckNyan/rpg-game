import ClientGame from './client/ClientGame';
import './index.scss';
// import Male3Walk from './assets/Male-3-Walk.png';
// import terrainAtlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from './configs/sprites';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

/* const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;

const terrain = document.createElement('img');
terrain.src=terrainAtlas;

terrain.addEventListener ('load',()=>{
  const {map}= worldCfg;
map.forEach((cfgRow,y)=>{
cfgRow.forEach((cfgCell,x)=>{
const [sX,sY,sW,sH]=sprites.terrain[cfgCell[0]].frames[0];
ctx.drawImage(terrain,sX,sY,sW,sH,x*spriteW,y*spriteH,spriteW,spriteH);
})
})
});

const shots = 3;

let cycle = 0;
let bottomPressed= false;
let topPressed = false;
let leftPressed = false;
let rightPressed = false;
let pY = 300;
let pX = 275;
let pDir = 0;
function keyDownHandler(e) {
  switch (e.key) {
    case 'ArrowDown':
    case 'Down':
      bottomPressed = true;
      break;
    case 'ArrowUp':
    case 'Up':
      topPressed = true;
      break;
    case 'ArrowLeft':
    case 'Left':
      leftPressed = true;
      break;
    case 'ArrowRight':
    case 'Right':
      rightPressed = true;
      break;
    default:
      break;
  }
}
function keyUpHandler(e) {
  switch (e.key) {
    case 'ArrowDown':
    case 'Down':
      bottomPressed= false;
      break;
    case 'ArrowUp':
    case 'Up':
      topPressed = false;
      break;
    case 'ArrowLeft':
    case 'Left':
      leftPressed = false;
      break;
    case 'ArrowRight':
    case 'Right':
      rightPressed = false;
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
      case bottomPressed:
        if (pY <= 545) {
          pY += 10;
        }
        cycle = (cycle + 1) % shots;
        pDir = 0;
        break;
      case topPressed:
        if (pY >= 5) {
          pY -= 10;
        }
        cycle = (cycle + 1) % shots;
        pDir = 144;
        break;
      case leftPressed:
        if (pX >= 5) {
          pX -= 10;
        }
        cycle = (cycle + 1) % shots;
        pDir = 48;
        break;
      case rightPressed:
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
*/

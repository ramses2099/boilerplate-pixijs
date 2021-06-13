/** @type{PIXI} */
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

PIXI.utils.sayHello(type);

const container = document.getElementById("container");

const CANVAS_WIDTH = container.clientWidth;
const CANVAS_HEIGHT = container.clientHeight;

//alias pixijs
let Application = PIXI.Application,
  loader = PIXI.Loader.shared,
  resoureces = PIXI.Loader.shared.resoureces,
  Text = PIXI.Text,
  TextStyle = PIXI.TextStyle,
  renderer = PIXI.autoDetectRenderer(CANVAS_WIDTH, CANVAS_HEIGHT);

//application pixijs
const app = new Application({
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  antialias: true,
  transparent: false,
  resolution: 1,
});

//add canvas to div
container.appendChild(app.view);

function isCollition(rect1, rect2){
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
         return true;
     }
     return false;
}




let player;
let p_width = 32;
let p_height = 32;
let p_x = CANVAS_WIDTH / 2 - p_width / 2;
let p_y = CANVAS_HEIGHT - p_height - 20;

let count_npc = 10;
let npcArray = [];

let timeSpawn = 100;
let time = 0;

//setup variables
function setup() {
  player = new Player(p_x, p_y, p_width, p_height, app.stage);

  //game loop
  app.ticker.add((delta) => gameLoop(delta));
}

//game loop
function gameLoop(delta) {
  player.update(delta);
  time++;

  if((time % timeSpawn)==0){
    let x = Math.floor(Math.random() * CANVAS_WIDTH - 32);
    let y = Math.floor(Math.random() * -32);
    npcArray.push(new Npc(x, y, app.stage));
  }

  for (let i = 0; i < npcArray.length; i++) {
    const npc = npcArray[i];

    if(isCollition(player.getBounds(), npc.getBounds())){
        console.log('hit');
    }


    npc.update(delta);
  }
}

setup();

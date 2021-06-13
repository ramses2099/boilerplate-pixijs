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

let player;
let p_width = 32;
let p_height = 32;
let p_x = CANVAS_WIDTH / 2 - p_width / 2;
let p_y = CANVAS_HEIGHT - p_height;

//setup variables
function setup() {
  //   player = new Graphics();
  //   player.lineStyle(4, 0xff3300, 1);
  //   player.beginFill(0x66ccff);
  //   player.drawRect(0, 0, p_width, p_height);
  //   player.endFill();
  //   player.x = p_x;
  //   player.y = p_y;
  //   player.vx = 0;
  //   player.vy = 0;

  player = new Player(p_x, p_y, p_width, p_height, app.stage);

  //app.stage.addChild(player);

  //game loop
  app.ticker.add((delta) => gameLoop(delta));
}

//game loop
function gameLoop(delta) {
    player.update(delta);
}

setup();

//alias pixijs
let Graphics = PIXI.Graphics;

//
// Player Object
//
class Player {
  constructor(x, y, width, height, stage) {
    this.graphics = new Graphics();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.graphics.x = x;
    this.graphics.y = y;
    this.graphics.vx = 0;
    this.graphics.vy = 0;
    stage.addChild(this.graphics);
  }

  getBounds() {
    return this.graphics.getBounds();
  }
  
  update(delta) {
    //update

    //draw
    this.draw();
  }

  draw() {
    this.graphics.lineStyle(4, 0xff3300, 1);
    this.graphics.beginFill(0x66ccff);
    this.graphics.drawRect(0, 0, this.width, this.height);
    this.graphics.endFill();
  }
}

//
// NPC Object
//
class Npc {
  constructor(x, y, stage) {
    this.graphics = new Graphics();

    this.width = 32;
    this.height = 32;
    this.graphics.x = x;
    this.graphics.y = y;
    this.graphics.vx = 0;
    this.graphics.vy = 1;
    this.graphics.interactive = true;
    this.graphics.alpha = 1;
    stage.addChild(this.graphics);
  }

  getBounds() {
    return this.graphics.getBounds();
  }

  update(delta) {
    //update

    this.graphics.y += this.graphics.vy;

    //draw
    this.draw();
  }

  draw() {
    this.graphics.lineStyle(4, 0xff3300, 1);
    this.graphics.beginFill(0x66ccff);
    this.graphics.drawRect(0, 0, this.width, this.height);
    this.graphics.endFill();
  }
}

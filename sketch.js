var track, trackImage;
var jaxon, j_running;
var iWall1, iWall2;
var bomb, bImage, coin, cImage;
var edges;


function preload(){
  //pre-load images
  j_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png");

  trackImage = loadImage("path.png");

  bImage = loadImage("bomb.png");

  cImage = loadImage("coin.png");
}


function setup(){
  createCanvas(400,400);
  
  //create sprites here
  track = createSprite(200, 200, 400, 400);
  track.addImage("infiniteMovement", trackImage);
  track.velocityY = 4;
  track.scale = 1;

  jaxon = createSprite(200, 300, 30, 60);
  jaxon.addAnimation("running", j_running);
  jaxon.scale = 1;
  jaxon.x = 200;

  bomb = createSprite(110, 200, 50, 50);
  bomb.addImage("bombObstacle", bImage);
  bomb.scale = 0.1;

  coin = createSprite(300, 100, 50, 50);
  coin.addImage("coinObstacle", cImage);
  coin.scale = 0.5;

  iWall1 = createSprite(20, 200, 5, 400);
  iWall1.visible = false;

  iWall2 = createSprite(380, 200, 5, 400);
  iWall2.visible = false;

  edges = createEdgeSprites();
}


function draw() {
  background("lightgrey");

  //jaxon moves left and right along with your mouse
  jaxon.x = World.mouseX;

  //code to reset background
  if(track.y > 400) {
    track.y = height/2;
  }

  jaxon.collide(iWall1);
  jaxon.collide(iWall2);
  
  drawSprites();
}

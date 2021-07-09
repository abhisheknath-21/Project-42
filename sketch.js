var iss_image;
var spacebg_image;
var spaceCraft1, spaceCraft1_image;
var spaceCraft2, spaceCraft2_image;
var spaceCraft3, spaceCraft3_image;
var spaceCraft4, spaceCraft4_image;

var iss;
var spacecraft;
var hasDocked = false;

function preload(){
  iss_image = loadImage("Docking-undocking/iss.png");
  spacebg_image = loadImage("Docking-undocking/spacebg.jpg");
  spaceCraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceCraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceCraft3 = loadImage("Docking-undocking/spacecraft3.png");
  spaceCraft4 = loadImage("Docking-undocking/spacecraft4.png");
}


function setup() {
  createCanvas(1200,650);
  iss =createSprite(630, 200, 50, 50);
  iss.addImage(iss_image);

  spacecraft = createSprite(600, 500, 50, 50);
  //iss.addAnimation("spacecraft", spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4);
   spacecraft.addImage(spaceCraft1);
   spacecraft.scale = 0.5;
}

function draw() {
  background(spacebg_image);
  
 if(hasDocked){
   textSize(20);
    text("Docking Succesfull !! ",  600, 600);
 }

 if(keyIsDown(LEFT_ARROW)){
   spacecraft.addImage(spaceCraft3);
   spacecraft.x = 570;
   spacecraft.y = 500;
 }

if(keyIsDown(RIGHT_ARROW)){
  spacecraft.addImage(spaceCraft4);
  spacecraft.x = 630 
  spacecraft.y = 500;
}
if(keyIsDown(DOWN_ARROW)){
  spacecraft.addImage(spaceCraft2);
}

if(keyIsDown(UP_ARROW)){
  spacecraft.addImage(spaceCraft2);
  spacecraft.y = 400
  spacecraft.x = 600
  hasDocked = true;
}


  drawSprites();
}
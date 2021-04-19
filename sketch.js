//Create variables here
var safari,cars;
var safariImage,car1Image;
var car2Image,car3Image;
var car4Image;
var track,trackImage;
var allcars;
var distance=0;
var distanceX=0;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload()
{
	//load images here
  car1Image=loadImage("images/car10.png");
  car2Image=loadImage("images/car20.png");
  car3Image=loadImage("images/car30.png");
  car4Image=loadImage("images/car40.png");
  safariImage=loadImage("images/car50.png");
  trackImage=loadImage("images/track.jpg");
}
function setup() {
	createCanvas(1000, 800);

  safari=createSprite(480,650,10,10);
  safari.addImage(safariImage);
  safari.scale=1;


  allcars=[safari,cars]
  carsGroup=createGroup();
  
}
function draw() {  
  background(0);
  
  if(gameState===PLAY){
    
    if(keyDown(RIGHT_ARROW)){
      distanceX=distanceX-=10
    }
    if(keyIsDown(LEFT_ARROW)){
      distanceX=distanceX+=10;
    }
    if(safari.isTouching(carsGroup)){
      carsGroup.destroyEach();
      gameState=END;
      

  }  
  if(distance>3860){
    gameState=END;
  }
  spawncars();
  Background();
  }
  drawSprites();
  if(gameState===END){
    stroke(10);
    fill("white");
    textSize(30);
    text("GAME OVER!",safari.x,safari.y);
    stroke(10);
    fill("white");
    textSize(30);
    text("Press 'R' to restart",safari.x-10,safari.y+40);
    stroke(10);
    fill("red");
    textSize(30);
    text("Score:"+distance/2,safari.x,safari.y+80)
    
    carsGroup.destroyEach();
    if(keyDown("R")){
      reset();
    }
    if(distance>=3860){
      stroke(10);
      fill("yellow");
      textSize(30);
      text("You did it!!",safari.x,safari.y+120)
    }
  }
}
function spawncars(){
  if(frameCount%10===0){
    cars = createSprite(Math.round(random(300, 800)),Math.round(random(0, 1000)), 10, 10);
    cars.velocityY=-5;
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1:cars.addImage(car1Image);
           break;
        case 2:cars.addImage(car2Image);
               break;
      case 3:cars.addImage(car3Image);
             break;
             case 4:cars.addImage(car4Image);
             break;
        default: break;
  }
  cars.scale=1;
    carsGroup.add(cars);
}
}
function Background(){
  background("#c68767")
  image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
  var index = 0;
  var x = 175;
  var y;
    index = index + 1 ;
    x = x - distanceX;
    y = displayHeight - distance;
    allcars[index-1].x = x;
    allcars[index-1].y = y;
      allcars[index - 1].shapeColor = "red";
      camera.position.x = displayWidth/2;
      camera.position.y = allcars[index-1].y

      if(keyIsDown(UP_ARROW)){
        distance=distance+=10
        
      }
}
function reset(){
  gameState=PLAY;
  distance=0;
}





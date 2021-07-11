var space , space_image;
var as , sleep;
var gym ;
var brush;
var eat;
var drink;
var move;

function preload() {

space_image = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
gym = loadAnimation("gym1.png","gym2.png");  
brush = loadAnimation("brush.png"); 
eat = loadAnimation("eat1.png","eat2.png"); 
drink = loadAnimation("drink1.png","drink2.png"); 
move = loadAnimation("move.png"); 

}

function setup() {
  createCanvas(800,400);
  space = createSprite(400, 200, 50, 50);
  space.addImage("sp" , space_image);
  space.scale = 0.17;

  as = createSprite (300,230)
  as.addAnimation("sleep" , sleep);
  as.scale = 0.1

}

function draw() {
  background(255,255,255);  

if(keyDown("UP_ARROW")){

as.addAnimation("brushiing" , brush);
as.changeAnimation("brushiing")
as.y = 200;
as.velocityX = 0;
as.velocityY = 0;

}

if(keyDown("DOWN_ARROW")){

  as.addAnimation("gymming" , gym);
  as.changeAnimation("gymming")
  as.y = 200;
  as.velocityX = 0;
  as.velocityY = 0;
  
  }

  if(keyDown("LEFT_ARROW")){

    as.addAnimation("eating" , eat);
    as.changeAnimation("eating")
    as.y = 200;
    as.velocityX = 0;
    as.velocityY = 0;
    
    }

    if(keyDown("RIGHT_ARROW")){

      as.addAnimation("drinking" , drink);
      as.changeAnimation("drinking")
      as.y = 200;
      as.velocityX = 0;
      as.velocityY = 0;
      
      }

      if(keyDown("m")){

        as.addAnimation("moving" , move);
        as.changeAnimation("moving")
        as.y = 200;
        as.velocityX = 0.2;
        as.velocityY = 0.3;
        
        }


  drawSprites();
}
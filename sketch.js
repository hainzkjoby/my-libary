var fixedRect,movingRect;
var object1, object2, object3,object4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(600,300,80,50);
  movingRect.shapeColor="green";

  object1=createSprite(100,300,50,20);
  object1.shapeColor="white";
  object1.velocityY=-2;
  
  object2=createSprite(100,100,50,20);
  object2.shapeColor="yellow";
  object2.velocityY=2;

  object3=createSprite(400,100,50,20);
  object3.shapeColor="blue";
  object3.velocityX=-2;

  object4=createSprite(100,100,50,20);
  object4.shapeColor="pink";
  object4.velocityX=2;

}

function draw() {
  background(0); 

  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  console.log(movingRect.x-fixedRect.x);

  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else 
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  /*if(movingRect.x-fixedRect.x<movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2 + fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2 + fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }*/

/*if(object1.x-object2.x<object1.width/2 + object2.width/2
  && object2.x-object1.x<object1.width/2 + object2.width/2)
  {
  object1.velocityX=object1.velocityX*(-1);
  object2.velocityX=object2.velocityX*(-1);
  }

  if(object1.y-object2.y<object1.width/2 + object2.width/2
    && object2.y-object1.y<object1.width/2 + object2.width/2)
    {
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
    }*/

    bounceOff(object1,object2);
    bounceOff(object3,object4);
  drawSprites();
}


function isTouching(shape1,shape2)
{
  if(shape1.x-shape2.x<shape1.width/2 + shape2.width/2
    && shape2.x-shape1.x<shape1.width/2 + shape2.width/2
    && shape1.y-shape2.y<shape1.height/2 + shape2.height/2
    && shape2.y-shape1.y<shape1.height/2 + shape2.height/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function bounceOff(shape1,shape2)
{
  if(shape1.x-shape2.x<shape1.width/2 + shape2.width/2
    && shape2.x-shape1.x<shape1.width/2 + shape2.width/2)
    {
      shape1.velocityX=shape1.velocityX*(-1);
      shape2.velocityX=shape2.velocityX*(-1);
    }
  
    if(shape1.y-shape2.y<shape1.width/2 + shape2.width/2
      && shape2.y-shape1.y<shape1.width/2 + shape2.width/2)
      {
        shape1.velocityY=shape1.velocityY*(-1);
        shape2.velocityY=shape2.velocityY*(-1);
      }
}
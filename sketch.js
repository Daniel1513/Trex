
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,25,25); 
}

function draw() 
{
  background('blue');

  if (keyIsDown(RIGHT_ARROW))
  {
box.position.x = box.position.x +5;
  }
  drawSprites();

}





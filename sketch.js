var sprite
function setup() {
   createCanvas(800,800);
   sprite = createSprite(400,400,100,100);
   sprite.shapeColor = "blue"
}

function draw() 
{
  background(30);
  drawSprites();
}





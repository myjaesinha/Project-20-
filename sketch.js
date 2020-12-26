function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixed=createSprite(200, 200, 50, 50); 
  fixed.shapeColor="green"; 
  fixed.debug=true; 
  moving=createSprite(200, 300, 50, 50);
   moving.shapeColor="green";
    moving.debug=true;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  moving.x=mouseX; 
  moving.y=mouseY; 
  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.y-fixed.y<moving.width/2+fixed.width/2 && fixed.y-moving.y<moving.width/2+fixed.width/2){ 
    fixed.shapeColor="red"; moving.shapeColor="red";
   } 
   else{ 
     fixed.shapeColor="green"; moving.shapeColor="green"; 
    }

}
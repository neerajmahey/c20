var moving,fixed

function setup() {
  createCanvas(800,400);
moving=createSprite(200,20,50,70);
fixed=createSprite(400,200,70,50);
moving.shapeColor="pink";
fixed.shapeColor="red";

}

function draw() {
  background(0)  ;
  moving.x=mouseX;
  moving.y=mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2
    &&fixed.x-moving.x<moving.width/2+fixed.width/2
    &&moving.y-fixed.y<moving.height/2+fixed.height/2
    &&fixed.y-moving.y<moving.height/2+fixed.height/2){
      moving.shapeColor="green";
      fixed.shapeColor="orange"; 
    }
    else{
      moving.shapeColor="pink";
fixed.shapeColor="red";
    }
  drawSprites();
}
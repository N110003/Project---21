var wall, thickness;
var bullet, speed, weight;
var deformation;

function setup() {
  createCanvas(1500,400);
  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(20,80);

  bullet.velocityX = speed;
  
}

function draw() {
  background("black");  
  
  if(wall.x - bullet.x < bullet.width + wall.width/2){

    bullet.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22509;
    if(deformation>10){
      wall.shapeColor = "red";
    }
    if (deformation<10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}
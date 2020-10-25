var player,playerImage;
var background,backgroundImage;
var back,backImage;
var obstacle,obstacleImage;
var over,overImage;
var point,pointImage;
var score = 0;
var play = 1;
var end = 0;
var gamestate = 1;

function preload(){
 playerImage = loadImage("kid.png")
 backImage = loadImage("back.png")
 obstacleImage = loadImage("rock.png")
 pointImage = loadImage("star.png")
}

function setup() {
  createCanvas(600,600);
  
  back = createSprite(300,300,30,30)
  back.addImage(backImage)
  back.scale = 1.5;
    
  player = createSprite(300,500,20,20)
  player.addImage(playerImage)
  player.scale = 0.4;
  
  obstaclesGroup = new Group();
  pointGroup = new Group();
  
}
  
function draw() {
  background(225)
  
  if(gamestate===play){
     if(keyDown("left")){
        player.x = player.x-4;
     }
        
     if(keyDown("right")){
      player.x = player.x+4;
      }
     
     if(player.isTouching(pointGroup)){
        pointGroup.destroyEach();
        score = score+3;
        }
     if(player.isTouching(obstaclesGroup)){
        obstaclesGroup.destroyEach();
        score = score-1;
         
       points();
       Obstacles();
        }     
     
     
     
     
     } 
       else if (gamestate===end){
         player.addImage()
                
                
                
     }
  
  
 drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50)
}

  function Obstacle() {
  if(frameCount % 100 === 0) {
    obstacle = createSprite(200,-10,20,20)
    obstacle.x = random(0,600)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.35;
    obstacle.velocityY = 6;
    obstacle.lifetime = 133;
  }
    obstaclesGroup.add(Obstacle);
}
function points() {
  if (frameCount % 60 === 0) {
    point = createSprite(200,200,20,20)
    point.addImage(pointImage)
    point.scale = 0.06 
    point.x = random(0,600);    
    point.velocityY = 5;
    point.lifetime = 120;
  }
  pointGroup.add(points)
}


  
                                                            
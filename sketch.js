const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImage, bgImage2, bglvl1;
var form;
var player, playerImg, player1, v1i, villain1, themeSong,connector;
var playerCount = 0;
var gameState = 0;
var wall1, wall2, wall3, wall4;


function preload() {

	playerBroom = loadImage("Sprites/Harrybroom.png")
	bglvl2 = loadImage("Sprites/bg lvl2.jpg")
	enemy1 = loadImage("Sprites/Malfoy.png")
	goldImg = loadImage("Sprites/goldenSnitch.png")
	qImg = loadImage("Sprites/Quaffle.png")
	bImg = loadImage("Sprites/Bludger.png")
	Boundary1=loadImage("Sprites/boundary1.png")
	Boundary2=loadImage("Sprites/boundary2.png")


	}

function setup() {
	createCanvas(1500, 750);

	engine = Engine.create();
	world = engine.world;

	player2 = createSprite(90, 650, 20, 20);
	player2.addImage(playerBroom);
	player2.scale = 0.2

	

	/* Enemy = createSprite(90, 350, 20, 20);
	Enemy.addImage(enemy1);
	Enemy.scale = 0.06 */
	/* var Enemy_options={
		isStatic:true
	}
	Enemy=Bodies.rectangle(90,350,50,50,Enemy_options)
	World.add(world,Enemy */


	GoldenSnitch = createSprite(290, 350, 20, 20);
	GoldenSnitch.addImage(goldImg);
	GoldenSnitch.scale = 0.12


	box1 = createSprite(1200,650,20,120)
	box1.shapeColor="red"
	box2 = createSprite(1300,700,220,20)
	box2.shapeColor="red"
	box3 = createSprite(1400,650,20,120)
	box3.shapeColor="red"


	/* Quaffle1 = createSprite(1300, 580, 20, 20);
	Quaffle1.addImage(qImg);
	Quaffle1.scale = 0.5 */
	/* var Quaffle1_options={
		isStatic:true
	}

	Quaffle1=Bodies.rectangle(1300,580,70,70,Quaffle1_options)
	World.add(world,Quaffle1) */


	Quaffle2 = createSprite(1260, 650, 20, 20);
	Quaffle2.addImage(qImg);
	Quaffle2.scale = 0.5

	Quaffle3 = createSprite(1350, 650, 20, 20);
	Quaffle3.addImage(qImg);
	Quaffle3.scale = 0.5


	Bludger1 = createSprite(590, 450, 20, 20);
	Bludger1.addImage(bImg);
	Bludger1.scale = 0.5
	

	Bludger2 = createSprite(690, 350, 20, 20);
	Bludger2.addImage(bImg);
	Bludger2.scale = 0.5

	wall1 = createSprite(770, 10, displayWidth, 20)
	wall1.addImage(Boundary1)
	

	wall2 = createSprite(10, 420, 20,750)
	wall2.addImage(Boundary2)
	

	wall3 = createSprite(1490, 380, 20, displayHeight - 120)
	wall3.addImage(Boundary2)
	

	wall4 = createSprite(770, 740, displayWidth, 20)
	wall4.addImage(Boundary1)

	Bludger1.setSpeed(15,random(20,360))
	Bludger2.setSpeed(30,random(0,360))
	GoldenSnitch.setSpeed(20,random(120,360))

Enemy=new Malfoy(100,200)
quaffle1=new Quaffle(200,100,20)

	connector=new Connection(Enemy.body,quaffle1.body);

	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
	if (keyDown("UP_ARROW")) {
        player2.y=player2.y-3;
    }
      if (keyDown("DOWN_ARROW")) {
        player2.y=player2.y+3;
    }
      if (keyDown("LEFT_ARROW")) {
      player2.x=player2.x-3;
    }
      if (keyDown("RIGHT_ARROW")) {
        player2.x=player2.x+3;
    }
	//Matter.Body.setPosition(Quaffle1,{x:mouseX,y:mouseY})
Bludger1.bounceOff(wall1)
Bludger1.bounceOff(wall2)
Bludger1.bounceOff(wall3)
Bludger1.bounceOff(wall4)

Bludger2.bounceOff(wall1)
Bludger2.bounceOff(wall2)
Bludger2.bounceOff(wall3)
Bludger2.bounceOff(wall4)

GoldenSnitch.bounceOff(wall1)
GoldenSnitch.bounceOff(wall2)
GoldenSnitch.bounceOff(wall3)
GoldenSnitch.bounceOff(wall4)


	//background("black");
	
	createEdgeSprites();
 	Enemy.display()
	 quaffle1.display();
	connector.display();	
	
	background(bglvl2)
	drawSprites();
	image(enemy1,Enemy.position.x,Enemy.position.y,50,50)
	image(qImg,Quaffle1.position.x,Quaffle1.position.y,70,70)

}



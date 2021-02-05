var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var box1, box2,box3;
var paperBall;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

/*	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6*/
	engine = Engine.create();
	world = engine.world;
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	edges = createEdgeSprites();
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

//	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.3, isStatic:true});
//	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = new DustBin(1100,height-50,200,20);
	 box2 = new DustBin(990,620,20,100);
	 box3 = new DustBin(1210,620,20,100);
	
	 paperBall = new Paper(200,200);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // packageSprite.x= packageBody.position.x ;
 // packageSprite.y= packageBody.position.y;
  box1.display();
  box2.display();
  box3.display();

  paperBall.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	console.log("key down");
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:10,y:-15});
  }
}




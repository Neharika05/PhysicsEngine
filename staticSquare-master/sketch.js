const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options = {restitution:0.5};
    var ball2_options = {restitution:0.7};
    var ball3_options = {restitution:1};

    ground = Bodies.rectangle(200,300,200,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200, 100, 30,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(200,100,20,ball2_options);
    World.add(world,ball2);

    ball3 = Bodies.circle(200,100,10,ball3_options);
    World.add(world,ball3);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,30,30);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(ball3.position.x, ball3.position.y,10,10);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}
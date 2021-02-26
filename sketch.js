const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girl;
function preload(){
    
}

function setup(){
   createCanvas(3000, 800);
   girl = new Girl(200,300,20,20);
    
}

function draw(){
   background(225);
   girl.display();

}   


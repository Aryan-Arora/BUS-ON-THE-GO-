var form;
var database;
var passengerCount=0;
var gameState=0;
var bus;
var database;

var track;
function preload(){
busImage=loadImage("busImage.png")
busStopImage=loadImage("busStop.jpg")
trackImage=loadImage("track.png")
car1=loadImage("car1.png")
car2=loadImage("car2.png")
car3=loadImage("car3.png")
car4=loadImage("car4.png")
}

function setup(){
createCanvas(displayWidth-50,displayHeight-50)
form=new Form();
database=firebase.database();
}



function draw(){
background(255)
if(gameState===0){
form.display();
}
if(passengerCount>3){
  gameState=1;
  form.hide();

}
if(gameState!==0){
  startGame();
}
drawSprites();
}


function startGame(){
  background(trackImage)
 
bus=createSprite(displayWidth/2+50,displayHeight/2,10,10)
bus.addImage(busImage)
bus.scale=0.8


  

if(frameCount%300===0){
  busStop=createSprite(displayWidth/2+560,displayHeight-1200,20,20)
  busStop.velocityY=7
  busStop.addImage(busStopImage)
  
}
if(frameCount%100===0){
  car=createSprite(displayWidth/2-100,displayHeight,10,10)
  car.velocityY=-13
  num=Math.round(random(1,4))
switch(num){
case 1: car.addImage(car1)
break;
case 2: car.addImage(car2)
break;
case 3: car.addImage(car3)
break;
case 4:car.addImage(car4)
break;
default:break;
  

}
}

}

 function getCount(){
  var passengerCountRef = database.ref('passengerCount');
  passengerCountRef.on("value",(data)=>{
    passengerCount = data.val();
  })
}

function updateCount(count){
  database.ref('/').update({
    passengerCount: count
  });
}





//Originally I began by picking a few random 3D objects, but I found that I could make them all work together and make a very trippy almost "alternate dimension" kind of feeling. I then added a song that came to mind immediately after coding the project. 

var rot = 0;
let song;


function preload(){
  //3D objects
  plant = loadModel("assets/Alien Plant.obj");
  mushroom = loadModel("assets/Mushrooms1.obj");
  hand = loadModel("assets/hand.obj");
  //textures
  skin1 = loadImage("assets/prettytexture.jpg");
  skin3 = loadImage("assets/slimetexture.jpg");
  skin4 = loadImage("assets/goop.jpg");
  song = loadSound('assets/stars.mp3');
  
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  slider = createSlider(0,1,0.3, 0.01);// TheCodingTrain 17.1: Loading and Playing - p5.js Sound Tutorial 
  song.play();


}

function draw() {
  background(0);
   orbitControl();
  
   song.setVolume(slider.value());//music
  
  //ambientLight(255);
  
  let dirX = (mouseX / width - 0.5 ) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);//lighting
  
  rotateX(rot);
  rot+=0.008;//rotation of the whole thing
  
  //Plant
  push();
  //rot+=0.0001;
  texture(skin4);
  translate(-100,900,30);
  scale(30);
  model(plant);
  pop();
  
  
  //Mushroom
  rotateY(millis() / 1000);//speed of mushrooms
   push();
  texture(skin3);
  translate(-10,9,30);
  scale(30);
  model(mushroom);
  pop();
  
  //Mushroom flipped
  rotateY(millis() / 1000);//speed of mushrooms
   push();
  texture(skin3);
  translate(-10,-3000,30);
  rotateX(PI);//flips it upside down
  //https://p5js.org/learn/getting-started-in-webgl-coords-and-transform.html
  scale(30);
  model(mushroom);
  pop();
  
  
  //hand
    rotateY(millis() / -600);//speed of hand opposite dir
     push();
  //rot+=0.0001;
  normalMaterial();//neony skin thing
  translate(-10,9,600);
  scale(30);
  model(hand);
  pop();
  
  //hand2
    rotateY(millis() / 600);//speed of hand opposite dir
     push();
  normalMaterial();//neony skin thing
  translate(-10,900,600);
  scale(30);
  model(hand);
  pop();
  
  //hand3
    rotateY(millis() / 800);//speed of hand opposite dir
     push();
  normalMaterial();//neony skin thing
  translate(-10,-2000,600);
  rotate(PI);
  scale(30);
  model(hand);
  pop();
  
}
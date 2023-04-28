function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);
  stroke(0,50);
  translate(width/2,height/2);
  
  branch(100);
  
}

function branch(len){
  let newAng = map(mouseY , 0 , height, 0, TWO_PI);
  line(0,0,0,-len);
  translate(0,-len);
  
  if(len>4){
  
  push();
  
  rotate(newAng);
  branch(len*0.67);
 
  rotate(-newAng);
  branch(len*0.67)

  rotate(newAng);
  branch(-len*0.67)

  rotate(-newAng);
  branch(-len*0.67)
  //line(0,0,0,-len*0.67);
  }

  pop();
}
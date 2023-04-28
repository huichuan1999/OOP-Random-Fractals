let redSlider, greenSlider, blueSlider, weightSlider, depthSlider;
let saveSVGButton, saveImageButton, toggleWeightButton;
let currentWeight = 1;
let decreasingWeight = false;
let angleSlider;
let angleDisplay;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, SVG);
  //canvas.parent("sketch-container");

  redSlider = select("#redSlider");
  greenSlider = select("#greenSlider");
  blueSlider = select("#blueSlider");
  weightSlider = select("#weightSlider");
  depthSlider = select("#depthSlider");

  saveSVGButton = select("#saveSVG");
  saveImageButton = select("#saveImage");
  toggleWeightButton = select("#toggleWeight");

  saveSVGButton.mousePressed(exportSVG);
  saveImageButton.mousePressed(() => save("myImage.png"));

  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
  angleSlider.position(10, height - 40);

  angleDisplay = createSpan();
  angleDisplay.position(angleSlider.x + angleSlider.width + 10, height - 40);

}
function draw() {
  clear();
  let r = redSlider.value();
  let g = greenSlider.value();
  let b = blueSlider.value();
  let strokeWidth = weightSlider.value();
  let depth = depthSlider.value();
  
  stroke(r, g, b, 50);
  translate(width / 2, height / 2);
  
  let newAng = angleSlider.value();
  angleDisplay.html('Current angle: ' + newAng.toFixed(2));
  
  push();
  let weight = decreasingWeight ? strokeWidth * (depth / 10) : strokeWidth;
  let treeBranch = new Branch(100, depth, newAng, weight);
  treeBranch.draw();
  pop();
  }
  
  function mousePressed() {
  //exportSVG();
  }
  
  function exportSVG() {
  save("mySVG.svg"); // give file name
  print("saved svg");
  //noLoop(); // we just want to export once
  }

// let angleSlider;
// let angleDisplay;

// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight, SVG);

//   angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
//   angleSlider.position(10, height - 40);

//   angleDisplay = createSpan();
//   angleDisplay.position(angleSlider.x + angleSlider.width + 10, height - 40);
// }

// function draw() {
//   clear();
//   stroke(0, 50);
//   translate(width / 2, height / 2);

//   let newAng = angleSlider.value();
//   angleDisplay.html('Current angle: ' + newAng.toFixed(2));

//   push();
//   let treeBranch = new Branch(100, 6, newAng);
//   treeBranch.draw();
//   pop();
// }

// function mousePressed() {
//   //exportSVG();
// }

// function exportSVG() {
//   save("mySVG.svg"); // give file name
//   print("saved svg");
//   //noLoop(); // we just want to export once
// }

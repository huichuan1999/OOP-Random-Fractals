let redSlider, greenSlider, blueSlider, weightSlider, depthSlider;
let saveSVGButton, saveImageButton, toggleWeightButton, clearModeButron;
let currentWeight = 1;
let decreasingWeight = false;
let angleSlider;
let angleDisplay;
let clearEnabled = true;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, SVG);
  //canvas.id("canvas");
  //canvas.parent("sketch-container"); //SVG canvas cannot add into parent, It is weird

  redSlider = createSlider(0, 255, 0);
  let redLabel = createP("Red");
  redLabel.parent("slider-row-1");
  redSlider.parent("slider-row-1");

  greenSlider = createSlider(0, 255, 0);
  let greenLabel = createP("Green");
  greenLabel.parent("slider-row-1");
  greenSlider.parent("slider-row-1");

  blueSlider = createSlider(0, 255, 0);
  let blueLabel = createP("Blue");
  blueLabel.parent("slider-row-1");
  blueSlider.parent("slider-row-1");

  weightSlider = createSlider(1, 10, 1);
  let weightLabel = createP("Stroke Weight");
  weightLabel.parent("slider-row-2");
  weightSlider.parent("slider-row-2");

  depthSlider = createSlider(1, 10, 6);
  let depthLabel = createP("Depth");
  depthLabel.parent("slider-row-2");
  depthSlider.parent("slider-row-2");

  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);
  let angleLabel = createP("Angle");
  angleLabel.parent("slider-row-2");
  angleSlider.parent("slider-row-2");

  saveSVGButton = createButton("Save SVG");
  saveImageButton = createButton("Save Image");
  //toggleWeightButton = createButton("Toggle Stroke Weight");
  clearModeButron = createButton("Clear Mode");

  saveSVGButton.parent("button-container");
  saveImageButton.parent("button-container");
  //toggleWeightButton.parent("button-container");
  clearModeButron.parent("button-container");

  angleDisplay = createSpan();
  angleDisplay = select("#angleDisplay");

  saveSVGButton.mousePressed(exportSVG);
  saveImageButton.mousePressed(() => save("myImage.png"));
  //toggleWeightButton.mousePressed(() => decreasingWeight = !decreasingWeight);
  clearModeButron.mousePressed(() => clearEnabled = !clearEnabled);

  redSlider.addClass("custom-slider");
  greenSlider.addClass("custom-slider");
  blueSlider.addClass("custom-slider");
  weightSlider.addClass("custom-slider");
  depthSlider.addClass("custom-slider");
  angleSlider.addClass("custom-slider");


}
function draw() {
  if (clearEnabled) {
    clear();
  }
  //clear();
  let r = redSlider.value();
  let g = greenSlider.value();
  let b = blueSlider.value();
  let strokeWidth = weightSlider.value();
  let depth = depthSlider.value();

  stroke(r, g, b, 50);
  translate(width / 2, height / 2);

  let newAng = angleSlider.value();
  let angleInDegrees = degrees(newAng);
  angleDisplay.html('Current angle: ' + angleInDegrees.toFixed(2));

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

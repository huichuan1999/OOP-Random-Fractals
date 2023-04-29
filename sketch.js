let redSlider, greenSlider, blueSlider, alphaSlider,
weightSlider, depthSlider, lengthSlider,angleSlider;
let saveSVGButton, saveImageButton, toggleWeightButton, clearModeButron;
let currentWeight = 1;
let decreasingWeight = false;
let angleDisplay;
let clearEnabled = true;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, SVG);
  //canvas.id("canvas");
  //canvas.parent("sketch-container"); //SVG canvas cannot add into parent, It is weird

  redSlider = createSlider(0, 255, random(255));
  let redLabel = createP("Red");
  redLabel.parent("slider-row-1");
  redSlider.parent("slider-row-1");

  greenSlider = createSlider(0, 255, random(255));
  let greenLabel = createP("Green");
  greenLabel.parent("slider-row-1");
  greenSlider.parent("slider-row-1");

  blueSlider = createSlider(0, 255, random(255));
  let blueLabel = createP("Blue");
  blueLabel.parent("slider-row-1");
  blueSlider.parent("slider-row-1");

  alphaSlider = createSlider(0, 255, 150);
  let alphaLabel = createP("Alpha");
  alphaLabel.parent("slider-row-1");
  alphaSlider.parent("slider-row-1");

  weightSlider = createSlider(1, 10, random(1,5));
  let weightLabel = createP("Stroke");
  weightLabel.parent("slider-row-2");
  weightSlider.parent("slider-row-2");

  depthSlider = createSlider(1, 10, 7);
  let depthLabel = createP("Depth");
  depthLabel.parent("slider-row-2");
  depthSlider.parent("slider-row-2");

  angleSlider = createSlider(0, TWO_PI, random(TWO_PI), 0.01);
  let angleLabel = createP("Angle");
  angleLabel.parent("slider-row-2");
  angleSlider.parent("slider-row-2");

  lengthSlider = createSlider(0, 500, 100);
  let lengthLabel = createP("Length");
  lengthLabel.parent("slider-row-2");
  lengthSlider.parent("slider-row-2");

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
  //clearModeButron.mousePressed(() => clearEnabled = !clearEnabled);
  clearModeButron.mousePressed(() => {
    clearEnabled = !clearEnabled;
    updateAngleDisplay();
  });

  redSlider.addClass("custom-slider");
  greenSlider.addClass("custom-slider");
  blueSlider.addClass("custom-slider");
  alphaSlider.addClass("custom-slider");
  weightSlider.addClass("custom-slider");
  depthSlider.addClass("custom-slider");
  angleSlider.addClass("custom-slider");
  lengthSlider.addClass("custom-slider");

}
function draw() {
  if (clearEnabled) {
    clear();
  }
  //clear();
  let r = redSlider.value();
  let g = greenSlider.value();
  let b = blueSlider.value();
  let a = alphaSlider.value();
  let strokeWidth = weightSlider.value();
  let depth = depthSlider.value();

  let length = lengthSlider.value();

  stroke(r, g, b, a);
  translate(width / 2, height / 2+100);

  let newAng = angleSlider.value();
  updateAngleDisplay();
  // let angleInDegrees = degrees(newAng);
  // angleDisplay.html('Current Angle: ' + angleInDegrees.toFixed(2));

  push();
  let weight = decreasingWeight ? strokeWidth * (depth / 10) : strokeWidth;
  let treeBranch = new Branch(length, depth, newAng, weight);
  treeBranch.draw();
  pop();
}

function exportSVG() {
  save("mySVG.svg"); // give file name
  print("saved svg");
}

function updateAngleDisplay() {
  let clearStatus = clearEnabled ? "ON" : "OFF";
  //let newAng = angleSlider.value();
  let angleInDegrees = degrees(angleSlider.value());
  angleDisplay.html(`Current Angle: ${angleInDegrees.toFixed(2)} | Clear Mode: ${clearStatus}`);
}

let redSlider, greenSlider, blueSlider, alphaSlider,
  weightSlider, depthSlider, lengthSlider, angleSlider;
let saveSVGButton, saveImageButton, toggleWeightButton,
  clearModeButron, ellipseToggleButton;

let currentWeight = 1;
let decreasingWeight = false;
let angleDisplay;
let clearEnabled = false;

let drawEllipseAtEnd = true; 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, SVG);

  //canvas.id("canvas");
  //canvas.parent("sketch-container"); //SVG canvas cannot add into parent, It is weird

  redSlider = new ColorSlider("Red", random(255), "slider-row-1");
  greenSlider = new ColorSlider("Green", random(255), "slider-row-1");
  blueSlider = new ColorSlider("Blue", random(255), "slider-row-1");
  alphaSlider = new ColorSlider("Alpha", 150, "slider-row-1");

  weightSlider = new NumberSlider("Stroke", 1, 10, random(1, 5), undefined, "slider-row-2");
  depthSlider = new NumberSlider("Depth", 1, 10, 7, undefined, "slider-row-2");
  angleSlider = new NumberSlider("Angle", 0, TWO_PI, random(TWO_PI), 0.01, "slider-row-2");
  lengthSlider = new NumberSlider("Length", 0, 500, 100, undefined, "slider-row-2");

  saveSVGButton = new CustomButton("Save SVG", exportSVG, "button-container");
  saveImageButton = new CustomButton("Save Image", () => save("myImage.png"), "button-container");
  clearModeButron = new CustomButton("Clear Mode", () => { clearEnabled = !clearEnabled; updateAngleDisplay(); }, "button-container");
  ellipseToggleButton = new CustomButton("Draw Fruits",() => { drawEllipseAtEnd = !drawEllipseAtEnd;}, "button-container");

  angleDisplay = createSpan();
  angleDisplay = select("#angleDisplay");
}

function draw() {
  if (clearEnabled) {
    clear();
  }

  drawFog();
  //if(frameCount % 4 == 0)drawFog(); // only draw the fog evey 16 frames

  let r = redSlider.slider.value();
  let g = greenSlider.slider.value();
  let b = blueSlider.slider.value();
  let a = alphaSlider.slider.value();
  let strokeWidth = weightSlider.slider.value();
  let depth = depthSlider.slider.value();
  let length = lengthSlider.slider.value();

  let breathOffset = sin(frameCount * 0.1) * 12;

  stroke(r, g, b, a);
  translate(width / 2, height / 2 + 100);

  let newAng = angleSlider.slider.value();
  updateAngleDisplay();
  // let angleInDegrees = degrees(newAng);
  // angleDisplay.html('Current Angle: ' + angleInDegrees.toFixed(2));

  push();
  let weight = decreasingWeight ? strokeWidth * (depth / 10) : strokeWidth;
  let treeBranch = new Branch(length, depth, newAng, weight);
  //treeBranch.draw();
  treeBranch.drawBreath(breathOffset);
  pop();
}

function exportSVG() {
  save("mySVG.svg"); // give file name
  print("saved svg");
}

function updateAngleDisplay() {
  let clearStatus = clearEnabled ? "ON" : "OFF";
  //let newAng = angleSlider.value();
  let angleInDegrees = degrees(angleSlider.slider.value());
  angleDisplay.html(`Current Angle: ${angleInDegrees.toFixed(2)} | Clear Mode: ${clearStatus}`);
}

function drawFog(){
  push();
  fill(0, 16);
  noStroke();
  rect(0,0,width,height);
  pop();
}


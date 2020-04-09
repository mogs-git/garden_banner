function setup() {
  // Create the canvas
  createCanvas(1000, 600);
  background(200);

  let slider_widths = "200px";

  petal_slider = createSlider(0, 50, 10);
  petal_slider.position(10, 10);
  petal_slider.style('width', slider_widths);

  turns_slider = createSlider(0, 2, 0.2, 0.05);
  turns_slider.position(10, 30);
  turns_slider.style('width', slider_widths);

  petalX_slider = createSlider(0, 180, 0, 1);
  petalX_slider.position(10, 60);
  petalX_slider.style('width', slider_widths);

  petalY_slider = createSlider(0, 180, 30, 1);
  petalY_slider.position(10, 90);
  petalY_slider.style('width', slider_widths);

  petalWidth_slider = createSlider(0, 200, 20, 1);
  petalWidth_slider.position(10, 120);
  petalWidth_slider.style('width', slider_widths);

  petalHeight_slider = createSlider(0, 200, 80, 1);
  petalHeight_slider.position(10, 150);
  petalHeight_slider.style('width', slider_widths);

  petalAngle_slider = createSlider(0,3,0,1);
  petalAngle_slider.position(10, 180);
  petalAngle_slider.style('width', slider_widths);


  // Set colors
  fill(204, 101, 192, 127);

  // A design for a simple flower
  translate(580, 200);
  noStroke();
}

function draw() {
  drawingContext.clearRect(0, 0, width, height);
  text('petals', petal_slider.x * 2 + petal_slider.width, petal_slider.y);
  text('turns', turns_slider.x * 2 + turns_slider.width, turns_slider.y);
  text('petal Y', petalY_slider.x * 2 + petalY_slider.width, petalY_slider.y);
  text('petal X', petalX_slider.x * 2 + petalX_slider.width, petalX_slider.y);
  text('petal Width', petalWidth_slider.x * 2 + petalWidth_slider.width, petalWidth_slider.y);
  text('petal Height', petalHeight_slider.x * 2 + petalHeight_slider.width, petalHeight_slider.y);

  let n_petals = petal_slider.value();
  let turns = turns_slider.value();
  let petalX = petalX_slider.value();
  let petalY = petalY_slider.value();
  let petalWidth = petalWidth_slider.value();
  let petalHeight = petalHeight_slider.value();
  let petalAngle = petalAngle_slider.value();

  if (petalAngle == 0) {
    ellipseMode(CENTER)
  } else if (petalAngle == 1) {
    ellipseMode(RADIUS)
  } else if (petalAngle == 2) {
    ellipseMode(CORNER)
  } else {
    ellipseMode(CORNERS)
  }
  push()
  translate(580, 200);
  for (let i = 0; i < n_petals; i ++) {
    ellipse(petalX, petalY, petalWidth, petalHeight);
    rotate(PI * turns);
  }
  pop()
}
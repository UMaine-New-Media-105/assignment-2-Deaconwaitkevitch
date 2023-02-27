// Used columns instead of rows
// Did it wrong the first time, this is the fixed version. 



function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
}

function draw() {
  background(220);
  stroke(0, 90, 0);
  drawColumn(0, "darkred");
  drawColumn(80, "darkred");
  fill("lavender");
  rect(80, 240, 80);
  drawColumn(160, "darkred");
  drawColumn(240, "lavender");
  rect(160, 160, 80);
  drawColumn(320, "darkred");
  fill("lavender");
  rect(160, 320, 80);
}

function drawColumn(x, color) {
  fill(color);
  rect(x, 0, 80);
  rect(x, 80, 80);
  rect(x, 160, 80);
  rect(x, 240, 80);
  rect(x, 320, 80);
}

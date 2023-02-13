let X = 50;
let Y = 100;
let Z = 200;
let A= 20;
function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
}

function draw() {
  background(220);
  fill(X, Z, Y - A);
   if (mouseX > 200 && fill ("azure") )
  rect(0, 0, 80);
  rect(0, 80, 80);
  rect(0, 160, 80);
  rect(0, 320, 80);
  fill("rgb(80,100,110)");
  rect(0, 240, 80);
    fill(X + A, Z, Y - A);
   if (mouseX > 100 && fill ("azure") )
  rect(80, 0, 80);
  rect(80, 80, 80);

  fill("rgb(80,120,120)");
  rect(80, 160, 80);

  fill(X + A, Z, Y - A);
   if (mouseX > 200 && fill ("azure") )
  rect(80, 240, 80);

  fill("rgb(80,120,120)");
  rect(80, 320, 80);

  fill(X + A*2, Z, Y - A);
   if (mouseX > 100 && fill ("azure") )
  rect(160, 0, 80);

  rect(160, 80, 80);

  fill("rgb(80,140,140)");
  rect(160, 160, 80);

  fill(X + A*2, Z, Y - A);
   if (mouseX > 100 && fill ("azure") )
  rect(160, 240, 80);
  fill("rgb(80,140,140)");
  rect(160, 320, 80);

  fill("rgb(80,160,160)");
  rect(240, 0, 80);

  rect(240, 80, 80);

  rect(240, 160, 80);

  rect(240, 240, 80);

  rect(240, 320, 80);

  fill(X + A*3, Z, Y - A);
   if (mouseX > 100 && fill ("azure") )
  rect(320, 0, 80);

  rect(320, 80, 80);

  rect(320, 160, 80);

  rect(320, 240, 80);

  rect(320, 320, 80);
}

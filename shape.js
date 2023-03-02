function setup() {
  createCanvas(400, 400);
}
// This my shape, an Arrow.

function draw() {
  background(220);
  fill("red")
 beginShape();
vertex(140,50);
vertex(330,120)
vertex(140,200)
vertex(230,120);
endShape(CLOSE);
}

function setup() {
  createCanvas(600, 400);
}

//This is a flag combining Denmark, and Wales. 
//I chose wales because I liked the colors, and figured it was close enough to a country

function draw() {
  background(220);
  noStroke();
  fill("mediumseagreen")
  rect(0,0,600)
  fill("white")
  rect(0,130,600)
  stroke("crimson")
  strokeWeight(15)
  line(90,0,90,400)
  line(0,130,600,130)
  strokeWeight(2)
  line(0,120,600,120)
  line(0,140,600,140)
   line(100,0,100,400)
   line(80,0,80,400)
}

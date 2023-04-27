var X;
var changeDirection;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  moveArrow(-130,-50,2);
}

function moveArrow(X, Y,size) {
  push();
  	if(X>width){
		changeDirection=true}
  	else if (X<=0){
		changeDirection=false}
  	if (X>=0 && changeDirection == false){
		X=X+1}
  	else if(changeDirection == true){
		X=X-1}
  fill("crimson");
  scale(size)
  translate(X,Y)
  beginShape();
  vertex(140, 50);
  vertex(330, 120);
  vertex(140, 200);
  vertex(230, 120);
  endShape(CLOSE);
  pop();
}

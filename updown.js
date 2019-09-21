function setup() {
  createCanvas(400, 400);
}
var ballY = 0;
var ballY2 = 0;
var ballSpeed = 3;
var ballSpeed2 = 5;

function draw() {
  background(220);

  ellipse(100, ballY, 30);
  ellipse(300, ballY2, 30);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;

  if (ballY >= 400) {
    ballSpeed = -3;
  }

  if (ballY2 >= 400) {
    ballSpeed2 = -5;
  }
  
  if (ballY <= 0) {
    ballSpeed = 3;
  }

  if (ballY2 <= 0) {
    ballSpeed2 = 5;
  }

}

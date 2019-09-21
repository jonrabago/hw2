function setup() {
  createCanvas(400, 400);
}
var ballY = 0;
var ballY2 = 0;
var ballSpeed = 3;
var ballSpeed2 = 5;
var ballColor = 255
var ballColor2 = 0
var ballColor3 = 255
var ballColor4 = 0

function draw() {
  background(220);

  noStroke();
  fill(ballColor, 0, ballColor2);
  ellipse(100, ballY, 30);
  fill(ballColor4, 0, ballColor3);
  ellipse(300, ballY2, 30);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;

  if (ballY >= 400) {
    ballSpeed = -3;
    ballColor = 0;
    ballColor2 = 255;
  }

  if (ballY2 >= 400) {
    ballSpeed2 = -5;
    ballColor4 = 0;
    ballColor3 = 255;
  }
  
  if (ballY <= 0) {
    ballSpeed = 3;
    ballColor = 255;
    ballColor2 = 0;
      }

  if (ballY2 <= 0) {
    ballSpeed2 = 5;
    ballColor4 = 255;
    ballColor3 = 0;
  }

}

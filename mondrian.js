function setup() {
  createCanvas(330, 445);
}

function draw() {
  background(240);
  noStroke();
  
  // Yellow Rec 1
  fill(255, 200, 0, 230);
  rect(0, 0, 50, 90);
  
  // Yellow Rec 2
  rect(0, 230, 15, 70);
  
  // Yellow Rec 3
  rect(15, 370, 32, 80);
  
  // Yellow Rec 4
  rect(285, 430, 30, 20);
  
  
  // Red Rec 1
  fill(205, 0, 20);
  rect(50, 230, 55, 70);
  
  // Red Rec 2
  rect(285, 321, 26, 28);
  
  // Red Rec 3
  rect(160, 430, 28, 28);
  
  
  // Blue Rec 1
  fill(0, 0, 255, 180)
  rect(315, 230, 15, 70);
  
  rect(105, 430, 31, 28);
  
  stroke(0);
  strokeWeight(7);
  
  // Vertical Stroke 1
  line(12,0, 12, 450);
  
  stroke(0);
  strokeWeight(9);
  
  // Vertical Stroke 2
  line(50,0, 50, 450);
  
  // Vertical Stroke 3
  line(105,0, 105, 450);
  
  // Vertical Stroke 4
  line(285,0, 285, 450);
  
  // Vertical Stroke 5
  line(315,0, 315, 450);
  
  //
  
  // Horizontal Line 1
  line(0, 90, 330, 90);
  
  // Horizontal Line 2
  line(0, 160, 330, 160);
  
  // Horizontal Line 3
  line(0, 230, 330, 230);
  
  // Horizontal Line 4
  line(0, 300, 330, 300);
  
  strokeWeight(20);
  
  // Short Horizontal Line 1
  line(292, 265, 308, 265);
  
  strokeWeight(12);
  
  // Short Horizontal Line 2
  line(15, 335, 100, 335);
  
  // Short Horizontal Line 3
  line(15, 365, 45, 365);
  
  strokeWeight(16);
  
  // Short Horizontal Line 4
  line(54, 372, 100, 372);
  
  strokeWeight(28);
  
  // Short Horizontal Line 5
  line(295, 395, 400, 395);
  
  strokeWeight(23);
  
  // Short Horizontal Line 6
  line(230, 436, 230, 445);
  
  // Short Horizontal Line 7
  strokeWeight(7);
  line(110, 428, 310, 428);
  
  strokeWeight(10);
  
  // Short Horizontal Line
  line(15, 400, 45, 400);
  
}

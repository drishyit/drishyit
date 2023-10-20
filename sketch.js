
 let ellipses = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  // Create a new ellipse with random position, size, and color
  let x = random(width);
  let y = random(height);
  let diameter = random(20, 100);
  let fillColor = color(random(255), random(255), random(255));
  let speedX = random(-2, 2); // Random horizontal speed
  let speedY = random(-2, 2); // Random vertical speed
  let ellipseObj = {
    x: x,
    y: y,
    diameter: diameter,
    fillColor: fillColor,
    speedX: speedX,
    speedY: speedY,
  };

  // Add the new ellipse to the array
  ellipses.push(ellipseObj);

  // Display and update the ellipses
  for (let i = 0; i < ellipses.length; i++) {
    fill(ellipses[i].fillColor);
    ellipse(ellipses[i].x, ellipses[i].y, ellipses[i].diameter);

    // Move the ellipse
    ellipses[i].x += ellipses[i].speedX;
    ellipses[i].y += ellipses[i].speedY;

    // Randomly change the color
    if (frameCount % 60 === 0) {
      ellipses[i].fillColor = color(random(255), random(255), random(255));
    }

    // If the ellipse goes out of the canvas, remove it from the array
    if (
      ellipses[i].x < -ellipses[i].diameter ||
      ellipses[i].x > width ||
      ellipses[i].y < -ellipses[i].diameter ||
      ellipses[i].y > height
    ) {
      ellipses.splice(i, 1);
    }
  }
}

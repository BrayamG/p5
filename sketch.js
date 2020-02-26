function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  //text(hour()%12,10,50);
  fill(0);
  noStroke();

  fill(255);
  ellipse(200, 200, 300, 300);
  fill(200, 25, 60);
  arc(200, 200, 300, 300, 1.5 * PI, ((hour() % 12) / 6 * PI - HALF_PI + 0.0001));

  fill(0);
  ellipse(200, 200, 250, 250);

  fill(255);
  ellipse(200, 200, 200, 200);
  fill(60, 200, 25);
  arc(200, 200, 200, 200, 1.5 * PI, (minute() / 30 * PI - HALF_PI + 0.0001));

  fill(0);
  ellipse(200, 200, 150, 150);

  fill(255);
  ellipse(200, 200, 100, 100);
  fill(25, 60, 200);
  arc(200, 200, 100, 100, 1.5 * PI, (second() / 30 * PI - HALF_PI + 0.0001));

  fill(0);
  ellipse(200, 200, 50, 50);

  fill(255);
  textAlign(RIGHT);
  text(hour() % 12, 184.6, 380);
  text(":", 190, 380);
  textAlign(CENTER);
  text(minute(), 200, 380);
  text(":", 210, 380);
  textAlign(LEFT);
  text(second(), 213.5, 380);
}

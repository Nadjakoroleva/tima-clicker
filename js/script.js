let x = 100;
let y = 250;
let d = 200;
let score = 0;
let click_me = 0;

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background("#63ECF0");
  ellipse(x, y, d, d);
  textSize(50);
  text(score, 400, 100);
}

function mouseClicked() {
  if (mouseX > x - d && mouseX < x + d) {
    if (mouseY > y - d && mouseY < y + d) {
      x = random(100, 300);
      y = random(100, 300);
      d = random(50, 490);
      score = score + 2;
    }
  }
  fill("#D81BF2");
}

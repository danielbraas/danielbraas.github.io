let bubbles = [];

function setup() {
  canvas = createCanvas(600, 600);
  canvas.style('margin: auto');

  for (let i = 0; i < 50; i++){
    let x = random(width);
    let y = random(height);
    let rad = random(10, 30);
    let RGB = [random(255), random(255), random(255)];
    bubbles[i] = new Bubble(x, y, rad, RGB);
  }
  createP('This is another paragraph created in JS')
}

function draw() {
  background(0);
  for (let i = 0; i < 50; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
}
  
class Bubble {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move() {
    this.x = this.x + random(-5, 5);
    if(this.x > width || this.x < 0){
      this.x = random(0, width);
    }
    this.y = this.y + random(-5, 5);
    if(this.y > height || this.y < 0){
      this.y = random(0, height);
    }
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(this.x, this.y, this.r)
  }
}

let bubble1;
let bubble2;

function setup() {
  createCanvas(400, 400);
  bubble1 = new Bubble(100, 100, 10);
  bubble2 = new Bubble(200, 200, 20);
}

function draw() {
  background(0);
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
}
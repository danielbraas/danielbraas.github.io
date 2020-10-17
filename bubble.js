class Bubble {
  constructor(x, y, rad, RBG = [255]){
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.RBG = RBG
  }
  
  move() {
    // define x-axis movement
    this.x = this.x + random(-5, 5);
    if(this.x > width || this.x < 0){
      this.x = random(0, width);
    }

    // define y-axis movement
    this.y = this.y + random(-5, 5);
    if(this.y > height || this.y < 0){
      this.y = random(0, height);
    }
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(this.RBG);
    ellipse(this.x, this.y, this.rad)
  }
}

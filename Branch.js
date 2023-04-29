class Branch {
  constructor(len, depth, angle, weight) {
    this.len = len;
    this.depth = depth;
    this.angle = angle;
    this.weight = weight;
  }

  draw() {
    if (this.depth <= 0) {
      noFill();
      strokeWeight(this.weight/2);
      ellipse(0,0,this.weight*6,this.weight*3);
      return;
    }

    strokeWeight(this.weight);
    line(0, 0, 0, -this.len);
    translate(0, -this.len);

    // let jitter = random(-0.005, 0.005); // 添加抖动效果
    // let newAngle = this.angle + jitter;
    let newAngle = this.angle

    if (this.len > 4) {
      rotate(newAngle);
      let newBranch = new Branch(this.len * 0.67, this.depth - 1, this.angle, this.weight);
      newBranch.draw();

      rotate(-2 * newAngle);
      newBranch.draw();

      rotate(newAngle);
      newBranch = new Branch(-this.len * 0.67, this.depth - 1, this.angle, this.weight);
      newBranch.draw();

      rotate(-2 * newAngle);
      newBranch.draw();

      rotate(newAngle);
    }
  }
}

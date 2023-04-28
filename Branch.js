class Branch {
  constructor(len, depth, angle, weight) {
    this.len = len;
    this.depth = depth;
    this.angle = angle;
    this.weight = weight;
  }

  draw() {
    if (this.depth <= 0) {
      return;
    }

    strokeWeight(this.weight);
    line(0, 0, 0, -this.len);
    translate(0, -this.len);

    if (this.len > 4) {
      rotate(this.angle);
      let newBranch = new Branch(this.len * 0.67, this.depth - 1, this.angle, this.weight);
      newBranch.draw();

      rotate(-2 * this.angle);
      newBranch.draw();

      rotate(this.angle);
      newBranch = new Branch(-this.len * 0.67, this.depth - 1, this.angle, this.weight);
      newBranch.draw();

      rotate(-2 * this.angle);
      newBranch.draw();

      rotate(this.angle);
    }
  }
}

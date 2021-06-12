class Box {
  constructor(x, y, w, h) {
    var box_features = {
      restitution: 0.8,
      friction: 1,
    };
    this.box = Bodies.rectangle(x, y, w, h, box_features);
    World.add(myWorld, this.box);
    this.w = w;
    this.h = h;
    this.a = 255;
  }
  display() {
    if (this.box.speed >= 3) {
      World.remove(myWorld, this.box);
      push();
      tint(255, this.a);
      this.a = this.a - 1;
      pop();
    } else {
      push();
      translate(this.box.position.x, this.box.position.y);
      rotate(this.box.angle);

      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }
}

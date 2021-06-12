class Polygon {
  constructor(x, y, w, h) {
    var polygon_features = {
      restitution: 0.8,
      friction: 1,
    };
    this.polygon = Bodies.rectangle(x, y, w, h, polygon_features);
    World.add(myWorld, this.polygon);
    this.w = w;
    this.h = h;
    this.polygon_img = loadImage("polygon.png");
  }
  display() {
    push();
    translate(this.polygon.position.x, this.polygon.position.y);
    rotate(this.polygon.angle);

    imageMode(CENTER);
    image(this.polygon_img, 0, 0, this.w, this.h);
    pop();
  }
}

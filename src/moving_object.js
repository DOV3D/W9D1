function MovingObject (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;

}

MovingObject.prototype.draw = function (ctx) {

    ctx.beginPath();
    ctx.fillStyle = this.color;

  // arguments: center x-position, center y-position, radius, start-angle, end-angle, [clockwise?]
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  );

  ctx.fill();

};


module.exports = MovingObject;
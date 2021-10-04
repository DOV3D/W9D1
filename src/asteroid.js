const MovingObject = require("./moving_object");
const Util = require("./util");

Util.inherits(Asteroid, MovingObject);

function Asteroid(position) {
    this.COLOR = "black";
    this.RADIUS = 10;
    let obj = { 
        pos: position, 
        vel: Util.randomVec(2),
        color: this.COLOR,
        radius: this.RADIUS
    }
    MovingObject.call(this, obj);
}

module.exports = Asteroid;
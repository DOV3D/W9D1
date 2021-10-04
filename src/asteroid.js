const MovingObject = require("./moving_object");
const Util = require("./util");

Util.inherits(Asteroid, MovingObject);

function Asteroid(position) {
    Asteroid.COLOR = "black";
    Asteroid.RADIUS = 10;

    let obj = { 
        pos: position, 
        vel: Util.randomVec(2),
        color: Asteroid.COLOR,
        radius: Asteroid.RADIUS
    };
    
    MovingObject.call(this, obj);
}

module.exports = Asteroid;
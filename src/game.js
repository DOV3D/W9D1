function Game () {
    Game.DIM_X = 500;
    Game.DIM_Y = 300;
    Game.NUM_ASTEROIDS = 8;

    this.asteroids = [];
    this.addAsteroids();

}


Game.prototype.addAsteroids = function () {

    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
        let position = this.randomPosition();
        this.asteroids.push(new Asteroid(position));
    }
};

Game.prototype.randomPosition = function () {

    let x = Math.floor(Math.random() * (Game.DIM_X + 1));
    let y = Math.floor(Math.random() * (Game.DIM_Y + 1));

    return [x, y];

};

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.asteroids.forEach(asteroid => {asteroid.draw(ctx);});

};


Game.prototype.moveObjects = function () {

    this.asteroids.forEach(asteroid => {asteroid.move();});

};

module.exports = Game;
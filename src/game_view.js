const Game = require("./game");

function GameView() {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    let moveObjects = this.game.moveObjects.bind(this.game);
    let drawGame = this.game.draw.bind(this.game, this.ctx);
    
    const callBack = function () {
        drawGame();
        moveObjects();
    };
    
    setInterval(callBack, 20);
};

module.exports = GameView;
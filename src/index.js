const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');

window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded!!!');
    
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    window.ctx = ctx;
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid;
});

console.log("Webpack is working!");
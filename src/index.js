const MovingObject = require('./moving_object.js');

window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded!!!');
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    
    window.MovingObject = MovingObject;
});

console.log("Webpack is working!");
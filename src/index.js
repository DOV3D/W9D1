const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded!!!');
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    console.log(ctx);

});

console.log("Webpack is working!");
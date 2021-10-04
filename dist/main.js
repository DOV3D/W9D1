/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(position) {\n    Asteroid.COLOR = \"black\";\n    Asteroid.RADIUS = 10;\n\n    let obj = { \n        pos: position, \n        vel: Util.randomVec(2),\n        color: Asteroid.COLOR,\n        radius: Asteroid.RADIUS\n    };\n    \n    MovingObject.call(this, obj);\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

eval("function Game () {\n    Game.DIM_X = 500;\n    Game.DIM_Y = 300;\n    Game.NUM_ASTEROIDS = 8;\n\n    this.asteroids = [];\n    this.addAsteroids();\n\n}\n\n\nGame.prototype.addAsteroids = function () {\n\n    while (this.asteroids.length < Game.NUM_ASTEROIDS) {\n        let position = this.randomPosition();\n        this.asteroids.push(new Asteroid(position));\n    }\n};\n\nGame.prototype.randomPosition = function () {\n\n    let x = Math.floor(Math.random() * (Game.DIM_X + 1));\n    let y = Math.floor(Math.random() * (Game.DIM_Y + 1));\n\n    return [x, y];\n\n};\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    this.asteroids.forEach(asteroid => {asteroid.draw(ctx);});\n\n};\n\n\nGame.prototype.moveObjects = function () {\n\n    this.asteroids.forEach(asteroid => {asteroid.move();});\n\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView() {\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n    let moveObjects = this.game.moveObjects.bind(this.game);\n    let drawGame = this.game.draw.bind(this.game, this.ctx);\n    \n    const callBack = function () {\n        drawGame();\n        moveObjects();\n    };\n    \n    setInterval(callBack, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n    console.log('DOM loaded!!!');\n    \n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    console.log(ctx);\n    window.ctx = ctx;\n    window.MovingObject = MovingObject;\n    window.Asteroid = Asteroid;\n    window.Game = Game;\n    window.GameView = GameView;\n});\n\nconsole.log(\"Webpack is working!\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n\n}\nMovingObject.prototype.move = function () {\n  let [a, b] = this.vel;\n  let [x, y] = this.pos;\n  this.pos = [x + a, y + b];\n};\n\nMovingObject.prototype.draw = function (ctx) {\n\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n\n  // arguments: center x-position, center y-position, radius, start-angle, end-angle, [clockwise?]\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI\n  );\n\n  ctx.fill();\n\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        //...\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
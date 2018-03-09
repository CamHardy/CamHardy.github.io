// main.js
'use strict';

var canvas;
var ship;
var enemies = [];

function setup() {
	canvas = createCanvas(600, 400);
	canvas.parent('container');
	colorMode(HSB);

	ship = new Ship();
	for (var i = 0; i < 6; i++) {
		enemies[i] = new Enemy((i * 100) + 45, 30);
	}
}

function draw() {
	background(25);
	ship.show();
	enemies.forEach(function(e) {
		e.show();
	});
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		ship.move(-1);
	}
	else if (keyCode === RIGHT_ARROW) {
		ship.move(1);
	}
}
// main.js
'use strict';

var canvas;
var ship;
var enemies = [];
var bullets = [];

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
	ship.update();

	bullets.forEach(function(b, i) {
		b.show();
		b.update();
		enemies.forEach(function(e, j) {
			if (b.hits(e)) {
				bullets.splice(i, 1);
				enemies.splice(j, 1);
			}
		});
		if (b.y < 10) {
			bullets.splice(i, 1);
		}
	});
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
	else if (keyCode == 32) {
		bullets.push(new Bullet(ship.x, height - 40));
	}
	return false;
}

function keyReleased() {
	if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
		ship.move(0);
	}
}
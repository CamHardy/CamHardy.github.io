// Bullet.js
'use strict';

class Bullet {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	update() {
		this.y -= 3;
	}

	show() {
		fill(200, 255, 255);
		rect(this.x - 3, this.y, 5, 20, 3);
	}

	hits(enemy) {
		return dist(this.x, this.y, enemy.x, enemy.y) < 12;
	}
}
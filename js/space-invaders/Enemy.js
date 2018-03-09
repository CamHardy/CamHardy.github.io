// Enemy.js
'use strict';

class Enemy {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	show() {
		fill(0, 50, 100);
		ellipse(this.x, this.y, 20, 20);
	}
}
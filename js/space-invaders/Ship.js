// Ship.js
'use strict';

class Ship {
	constructor() {
		this.direction = 0;
		this.x = width / 2;
	}

	show() {
		fill(255);
		triangle(this.x - 10, height - 10, this.x, height - 30, this.x + 10, height - 10);
	}

	move(direction) {
		this.x += direction * 5;
	}
}
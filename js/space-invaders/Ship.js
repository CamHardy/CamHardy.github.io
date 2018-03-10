// Ship.js
'use strict';

class Ship {
	constructor() {
		this.direction = 0;
		this.x = width / 2;
	}

	update() {
		this.x += this.direction * 5;		
	}

	show() {
		fill(255);
		triangle(this.x - 10, height - 10, this.x, height - 30, this.x + 10, height - 10);
	}

	move(direction) {
		this.direction = direction;
	}
}
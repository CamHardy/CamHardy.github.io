// Snake.js
'use strict'

class Snake {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.setDir(1, 0);
	}

	update() {
		this.x = constrain(this.x + this.xSpeed * grid, 0, width - grid - 1);
		this.y = constrain(this.y + this.ySpeed * grid, 0, height - grid - 1);
	}

	show() {
		fill(255);
		rect(this.x, this.y, grid, grid);
	}

	setDir(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}
}

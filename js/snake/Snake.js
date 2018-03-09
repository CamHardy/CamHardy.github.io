// Snake.js
'use strict'

class Snake {
	constructor() {
		this.x = floor(width / grid / 2);
		this.y = floor(height / grid / 2);
		this.setDir(1, 0);
	}

	update() {
		this.x = constrain(this.x + this.xSpeed, 0, floor(width / grid) - 1);
		this.y = constrain(this.y + this.ySpeed, 0, floor(height / grid) - 1);
	}

	show() {
		fill(255);
		rect(this.x * grid, this.y * grid, grid, grid);
	}

	eat(food) {
		let distance = dist(this.x, this.y, food.x, food.y);
		return (distance < 1);
	}

	setDir(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}
}

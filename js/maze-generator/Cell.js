// Cell.js
'use strict';

class Cell {
	constructor(x, y) {
	this.x = x;
	this.y = y;
	}

	show() {
		noFill(255);
		stroke(255);
		rect(this.x * CELL_WIDTH, this.y * CELL_WIDTH, CELL_WIDTH, CELL_WIDTH);
	}
}
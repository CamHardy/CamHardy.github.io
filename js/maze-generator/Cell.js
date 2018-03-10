// Cell.js
'use strict';

class Cell {
	constructor(x, y) {
	this.x = x;
	this.y = y;
	this.walls = [true, true, true, true]; // clockwise from the top
	this.visited = false;
	this.onStack = false;
	}

	show() {
		let sceneX = this.x * CELL_WIDTH;
		let sceneY = this.y * CELL_WIDTH;

		let p0 = {x: sceneX, y: sceneY};
		let p1 = {x: sceneX + CELL_WIDTH, y: sceneY};
		let p2 = {x: sceneX + CELL_WIDTH, y: sceneY + CELL_WIDTH};
		let p3 = {x: sceneX, y: sceneY + CELL_WIDTH};

		if (this.visited) {
			noStroke();
			fill(this.onStack ? plt.stk : plt.vis);
			rect(this.x * CELL_WIDTH, this.y * CELL_WIDTH, CELL_WIDTH, CELL_WIDTH);
		}

		stroke(plt.str);
		if (this.walls[0]) line(p0.x, p0.y, p1.x, p1.y);
		if (this.walls[1]) line(p1.x, p1.y, p2.x, p2.y);
		if (this.walls[2]) line(p2.x, p2.y, p3.x, p3.y);
		if (this.walls[3]) line(p3.x, p3.y, p0.x, p0.y);
	}

	pickNeighbor() {
		let neighbors = [];

		let top		= grid[index(this.x	   , this.y - 1)];
		let right 	= grid[index(this.x + 1, this.y    )];
		let bottom 	= grid[index(this.x    , this.y + 1)];
		let left 	= grid[index(this.x - 1, this.y    )];

		if (top && !top.visited) neighbors.push(top);
		if (right && !right.visited) neighbors.push(right);
		if (bottom && !bottom.visited) neighbors.push(bottom);
		if (left && !left.visited) neighbors.push(left);

		return neighbors.length > 0 ? neighbors[floor(random(0, neighbors.length))] : undefined;
	}

	highlight() {
		let sceneX = this.x * CELL_WIDTH;
		let sceneY = this.y * CELL_WIDTH;
		noStroke();
		fill(plt.hi);
		rect(sceneX + 1, sceneY + 1, CELL_WIDTH - 1, CELL_WIDTH - 1);
	}
}
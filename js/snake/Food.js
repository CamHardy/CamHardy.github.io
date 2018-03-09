// Food.js
'use strict';

class Food {
	constructor() {
		this.x = floor(random(width) / grid);
		this.y = floor(random(height) / grid);
	}

	show() {
		fill(255, 127, 63);
		rect(this.x * grid, this.y * grid, grid, grid);
	}
}
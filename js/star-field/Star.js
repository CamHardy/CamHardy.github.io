// Star.js
'use strict';

const speed = 5;

class Star {
	constructor() {
		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(width);
	}

	update() {
		this.z -= speed;

		if (this.z < 1) {
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.z = width + random(0, width / 2);
		}
	}

	show() {
		let sceneX = map(this.x / this.z, 0, 1, 0, width / 2);
		let sceneY = map(this.y / this.z, 0, 1, 0, height / 2);

		fill(255);
		ellipse(sceneX, sceneY, 4, 4);
	}
}
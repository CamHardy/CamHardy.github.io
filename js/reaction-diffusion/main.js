// main.js
'use strict';

var canvas;
var current = [];
var next = [];

// system constants
const dA = 1;
const dB = 0.5;
const feed = 0.055;
const kill = 0.062;
const weight = [[0.05,  0.2, 0.05],
				[0.20, -1.0, 0.20],
				[0.05,  0.2, 0.05]];

function setup() {
	canvas = createCanvas(400, 400);
	canvas.parent('container');
	pixelDensity(1);

	for (let x = 0; x < width; x++) {
		current[x] = [];
		next[x] = [];
		for (let y = 0; y < height; y++) {
			current[x][y] = {a: 1, b: 0};
			next[x][y] = {a: 1, b: 0};
		}
	}

	for (let n = 0; n < 3; n++) {
		let x = floor(random(width - 10));
		let y = floor(random(height - 10));
		for (let i = x; i < x + 10; i++) {
			for (let j = y; j < y + 10; j++) {
				current[i][j].b = 1;
			}
		}
	}
}

function draw() {
	background(51);
	loadPixels();

	for (let x = 0; x < width; x++) {
		for (let y = 0; y < height; y++) {
			let c = (current[x][y].a - current[x][y].b) * 255;
			c = constrain(c, 0, 255);
			let pix = (x + y * width) * 4;
			pixels[pix + 0] = c;
			pixels[pix + 1] = c;
			pixels[pix + 2] = c;
			pixels[pix + 3] = 255;
		}
	}

	for (let x = 1; x < width - 1; x++) {
		for (let y = 1; y < height - 1; y++) {
			next[x][y] = calcNextValues(x, y);
		}
	}

	updatePixels();
	swap();
}

function swap() {
	let temp = current;
	current = next;
	next = temp;
}

function calcNextValues(x, y) {
	let a = current[x][y].a;
	let b = current[x][y].b;
	let lap = laplace(x, y);

	let newA = a + 
				((dA * lap.a) - 
				(a * sq(b)) + 
				feed * (1 - a));
	let newB = b + 
				((dB * lap.b) + 
				(a * sq(b)) - 
				(kill + feed) * b);
	return {a: newA, b: newB};
}

function laplace(x, y) {
	let sumA = 0;
	let sumB = 0;

	for (let col = 0; col < weight.length; col++) {
		for (let row = 0; row < weight[col].length; row++) {
			sumA += current[x + col - 1][y + row - 1].a * weight[col][row];
			sumB += current[x + col - 1][y + row - 1].b * weight[col][row];
		}
	}

	return {a: sumA, b: sumB};
}
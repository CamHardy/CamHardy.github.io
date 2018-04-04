// main.js
'use strict';

const WIDTH = 400;
const HEIGHT = 400;
const r = (WIDTH - 70) / 2;

var totalCount = 0;
var circleCount = 0;
var estPi;
var closestPi = 0;

var canvas;
var banner;

function setup() {
	canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent('container');

	background(51);
	translate(WIDTH / 2, r + 10);

	stroke(255);
	strokeWeight(4);
	noFill();

	rectMode(CENTER);
	rect(0, 0, r * 2, r * 2);
	ellipse(0, 0, r * 2, r * 2);

	strokeWeight(1);
}

function draw() {
	translate(WIDTH / 2, r + 10);

	for (let i = 0; i < 1000; i++) {
		let x = random(-r, r);
		let y = random(-r, r);
		let dd = x * x + y * y;

		if (dd <= sq(r)) {
			circleCount++;
			stroke(0, 128 + random(127), 0, 100);
		}
		else {
			stroke(128 + random(127), 0, 0, 100);
		}

		point(x, y);
		totalCount++;
		estPi = 4 * (circleCount / totalCount);
		
		if (abs(PI - estPi) < abs(PI - closestPi)) {
			closestPi = estPi;
		}
	}

	translate(0, r + 35);
	fill(51);
	noStroke();
	rect(0, 0, WIDTH, 50);
	fill(255);
	noStroke();
	textAlign(CENTER)
	text('Closest approximation: ' + closestPi.toFixed(15), 0, -10);
	text('Current approximation: ' + estPi.toFixed(15), 0, 10);
}
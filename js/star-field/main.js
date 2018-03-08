// main.js
'use strict';

const STAR_COUNT = 400;
var stars = [];
var canvas;

function setup() {
	canvas = createCanvas(400, 400);
	canvas.parent('container');

	for (var i = 0; i < STAR_COUNT; i++) {
		stars[i] = new Star();
	}
}

function draw() {
	background(0);
	translate(width/2, height/2);

	for (var i = 0; i < STAR_COUNT; i++) {
		stars[i].update();
		stars[i].show();
	}
}
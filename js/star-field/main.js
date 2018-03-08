// main.js
'use strict';

const STAR_COUNT = 400;
var stars = [];
var discoMode = false;
var canvas;

function setup() {
	canvas = createCanvas(400, 400);
	canvas.parent('container');
	colorMode(HSB);

	for (var i = 0; i < STAR_COUNT; i++) {
		stars[i] = new Star();
	}

	canvas.mouseClicked(function() {
		discoMode = !discoMode;
	});
}

function draw() {
	background(0);
	translate(width/2, height/2);

	for (var i = 0; i < STAR_COUNT; i++) {
		stars[i].update();
		stars[i].show();
	}
}
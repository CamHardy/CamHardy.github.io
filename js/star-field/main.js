// main.js
'use strict';

const STAR_COUNT = 400;
var stars = [];
var speed;
var visible_stars;
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

	speed = map(mouseX, 0, width, 0, 40, true);
	visible_stars = map(mouseY, 0, height, 50, STAR_COUNT, true);

	for (var i = 0; i < visible_stars; i++) {
		stars[i].update();
		stars[i].show();
	}
}
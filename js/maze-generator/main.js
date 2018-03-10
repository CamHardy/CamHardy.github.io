// main.js
'use strict';

var canvas;
const CELL_WIDTH = 40;
var NUM_COLS;
var NUM_ROWS;
var grid = [];

function setup() {
	canvas = createCanvas(400, 400);
	canvas.parent('container');
	NUM_COLS = floor(width / CELL_WIDTH);
	NUM_ROWS = floor(height / CELL_WIDTH);

	for (var j = 0; j < NUM_ROWS; j++) {
		for (var i = 0; i < NUM_COLS; i++) {
			grid.push(new Cell(i, j));
		}
	}
}

function draw() {
	background(51);

	grid.forEach(function(e) {
		e.show();
	});
}
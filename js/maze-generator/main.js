// main.js

// depth-first recursive backtracking
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

'use strict';

var canvas;
const CELL_WIDTH = 40;
var NUM_COLS;
var NUM_ROWS;
var grid = [];
var current_cell;

function setup() {
	canvas = createCanvas(400, 400);
	canvas.parent('container');
	frameRate(10);

	NUM_COLS = floor(width / CELL_WIDTH);
	NUM_ROWS = floor(height / CELL_WIDTH);

	for (var j = 0; j < NUM_ROWS; j++) {
		for (var i = 0; i < NUM_COLS; i++) {
			grid.push(new Cell(i, j));
		}
	}

	current_cell = grid[0];
}

function draw() {
	background(51);

	grid.forEach(function(e) {
		e.show();
	});

	current_cell.visited = true;
	let next = current_cell.pickNeighbor();
	if (next) {
		next.visited = true;
		current_cell = next;
	}
}

function index(x, y) {
	return x >= 0 && y >= 0 && x < NUM_COLS && y < NUM_ROWS ? x + y * NUM_COLS : -1;
}
// main.js

// depth-first recursive backtracking
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

'use strict';

var canvas;
const CELL_WIDTH = 20;
var NUM_COLS, NUM_ROWS;
var grid = [];
var current_cell;
var stack = [];

var plt = {
	bg: '#8DB448', 
	str: '#366800', 
	vis: '#FDAE48', 
	stk: '#E6BA25',
	hi: '#C52813'
};

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
	current_cell.visited = true;
}

function draw() {
	background(plt.bg);

	grid.forEach(function(e) {
		e.show();
	});

	current_cell.highlight();
	let next_cell = current_cell.pickNeighbor();
	if (next_cell) {
		next_cell.visited = true;
		removeWalls(current_cell, next_cell);
		stack.push(current_cell);
		current_cell.onStack = true;
		current_cell = next_cell;
	}
	else if (stack.length > 0) {
		current_cell = stack.pop();
		current_cell.onStack = false;
	}
}

function index(x, y) {
	return x >= 0 && y >= 0 && x < NUM_COLS && y < NUM_ROWS ? x + y * NUM_COLS : -1;
}

function removeWalls(a, b) {
	let diffX = a.x - b.x;
	let diffY = a.y - b.y;

	if (diffX == 1) {
		a.walls[3] = false;
		b.walls[1] = false;
	}
	else if (diffX == -1) {
		a.walls[1] = false;
		b.walls[3] = false;
	}
	if (diffY == 1) {
		a.walls[0] = false;
		b.walls[2] = false;
	}
	else if (diffY == -1) {
		a.walls[2] = false;
		b.walls[0] = false;
	}

}
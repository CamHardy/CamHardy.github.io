// main.js
'use strict';

//TODO: add hex palette (16 colors)
//TODO: add alternate palettes (high contrast, b&w, etc)
//TODO: add monochrome palettes for when rendering multiple constants simultaneously

// wallpaper dimensions
const WIDTH = 1280;	
const HEIGHT = 800;

const MENUBAR = 22; // the OSX menubar covers the top 1280 x 22px of the screen

var canvas;
var digits = [];
var palette;
var colors = [];
var scenes = [lines, dots, circle, waves]; // an array of the draw functions
var picks = ['pi', 'phi', 'epsilon', 'gamma'];
var bases = ['dec', 'hex'];
var font;
var scene = 1; // which scene to render
var pick = 0; // which constant to use
var base = 0; // 0 = decimal, 1 = hexadecimal

function preload() {
	for (let i = 0; i < picks.length; i++) {
		digits[i] = loadStrings('js/pi-visualization/data/' + picks[i] + '_' + bases[base] + '.txt');
	}
	palette = loadStrings('js/pi-visualization/palette.txt');
	font = loadFont('js/pi-visualization/FiraMono-Regular.ttf');
}

function setup() {
	canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent('container');
	background(51);
	//stroke(color('#ffdc00'));
	//line(posX, 0, posX, HEIGHT);
	//line(0, posY, WIDTH, posY);

	// load from palette.txt
	for (var i of palette) {
		colors.push(color(i));
	}

	noLoop();
}

function draw() {
	//TODO: add some kind of visualization to explain what is being displayed (pi, phi, e, gamma, maybe also a title somewhere?)
	scenes[scene]();
}

function lines() {
	background(51);
	strokeWeight(3);
	
	const LEGEND = 55; // the number/color legend takes up the bottom 55px of the screen
	const H_MARGIN = 60;
	const V_MARGIN = 60;
	const CENTER_X = WIDTH / 2;
	const CENTER_Y = ((HEIGHT - MENUBAR - LEGEND) / 2) + MENUBAR;
	
	var scl = 1;

	// start at the center, iterate through the numbers once to determine the domain and range, update start coords and then render the final image
	var posX = CENTER_X;
	var posY = CENTER_Y;

	var minX = posX;
	var minY = posY;
	var maxX = posX;
	var maxY = posY;

	var direction = [{x:  0, y: -1},
					 {x:  1, y:  0},
					 {x:  0, y:  1},
					 {x: -1, y:  0}];

	let digs = digits[pick][0];

	// determine domain and range (no graphics)
	for (let i = 0; i < 1000; i++) {
		let magnitude = (parseInt(digs[i]) + 1) * scl;
		posX += direction[i % 4].x * magnitude;
		posY += direction[i % 4].y * magnitude;

		// update posX and posY
		minX = min(minX, posX);
		minY = min(minY, posY);
		maxX = max(maxX, posX);
		maxY = max(maxY, posY);
	}

	// update scl, posX, posY so it fits just right
	scl = min((WIDTH - 2 * H_MARGIN) / (maxX - minX), (HEIGHT - MENUBAR - LEGEND - 2 * V_MARGIN) / (maxY - minY));
	posX = ((CENTER_X - minX) * scl) + max(H_MARGIN, (WIDTH - ((maxX - minX) * scl) - (2 * H_MARGIN)) / 2) + H_MARGIN;
	posY = ((CENTER_Y - minY) * scl) + max(V_MARGIN, (HEIGHT - ((maxY - minY) * scl) - (2 * V_MARGIN)) / 2) + MENUBAR;


	for (let i = 0; i < 1000; i++) {
		fill(colors[digs[i]]);
		stroke(colors[digs[i]]);

		// the first circle should be real big
		let r = (i == 0) ? scl : scl / 2;
		ellipse(posX, posY, r, r);

		let magnitude = (parseInt(digs[i]) + 1) * scl;
		let offX = direction[i % 4].x * magnitude;
		let offY = direction[i % 4].y * magnitude;
		line(posX, posY, posX + offX, posY + offY);
		posX += offX;
		posY += offY;

		// update posX and posY
		minX = min(minX, posX);
		minY = min(minY, posY);
		maxX = max(maxX, posX);
		maxY = max(maxY, posY);
	}

	// draw a mock menubar for testing
	//noStroke();
	//rect(0, 0, WIDTH, 22);
	for (let i = 0; i < 10; i++) {
		noStroke();
		fill(colors[i]);
		ellipse(50 * i + (WIDTH - 450) / 2, HEIGHT - 50, 10, 10);
		ellipse(50 * i + (WIDTH - 450) / 2, HEIGHT - 50, 10, 10);
		ellipse(50 * i + (WIDTH - 450) / 2, HEIGHT - 50, 10, 10);

		fill('#ffffffa4');
		textFont(font, 13);
		textAlign(CENTER);
		text(i, 50 * i + (WIDTH - 450) / 2, HEIGHT - 20);
	}
}


function dots() {
	// plot colored dots, connect adjacent dots
	background(51);
	strokeWeight(2);

	const H_MARGIN = 200;
	const V_MARGIN = 30;
	var scl = 10;
	const NUM_COLS = 25;
	const NUM_ROWS = 21;

	const ELLIPSE_ON = true;
	const ORTHOGONALS = true;
	const DIAGONALS = true;

	let digs = digits[pick][0];

	function grid2pix(col, row) {
		return {
			x: ((WIDTH - 2 * H_MARGIN) / NUM_COLS * col) + ((WIDTH / NUM_COLS) + 2 * H_MARGIN) / 2,
			y: ((HEIGHT - 2 * V_MARGIN) / NUM_ROWS * row) + ((HEIGHT / NUM_ROWS)  + 2 * V_MARGIN) / 2
		};
	}

	for (let i = 0; i < NUM_COLS * NUM_ROWS; i++) {
		let current = digs[i];
		let color = colors[current];
		fill(color);
		stroke(color);

		let col = i % NUM_COLS;
		let row = floor(i / NUM_COLS);

		let pos = grid2pix(col, row);
		
		if (ELLIPSE_ON) ellipse(pos.x, pos.y, scl, scl);

		let adjacent = -1;
		if (ORTHOGONALS) {
			if (col - 1 >= 0) {
				if (digs[(NUM_COLS * row) + col - 1] == current) {
					let adj = grid2pix(col - 1, row);
					ELLIPSE_ON ? line(pos.x - (scl / 2), pos.y, adj.x + (scl / 2), adj.y)
						: line(pos.x, pos.y, adj.x, adj.y);
				}
			}
			if (row - 1 >= 0) {
				if (digs[(NUM_COLS * (row - 1)) + col] == current) {
					let adj = grid2pix(col, row - 1);
					ELLIPSE_ON ? line(pos.x, pos.y - (scl / 2), adj.x, adj.y + (scl / 2))
						: line(pos.x, pos.y, adj.x, adj.y);
				}
			}
		}

		// currently angle is assumed to be 45 degrees
		// this is not always correct
		// FIX THAT
		if (DIAGONALS) {
			if (col - 1 >= 0 && row - 1 >= 0) {
				if (digs[(NUM_COLS * (row - 1)) + col - 1] == current) {
					let adj = grid2pix(col - 1, row - 1);
					ELLIPSE_ON ? line(	pos.x - sqrt(sq(scl / 2) / 2), 
										pos.y - sqrt(sq(scl / 2) / 2), 
										adj.x + sqrt(sq(scl / 2) / 2), 
										adj.y + sqrt(sq(scl / 2) / 2))
						: line(pos.x, pos.y, adj.x, adj.y);
				}
			}
			if (col + 1 < NUM_COLS && row - 1 >= 0) {
				if (digs[(NUM_COLS * (row - 1)) + col + 1] == current) {
					let adj = grid2pix(col + 1, row - 1);
					ELLIPSE_ON ? line(	pos.x + sqrt(sq(scl / 2) / 2), 
										pos.y - sqrt(sq(scl / 2) / 2), 
										adj.x - sqrt(sq(scl / 2) / 2), 
										adj.y + sqrt(sq(scl / 2) / 2))
						: line(pos.x, pos.y, adj.x, adj.y);
				}
			}
		}
	}
}



function circle() {
	// the one that inspired all this
	background(151);
}

function waves() {
	// think joy division
	background(200);
}

function keyPressed() {
	// console.log(keyCode);
	if (keyCode == 49) scene = 0;
	else if (keyCode == 50) scene = 1;
	else if (keyCode == 51) scene = 2;
	else if (keyCode == 52) scene = 3;

	else if (keyCode == LEFT_ARROW) scene = max(--scene, 0);
	else if (keyCode == RIGHT_ARROW) scene = min(++scene, scenes.length - 1);
	else if (keyCode == UP_ARROW) pick = min(++pick, picks.length - 1);
	else if (keyCode == DOWN_ARROW) pick = max(--pick, 0);

	else if (keyCode == 13) {saveCanvas(canvas, picks[pick] + '_' + scenes[scene].name + '_' + bases[base], 'png'); return false;}
	else return false;

	redraw();
	// add toggles for drawing pi, phi, e, and gamma (without clearing the screen)
	// if p, toggle pi (80)
	// if g, toggle phi (because golden ratio) (71)
	// if e, toggle e (69)
	// if y, toggle gamma (because y looks close enough to gamma) (89)
	// d = dec (68)
	// h = hex (72)

	return false;
}
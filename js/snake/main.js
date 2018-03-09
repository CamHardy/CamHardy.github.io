var canvas;
var snake;
var food;
var grid = 10;

function setup() {
	canvas = createCanvas(400, 400);
	canvas.parent('container');
	frameRate(10);

	snake = new Snake();
}

function draw() {
	background(51);
	snake.update();
	snake.show();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.setDir(0, -1);
	}
	else if (keyCode === DOWN_ARROW) {
		snake.setDir(0, 1);
	}
	else if(keyCode === LEFT_ARROW) {
		snake.setDir(-1, 0);
	}
	else if(keyCode === RIGHT_ARROW) {
		snake.setDir(1, 0);
	}
}
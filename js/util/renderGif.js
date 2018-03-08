var gif;
var renderFrames;
var recording = false;

function setupGif(canvas, frames) {
	resizeCanvas(400, 400);

	gif = new GIF({
		workers: 2,
		quality: 40
	});

	renderFrames = frames;

	gif.on('finished', function(blob) {
		window.open(URL.createObjectURL(blob));
	});
}

function drawGif(canvas) {
	if (recording && renderFrames > 0) {
		gif.addFrame(canvas.elt, {delay: 1, copy: true});
		console.log('added frame');
		renderFrames--;
	}
	if (recording && renderFrames == 0) {
		recording = false;
		console.log('begining render...');
		gif.render();
	}
}

function keyPressed() {
	// press g to start the capture
	if (keyCode == 71) {
		console.log('recording started');
		recording = true;
	}
}
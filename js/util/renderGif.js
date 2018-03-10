var gif;
var renderFrames = -1;
var recording = false;

function setupGif(frames) {
	//resizeCanvas(400, 400);

	gif = new GIF({
		workers: 2,
		quality: 40
	});

	renderFrames = frames;

	gif.on('finished', function(blob) {
		window.open(URL.createObjectURL(blob));
	});
}

function drawGif() {
	if (recording) {
		gif.addFrame(document.getElementsByTagName('CANVAS')[0], {delay: 1, copy: true});
		console.log('added frame');
		renderFrames--;
		if (renderFrames == 0) {
			gifStop();
		}
	}
}

function startGif() {
	recording = true;
}

function stopGif() {
	if (recording) {
		recording = false;
		console.log('beginning render...');
		gif.render();
	}
}

function keyPressedGif() {
	// press g to start the capture
	if (keyCode == 71) {
		gifStart();
		console.log('recording started');
	}
}
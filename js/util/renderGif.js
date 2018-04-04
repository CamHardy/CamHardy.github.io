var gif;
var gif_renderFrames;
var gif_interval;
var gif_recording = false;
var gif_count = 0;

function setupGif(frames) {
	//resizeCanvas(600, 600);

	gif = new GIF({
		workers: 2,
		quality: 40
	});

	gif_renderFrames = (frames || -1);

	gif.on('finished', function(blob) {
		console.log('render complete, opening a new window...');
		window.open(URL.createObjectURL(blob));
	});

	console.log('gif setup complete.');
}

function drawGif(i) {
	gif_interval = (i || 1);

	if (gif_recording && (gif_count++ % gif_interval) == 0) {
		gif.addFrame(document.getElementsByTagName('CANVAS')[0], {delay: 1, copy: true});
		console.log('added frame.');
		if (gif_renderFrames-- == 0) {
			stopGif();
		}
	}
}

function startGif() {
	gif_recording = true;
	console.log('gif_recording started.');
}

function stopGif() {
	if (gif_recording) {
		gif_recording = false;
		console.log('beginning render...');
		gif.render();
	}
}

function keyPressedGif() {
	// press g to toggle the capture
	if (keyCode == 71) {
		!gif_recording ? startGif() : stopGif();
	}
}
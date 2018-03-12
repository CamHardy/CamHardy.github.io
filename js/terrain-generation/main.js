// main.js
'use strict';

window.onload = function () {
	// set the scene size
	var WIDTH = 600;//window.innerWidth;
	var HEIGHT = 600;//window.innerHeight;

	const FRAMERATE = 10; // three.js clamps this to a max of 60

	// set perspective camera attributes
	const VIEW_ANGLE = 45;
	var ASPECT = WIDTH / HEIGHT;
	const NEAR = 0.1;
	const FAR = 10000;

	// create a scene with a camera and renderer
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	document.getElementById('container').appendChild(renderer.domElement);

	// window.addEventListener('resize', function() {
	// 	WIDTH = window.innerWidth;
	// 	HEIGHT = window.innerHeight;
	// 	renderer.setSize(WIDTH, HEIGHT);
	// 	camera.aspect = WIDTH / HEIGHT;
	// 	camera.updateProjectionMatrix();
	// });

	// add the camera and a light source to the scene
	camera.position.z = 100;
	scene.add(camera);

	var geometry = new THREE.Geometry();

	geometry.vertices.push(
		new THREE.Vector3(-30, 35, 0 ),
		new THREE.Vector3(-20, -20, 0 ),
		new THREE.Vector3(-10, 35, 0 ),
		new THREE.Vector3(0, -20, 0 ),
		new THREE.Vector3(10, 35, 0 ),
		new THREE.Vector3(20, -20, 0 ),
		new THREE.Vector3(30, 35, 0 ),
		);
	geometry.faces.push(
		new THREE.Face3(0, 1, 2), 
		new THREE.Face3(1, 2, 3), 
		new THREE.Face3(2, 3, 4), 
		new THREE.Face3(3, 4, 5), 
		new THREE.Face3(4, 5, 6)
		);

	var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true});

	var mesh = new THREE.Mesh(geometry, material);
	mesh.drawMode = THREE.TriangleStripDrawMode; //default

	scene.add(mesh);

	// let's get this show on the road
	simLoop();

	// UPDATE LOOP

	function update() {
		
	}

	function render() {
		renderer.render(scene, camera);
	}

	function simLoop() {
		// schedule the next frame
		setTimeout(function () {
			requestAnimationFrame(simLoop);
		}, 1000 / FRAMERATE);
		update();
		render();
	}
}

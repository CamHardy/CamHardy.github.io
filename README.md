# CamHardy.github.io

### To record a gif for the thumbnail:

Put this in the html header:

```html
<script src="js/util/gif.js"></script>
<script src="js/util/renderGif.js"></script>
```

If using p5.js:

Put this in setup() (this will resize the canvas to 400x400):

```javascript
setupGif(num_frames_rendered);
```

Put this in draw():

```javascript
drawGif();
```

Put this in keyPressed():

```javascript
keyPressedGif();
```

Status messages will be logged to the console. The finished gif will open in a new tab. Ad blockers are eager to kill it, consider turning them off. Sometimes the rendering step can be slow, just give it a moment.

<!-- TODO: add instructions for three.js and phaser.js -->
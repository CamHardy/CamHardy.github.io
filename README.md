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

### TODO:

* COMMENT YOUR CODE, DUDE
* tidy up the website 
  * add content to about.html, contact.html
  * adapt existing single-post.html/single-project.html templates to display sketches
  * remove any remaining links/css for parts of the template that I gutted
* add functionality to renderGif.js for three.js and phaser.js
* add little blurbs to each sketch to explain what they do, how to interact with them, why they're neato, etc.
* add functionality to the prev/next sketch buttons
* add score/gui to snake
* make space-invaders less sucky (fix bullet flickering, add enemy behavior)
* adding sound effects to some of these sketches might be cool also (use p5.sound)

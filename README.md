# CamHardy.github.io

### To record a gif for the thumbnail:

Put this in the html header:

```html
<script src="js/util/gif.js"></script>
<script src="js/util/renderGif.js"></script>
```

If using p5.js:

Put this at the bottom of setup() (optional argument num_frames_rendered will only render a set amount of frames, otherwise infinite until stopped):

```javascript
setupGif(num_frames_rendered);
```

Put this at the bottom of draw():

```javascript
drawGif();
```

Put this in keyPressed():

```javascript
keyPressedGif();
```

Put ``startGif()`` and ``endGif()`` wherever appropriate to start and stop rendering, respectively. Alternatively use keyPressedGif() to toggle the recording on/off. 

Status messages will be logged to the console. The finished gif will open in a new tab. Ad blockers are eager to kill it, consider turning them off. Sometimes the rendering step can be slow, just give it a moment.

### TODO:

* General
  * COMMENT YOUR CODE, DUDE
  * tidy up the website 
    * add content to about.html, contact.html
    * adapt existing single-post.html/single-project.html templates to display sketches
    * remove any remaining links/css for parts of the template that I gutted
  * add functionality to renderGif.js for three.js and phaser.js
  * add little blurbs to each sketch to explain what they do, how to interact with them, why they're neato, etc.
  * add functionality to the prev/next sketch buttons
  * adding sound effects to some of these sketches might be cool (use p5.sound)
* Snake
  * add score/gui
  * fix bug where food sometimes spawns under the tail of the snake
* Space Invaders
  * fix bullet flickering
  * add enemy behavior
* Maze Generator
  * add a third dimension to the mazes
  * integrate with OpenJSCAD to generate 3d-printable stl model of the maze

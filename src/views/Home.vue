<template>
  <div class="home hero is-light is-fullheight-with-navbar bg-img">
    <vue-p5 @sketch="sketch"></vue-p5>
    <div class="hero-body has-text-centered">
      <div class="container">
        <div class="title section is-paddingless">Hello.</div>
        <div class="is-divider is-paddingless is-mobile" style="margin: auto; width: 50%"></div>
        <div class="subtitle section">I'm a Calgary-based software developer with a passion for graphics and design.</div>
        <div>
        <nav class="level is-mobile">
          <div class="level-item"></div>
          <div class="level-item has-text-centered">
            <a href="https://www.linkedin.com/in/cameron-hardy-26845a157/">
              <i class="fab fa-linkedin"></i>
              <p class="heading">LinkedIn</p>
            </a>
          </div>
          <div class="level-item has-text-centered">
            <a href="https://github.com/CamHardy">
              <i class="fab fa-github"></i>
              <p class="heading">Github</p>
            </a>
          </div>
          <div class="level-item"></div>
        </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .bg-img {
    background-image: url('../assets/bg.png');
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;
  }
  canvas {
    position: absolute;
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VueP5 from 'vue-p5'

export default {
  name: 'home',
  components: {
    HelloWorld,
    "vue-p5": VueP5
  },
  data: {
      canvas: null
  },
  methods: {
      sketch(sk) {
          sk.windowResized = () => {
              sk.resizeCanvas(sk.windowWidth, sk.windowHeight - 75);
              sk.background(200);
          };

          sk.setup = () => {
              sk.createCanvas(sk.windowWidth, sk.windowHeight - 75);
              sk.background(200);
          };

          sk.draw = () => {
              //
          };
      }
  }
}
</script>

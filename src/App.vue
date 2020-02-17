<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation">
      <div class="navbar-brand">
        <div class="navbar-item is-paddingless" v-on:click="showNav = false">
          <router-link class="navbar-item" to="/" style="font-family: 'Dosis', sans-serif; font-size: 30px;">
            <img src="../public/favicon-32x32.png" style="padding-right:10px;">
            <div style="padding-bottom: 1px">{{ name }}</div>
          </router-link>
        </div>
        <div class="navbar-burger burger" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" v-on:click="showNav = false" v-bind:class="{ 'is-active' : showNav}">
        <div class="navbar-start">
          <router-link class="navbar-item" v-for="page in pages" v-bind:to="page.route">{{ page.name }}</router-link>
        </div>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

<script>
  export default {
    name: 'app',
    data() {
      return {
        name: 'Cam Hardy',
        pages: [
          {name: 'Projects', route: '/projects'},
          {name: 'Resume', route: '/resume'},
          {name: 'Contact', route: '/contact'}
        ],
        showNav: false
      }
    }
  }
</script>
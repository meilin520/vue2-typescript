<template>
  <div id="app">
    <the-header :text="currPageTitle" :left-arrow="false"/>
    <router-view />
    <the-footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TheHeader, TheFooter } from './components/layout';
import { Getter } from 'vuex-class';

@Component({
  components: {
    TheHeader,
    TheFooter,
  },
})

export default class App extends Vue {
  @Getter('currPageTitle')
  private currPageTitle!: string;
}
</script>
<style>
html, body{
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}

#app {
  height: 100%;
  padding-top: 46px;
  overflow-y: scroll;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eeeeee;
  position: relative;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

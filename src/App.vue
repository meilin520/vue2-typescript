<template>
  <div id="app">
    <router-view />
    <the-footer v-if="showFooter"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { TheFooter } from './components/layout';
import { Getter } from 'vuex-class';

@Component({
  components: {
    TheFooter,
  },
})



export default class App extends Vue {
  private showFooter: boolean = true;

  @Watch('$route')
  public onRouteWatch(to: any, from: any, next: void) {
    this.showFooter = to.meta.switch;
  }
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

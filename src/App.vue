<!-- @format -->

<template>
  <div id="app">
    <div class="left-sidebar">
      <side-bar></side-bar>
    </div>
    <div class="main-generator">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from "./components/SideBar.vue";
export default {
  name: "app",
  components: {
    sideBar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  height: 754px;
}

.left-sidebar {
  color: white;
  height: auto;
  width: 5%;
  flex: auto;
  /*border: 0;*/
  margin: 0;
  background: black;
  box-shadow: #000 5px 5px 10px, #000 4px 4px 10px, #000 3px 3px 10px,
    #000 2px 2px 10px, #000 1px 1px 10px;
}

.main-generator {
  height: auto;
  width: 89%;
  flex: auto;
  font-family: AnuDaw, monospace;
  /*border: 0;*/
  margin: 0 0.9% 0 0;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

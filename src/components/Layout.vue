<template>
  <div id="lay-out">
    <div class="left-sidebar">
      <side-bar></side-bar>
    </div>
    <div class="main-generator">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from "./SideBar.vue";
export default {
  name: "Layout",
  components: {
    sideBar
  }
};
</script>

<style scoped>
#lay-out {
  display: flex;
  flex-direction: row;
  height: 100%;
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
</style>

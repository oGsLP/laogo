<!-- @format -->

<template>
  <div id="side-bar">
    <author-info></author-info>
    <side-list></side-list>
  </div>
</template>

<script>
import AuthorInfo from "./AuthorInfo";
import SideList from "./SideList";
export default {
  name: "SideBar",
  components: { SideList, AuthorInfo }
};
</script>

<style scoped>
#side-bar {
  width: 100%;
  height: 100%;
  color: orangered;
}
</style>

<!-- @format -->

<template>
  <div id="side-bar">
    <site-info id="site-info"></site-info>
    <side-list id="side-list"></side-list>
    <author-info id="author-info"></author-info>
  </div>
</template>

<script>
import AuthorInfo from "./AuthorInfo";
import SideList from "./SideList";
import SiteInfo from "./SiteInfo";
export default {
  name: "SideBar",
  components: { SiteInfo, SideList, AuthorInfo }
};
</script>

<style lang="stylus" scoped>
#side-bar {
  width: 100%;
  height: 100%;
  color: white;
  display flex
  flex-direction column
  justify-content space-evenly
  #site-info{
    height 25%
  }
  #side-list{
    height 60%
  }
  #author-info{
    height 14%
  }
}
</style>

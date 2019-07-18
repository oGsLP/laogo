<!-- @format -->

<template>
  <div id="side-bar">
    <site-info id="site-info"></site-info>
    <side-list id="side-list"></side-list>
    <author-info id="author-info"></author-info>
  </div>
</template>

<script>
import AuthorInfo from "./side/AuthorInfo";
import SideList from "./side/SideList";
import SiteInfo from "./side/SiteInfo";
export default {
  name: "SideBar",
  components: {
    SiteInfo,
    SideList,
    AuthorInfo
  }
};
</script>

<style lang="stylus" scoped>
#side-bar {
  width: 100%;
  height: 100%;
  padding: 5% 1px
  color: white;
  display flex
  flex-direction column
  justify-content space-between
  #site-info{
    height 19%
  }
  #side-list{
    height 52%
  }
  #author-info{
    height 19%
  }
}
</style>

<!-- @format -->

<template>
  <div id="site-info">
    <div class="pic">
      <img src="../../static/img/laogo.png" alt="" />
      <h1>Laogo</h1>
    </div>
    <div class="intro">
      <p>
        &emsp;A <b>lao</b> logo generator.<br />
        Several kinds of generators to choose. <br />&emsp;To be continued...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteInfo"
};
</script>

<style lang="stylus" scoped>
#site-info{
  color white
  width auto
  height auto
  .pic{
    width 100%
    margin 5% 0 2% 0
    padding 0 5%
    display block
    img{
      width 30%
      display inline-block
      margin-right 15%
      vertical-align middle
      }
    h1{
      font-size 42px
      font-weight bolder
      width 45%
      display inline-block
      vertical-align middle
      border-bottom 5px solid white
      text-shadow darkslategrey 5px 5px 5px
      padding-bottom 10px
    }
  }
  .intro{
    margin 2%
    display inline-block
    width 90%
  }
}
</style>

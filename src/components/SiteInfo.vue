<!-- @format -->

<template>
  <div id="site-info">
    <div class="pic">
      <img src="../../public/img/laogo.png" alt="" />
      <!--      <h1>Laogo</h1>-->
    </div>
    <!--    <div class="intro">-->
    <!--      <p>-->
    <!--        &emsp;A <b>lao</b> logo generator.<br />-->
    <!--        Several kinds of generators to choose. <br />&emsp;To be continued...-->
    <!--      </p>-->
    <!--    </div>-->
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
      width 98%
      display inline-block
      margin 1%
      vertical-align middle
      border-radius 5px
      box-shadow #eeeeee 1px 1px 4px
      }
  }
  .intro{
    margin 2%
    display inline-block
    width 90%
  }
}
</style>

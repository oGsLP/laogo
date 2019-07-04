<!-- @format -->

<template>
  <div id="author-info">
    <div class="info">
      <h2>@oGsLP</h2>
    </div>
    <b-modal title="QQ" size="sm" id="qq-code-modal" hide-footer>
      <img class="modal-img" alt="" src="../../public/img/qq.png" />
    </b-modal>
    <b-modal title="Wechat" size="sm" id="wechat-code-modal" hide-footer>
      <img class="modal-img" alt="" src="../../public/img/wechat.png" />
    </b-modal>
    <div class="social">
      <a class="github" href="https://github.com/oGsLP"
        ><i class="iconfont icon-github"></i
      ></a>
      <a class="gmail" href="mailto:ogssober+laogo@gmail.com"
        ><i class="iconfont icon-gmail"></i
      ></a>

      <a class="wechat" v-b-modal.wechat-code-modal
        ><i class="iconfont icon-wechat"></i
      ></a>
      <a class="qq" title="1145234011" v-b-modal.qq-code-modal
        ><i class="iconfont icon-qq"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorInfo",
  data() {
    return {
      code: "qq"
    };
  }
};
</script>

<style lang="stylus" scoped>
#author-info{
  display flex
  flex-direction column
  height 100%
  width 100%
  padding 2% 0 5%
  .info{
    margin 1% 1% 10% 1%
    display flex
    flex-direction row
    justify-content center
    align-items center
    h2{
      margin 0
      font-size 20px
      font-family AnuDaw
    }
  }
  .social{
    font-size 28px
    margin 2%
    padding-bottom 50px
    width 96%
    display flex
    flex-wrap wrap
    align-items center
    a{
      width 45%
      margin 1%
      color white
      cursor pointer
      &:nth-child(1){
        border-bottom 1px solid white
        border-right 1px solid white
      }
      &:nth-child(2){
        border-bottom 1px solid white
        border-left 1px solid white
      }
      &:nth-child(3){
        border-top 1px solid white
        border-right 1px solid white
      }
      &:nth-child(4){
        border-top 1px solid white
        border-left 1px solid white
      }
      i{
        font-size 28px
      }
    }
  }
}
.modal-img{
  margin: 0 auto
  width 250px
}
</style>

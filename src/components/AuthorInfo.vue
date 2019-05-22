<!-- @format -->

<template>
  <div id="author-info">
    <div class="info">
      <h2>oGsLP</h2>
    </div>
    <b-modal title="QQ" id="qq-code-modal" hide-footer>
      <img class="modal-img" alt="" src="/static/img/qq.png" />
    </b-modal>
    <b-modal title="Wechat" id="wechat-code-modal" hide-footer>
      <img class="modal-img" alt="" src="/static/img/wechat.png" />
    </b-modal>
    <div class="social">
      <a class="github" href="https://github.com/oGsLP"
        ><i class="iconfont icon-github"></i> GitHub</a
      >
      <a class="qq" title="1145234011" v-b-modal.qq-code-modal
        ><i class="iconfont icon-qq"></i> QQ</a
      >
      <a class="gmail" href="mailto:ogssober+laogo@gmail.com"
        ><i class="iconfont icon-gmail"></i> Email</a
      >
      <a class="wechat" v-b-modal.wechat-code-modal
        ><i class="iconfont icon-wechat"></i> Wechat</a
      >
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
  flex-direction row
  height 100%
  width 100%
  padding 2% 0 5%
  .info{
    margin 2% 1%
    width 40%
    display flex
    flex-direction row
    justify-content center
    align-items center
    h2{
      margin 0
      border-bottom 2px solid white
    }
  }
  .social{
    margin 2% 1%
    width 55%
    border-left 2px solid white
    display flex
    flex-wrap wrap
    align-items center
    a{
      width 50%
      color white
      cursor pointer
    }
  }
}
.modal-img{
  width 320px
}
</style>

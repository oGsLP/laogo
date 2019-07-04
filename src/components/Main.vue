<template>
  <section id="main">
    <v-typewriter class="print-text" :interval="50">
      <p>Need a logo for your products or website?</p>
      <p>Don't want to waste much time?</p>
      <p>Want it free?</p>
      <p>Ok...</p>
      <p>Let's have a try for Laogo</p>
    </v-typewriter>
    <b-button
      :style="{ opacity: btnShow }"
      variant="outline-dark"
      @click="linkGenerator('laogo')"
      >Enter ></b-button
    >

    <!--    <div id="slides">-->
    <!--      <div-->
    <!--        class="generator-slide"-->
    <!--        v-for="(kind, index) of kinds"-->
    <!--        :key="'kind_' + index"-->
    <!--        @click="linkGenerator(kind.link)"-->
    <!--      >-->
    <!--        <h2>{{ kind.name }}</h2>-->
    <!--        <img :src="`${$baseUrl + pngRoot + kind.src}`" alt="" />-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      pngRoot: "img/",
      kinds: [
        { name: "Laogo", src: "laogo.png", link: "laogo" }
        // { name: "Digital", src: "laogo.png", link: "digital" }
      ],
      btnShow: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.btnShow = 1;
    }, 6200);
  },
  methods: {
    linkGenerator(link) {
      this.$router.push({ name: link });
    }
  }
};
</script>

<style lang="stylus" scoped>
#main{
  font-family Consolas
  color black
  margin 10% 20% 0 20%
  padding 0 5%
  height 82%
  width 60%
  .print-text{
    width 100%
    font-size 32px
    height 390px
  }
  button{
    margin-left 0
    font-size 28px
    transition: opacity 3s;
  }


  #slides{
    height 80%
    width 98%
    margin 1%
    padding 2%
    border 5px solid black
    box-shadow black 1px 1px 1px,black 2px 2px 1px,black 3px 3px 2px,black 4px 4px 2px,black 5px 5px 3px
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content center
    align-items center
    overflow-y scroll
    .generator-slide{
      cursor pointer
      width 20%
      border 5px solid black
      margin 25px 2.5%
      padding 1.5% 0
      box-shadow black 1px 1px 1px,black 2px 2px 1px,black 3px 3px 2px,black 4px 4px 2px,black 5px 5px 3px
      h2{
        font-size 25px
      }
      img{
        width 60%
      }
    }
  }
}

#slides::-webkit-scrollbar{
  width 0
}
</style>

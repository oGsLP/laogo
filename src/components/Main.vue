<!-- @format -->

<template>
  <section id="main">
    <h1>Lao go</h1>
    <div id="slides">
      <div
        class="generator-slide"
        v-for="(kind, index) of kinds"
        :key="'kind_' + index"
        @click="linkGenerator(kind.link)"
      >
        <h2>{{ kind.name }}</h2>
        <img :src="'/static/img/' + kind.src" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      kinds: [
        { name: "Default", src: "laogo.png", link: "laogo" },
        { name: "Digital", src: "laogo.png", link: "digital" }
      ]
    };
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
  color black
  margin-top 3%
  padding 0 5%
  height 90%
  width 100%
  h1{
    margin 2% 30%
    width 40%
    font-size 60px
    padding 5px
    border 5px solid black
    text-shadow black 5px 5px 5px
    box-shadow black 1px 1px 1px,black 2px 2px 1px,black 3px 3px 2px,black 4px 4px 2px,black 5px 5px 3px
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

<!-- @format -->

<template>
  <div id="side-list">
    <b-list-group class="list-group">
      <b-list-group-item
        class="list-item"
        v-for="(generator, index) of generators"
        @click="linkGenerator(generator.linkName)"
        :key="'generator_' + index"
        >{{ index + 1 + ". " + generator.name }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "SideList",
  data() {
    return {
      generators: [
        { name: "laogo", linkName: "laogo" },
        { name: "laogo digital", linkName: "digital" }
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
#side-list{
  padding: 10% 0
  .list-group{
    margin 0 10% 0 10%
    width 80%
    height 100%
    overflow-y scroll
    border 1px solid white
    border-radius 20px
    .list-item{
      width 90%
      margin 1% 5%
      background black
      border-bottom white 2px solid
      color white
      cursor pointer
      font-size larger
      font-weight bolder
    }
  }

}
.list-group::-webkit-scrollbar {
  width 0
}
</style>

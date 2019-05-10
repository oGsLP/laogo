<!-- @format -->

<template>
  <ul id="side-list">
    <router-link :to="{ name: 'laogo' }">Laogo</router-link>
    <router-link :to="{ name: 'digital' }">Laogo Digital</router-link>
  </ul>
</template>

<script>
export default {
  name: "SideList"
};
</script>

<style scoped></style>

<script>
  import card from "./styles/card.vue"
  export default {
    name: "App",
    components: {
      card,
    },
  }
</script>

<template>
  <header></header>

  <card />

  <main></main>
</template>

<style>
  @import "./assets/base.css";

  #app {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
    width: 100%;
    height: 100%;
    padding-left: 20px;
  }
</style>

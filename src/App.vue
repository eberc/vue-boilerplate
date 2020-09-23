<template>
  <div id="app">
    <vue-hello-world :msg="msg" />
    <!-- <vue-input /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    msg() {
      return this.$store.state.msg
    },
  },
}
</script>
<style lang="scss">
  @import '@styles';
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     color: get($colors, text-light);
  }
</style>

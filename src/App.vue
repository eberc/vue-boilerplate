<template>
  <div id="app">
    <vue-my-component :msg="msg" />
    <vue-input />
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
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     color: get($colors, text-light);
  }
</style>

<template>
  <div id="app">
    <vue-my-component />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style lang="sass">
  @import @styles
  #app
    display: flex
    justify-content: center
    align-items: center
    font-family: 'Roboto', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: $text-light
</style>

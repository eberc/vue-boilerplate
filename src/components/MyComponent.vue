<template lang="pug">
  .container
    h2 🌞

</template>

<script>
export default {
  name: 'VueMyComponent',
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="sass" scoped>
  .container
    position: relative
    display: flex
    justify-content: center
    align-items: flex-start
    animation-name: spin
    animation-duration: 3000ms
    animation-iteration-count: infinite
    animation-timing-function: linear
    animation-fill-mode: forwards
    h2
      transform: scale(3)
  @keyframes spin
    from
      transform: rotate(0deg)
    to
      transform: rotate(360deg)
</style>

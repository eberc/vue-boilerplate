<template lang="pug">
  .container
    .container__pointer

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
    width: 300px
    height: 300px
    border-radius: 100%
    background-color: rebeccapurple
    animation-name: spin
    animation-duration: 60s
    animation-iteration-count: infinite
    animation-timing-function: linear
    animation-fill-mode: forwards
    &__pointer
      position: relative
      top: -21px
      width: 50px
      height: 50px
      transform: rotate(45deg)
      background-color: rebeccapurple
  @keyframes spin
    from
      transform: rotate(0deg)
    to
      transform: rotate(360deg)
</style>

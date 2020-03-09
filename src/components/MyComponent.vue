<template>
  <div class="container">
    <div class="container__emoji">
      🌞
    </div>
    <div class="container__title">
      {{ msg }}
    </div>
  </div>
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

<style lang="scss" scoped>
  @import '@styles';
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    &__title {
      font-family: 'Roboto', sans-serif;
      color: get($colors, text);
      font-size: 22px;
    }
    &__emoji {
      font-size: 36px;
      animation-name: spin;
      animation-duration: 5000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg) scale(1);
      }
    50% {
      transform: rotate(360deg) scale(1.5);
    }
    100% {
      transform: rotate(720deg) scale(1);
    }
  }
</style>

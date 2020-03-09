<template lang="pug">
    <input class="default-input">
</template>

<script>
export default {
  name: 'VueInput',
}
</script>

<style lang="scss" scoped>
  @import '@styles';
  .input-default {
    display: block;
    width: 100%;
    height: 45px;
    padding: 10px;
    font-family: 'Roboto';
  }
</style>

<template>
<div>
  <h2 class="my-text"> {{ insideText }} </h2>
  <input class="input-default" v-model="insideText">
</div>
</template>

<script>
export default {
  name: 'VueInput',
  data() {
    return {
      insideText: 'Digite alguma coisa',
    }
  },
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
    border: 1px solid;
    border-radius: 5px;
  }

  .my-text {
    font-size: 32px;
    color: get($colors, text);
    padding: 10px;
  }
</style>

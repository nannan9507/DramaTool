<template>
  <header>
    <div><van-icon v-show="notice" name="volume-o" /></div>
    <slot></slot>
    <div><van-icon v-show="warning" name="warn-o" /></div>
  </header>
</template>

<script>
export default {
  props: {
    warning: {
      type: Boolean,
      default: false,
    },
    notice: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="stylus" scoped>
header {
  display flex;
  justify-content space-between
  align-items center
  padding: 20px;
  font-size: 40px;
  
  i {
    font-size: 40px;
  }
}
</style>
<template>
  <div class="container">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>
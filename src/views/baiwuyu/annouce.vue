<template>
  <div class="container">
    <div class="wrapper">
      <h3 class="center">朗读以下内容告知给玩家</h3>
      <ol>
        <li>1、只有凶手可以撒谎，其他玩家只能做到隐瞒【根据剧本动态调整】</li>
        <li>2、不可以承认自己是凶手</li>
        <li>
          3、代入角色，不要出现“我剧本上写着”“我看看剧本”这类的词汇，能记住大概就更好了
        </li>
        <li>4、在不影响主线的情况下尽量完成个人任务</li>
      </ol>
    </div>

    <div class="button">
      <van-Button @click="next" type="info">朗读完毕</van-Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$emit('hide')
    },
  },
}
</script>

<style lang="stylus" scoped>
.wrapper {
  display flex;
  flex-direction: column;
  align-items center;
  height: 100vh;
}
.center {
  text-align: center;
}

.container {
  flex: 1;
  height: 100vh
  display flex
  flex-direction column
  .wrapper {
    flex 1
    overflow auto
  }
  ol {
    margin: 0 30px;
    li {
      padding: 10px 0;
      margin-bottom 15px;
      line-height 50px;
    }
  }
}

.button {
  display flex
  align-items center
  justify-content center
  border-top: 1px solid #DEDEDE
  height: 100px
}
</style>

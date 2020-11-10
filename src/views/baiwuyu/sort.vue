<template>
  <div class="container">
    <div class="wrapper">
      <van-checkbox-group v-model="value">
        <van-cell-group>
          <van-cell :key="index" v-for="(item, index) in values" :title="item" clickable @click="toggle(index)">
            <template #right-icon>
              <van-checkbox ref="checkboxes" shape="square" :name="index" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
    <div class="button">
      <Button v-if="!isAll" @click="warning" type="danger"
        >暂不确认，跳过</Button
      >
      <Button v-else @click="pass($event)" size="normal" type="info">确认配件</Button>
    </div>
  </div>
</template>

<script>
import { Dialog, Button } from 'vant'
import packages from './sort'

// 该页面可以作为页面组件复用
export default {
  name: 'sortPage',
  data() {
    const values = Object.keys(packages).map((key) => {
      return `${key} X ${packages[key]}`
    })

    return {
      values,
      value: [],
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
    Button,
  },
  computed: {
    isAll() {
      return this.value.length === this.values.length
    },
  },
  methods: {
    warning(e) {
      Dialog.confirm({
        title: '提示',
        message:
          '此过程是确认是否缺少配件，如有问题可以中止组局或联系平台方，如果跳过则默认无缺件，如有缺件后续被上报则责任转嫁，是否坚持跳过？',
        showCancelButton: true,
        confirmButtonText: '跳过',
      }).then((val) => {
        this.pass(e)
      })
    },
    pass(e) {
      this.$emit('hide')
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  },
}
</script>

<style lang="stylus" scoped>
.container {
  height: 100vh
  display flex
  flex-direction column
  & >>> .mint-checklist-title {
    text-align left
  }

  & >>> .mint-checklist-label {
    text-align left!important
  }

  .wrapper {
    flex 1
    overflow auto
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

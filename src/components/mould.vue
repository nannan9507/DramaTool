<template>
  <div class="container">
    <div class="content">
      <!-- 准备阶段 -->
      <template v-if="game.stage === 'prepare'">
        <!-- 确认道具阶段 -->
        <page-sort v-if="show.sortPage" @hide="hide"></page-sort>
        <!-- 准备道具阶段 -->
        <!-- 宣布玩家守则 -->
        <page-annouce v-if="show.annoucePage"></page-annouce>
      </template>
      <!-- 游戏开始 -->
      <template v-if="game.stage === 'gaming'">
        <div v-if="chapter === 1">
          <div class="title">【第一章】</div>
        </div>
      </template>
      <!-- 游戏结束 -->
      <template v-if="game.stage === 'ending'"></template>
    </div>

    <div class="footer" v-if="game.stage === 'gaming'">
      <template>
        <div class="btns" v-if="!btnLock">
          <van-button type="danger" v-if="game.chapter > 1" @click="onChapter(-1)"
            >返回</van-button
          >
          <van-button type="primary" @click="onChapter(1)"
            >进入下一章节</van-button
          >
        </div>
        <div class="btns" v-else>
          <van-button disabled>防止过快点击，等待3秒解锁</van-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import PageSort from './sort.vue'
import PageAnnouce from './annouce.vue'
import { restTime, setTime } from './timer'

export default {
  components: {
    PageSort,
    PageAnnouce,
  },
  data() {
    return {
      show: {
        sortPage: false,
        annoucePage: false
      },
      game: {
        isStart: false,
        // prepare, gaming, ending
        stage: 'prepare',
        chapter: 1
      },
      btnLock: false,
    }
  },
  watch: {
    'show': {
      immediate: true,
      handler(data) {
        let is_something_choiced = false
        Object.keys(this.show).map(key => {
          if (this.show[key]) {
            is_something_choiced = true
          }
        })

        if (this.game.isStart) {
          this.game.stage = 'gaming'
        } else {
          // 如果还没进入过游戏，在哪个阶段就哪个阶段
          // 如果都没有选中的，那就走sort
          if (!is_something_choiced) {
            this.show.sortPage =  true
          }
        }
      }
    }
  },
  created() {
    this.autoLoad()

    // if (!this.game.isStart) {
    //   this
    // }

    // setTime(10, () => {
    //   console.log('time up')
    // })

    // console.log(restTime())
  },
  methods: {
    autoSave() {
      const { show, game } = this
      localStorage.setItem(
        'savedata',
        JSON.stringify({ game, show })
      )
    },
    autoLoad() {
      const values = JSON.parse((localStorage.getItem('savedata') || '{}'))

      Object.keys(values).map(key => {
        this[key] = values[key]
      })
    },
    hide(e) {
      console.log(e)
      this.autoSave()
    },
    hideSortBox() {
      this.show.sortPage = false
      this.autoSave()
    },
    onChapter(level) {
      this.btnLock = true
      this.chapter += level
      console.log(this.chapter)
      setTimeout(() => {
        this.btnLock = false
      }, 3000)
    },
  },
}
</script>

<style lang="stylus" scoped>
.container {
  display flex;
  flex-direction column;
  width: 100vw;
  height: 100vh;
  .content {
    flex: 1;
  }
  .footer {
    border-top: 1px solid #DEDEDE;
    height: 100px;
    display flex;
    align-items center;
  }
}

.title {
  margin-top: 20px;
  font-weight: bold;
  font-size: 44px;
  text-align: center;
}

.btns {
  width: 100%;
  height: 100%;
  display flex;
  justify-content center;
  align-items center;
}
.van-button {
  & + .van-button {
    margin-left: 20px;
  }
}
</style>

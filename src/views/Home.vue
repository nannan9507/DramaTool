<template>
  <div class="home">
    <div class="books">
      <div class="book" @click="urlto(book.url)" v-for="(book, index) in books" :key="index">
        {{ book.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          name: '恶渊百物语',
          url: '/baiwuyu'
        },
      ]
    }
  },
  methods: {
    urlto(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="stylus" scoped>
.home {
  padding: 40px
}

.books {
  display flex
  justify-content space-between;
  flex-wrap wrap
  .book {
    margin-bottom: 20px;
    display flex;
    align-items center;
    justify-content center;
    padding: 10px 15px
    width: 260px
    height: 400px
    background lightblue
  }
}
</style>
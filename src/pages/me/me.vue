<template>
  <div class="container">
    <div class="userinfo">
      <img src="" alt="">
      <p></p>
    </div>
    <YearProgress />
    <button class="btn">添加图书</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userinfo: {}
      }
    },
    created() {
      this.userinfo = wx.getStorageSync('userinfo')
    }
  }
</script>

<style lang="scss">
  .container {
    .btn {
      color: #f00;
    }
  }
</style>

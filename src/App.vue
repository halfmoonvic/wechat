<script>
  import { get, showSuccess } from './util'
  import qcloud from 'wafer2-client-sdk'
  import config from './config'
  export default {
    async created() {
      qcloud.setLoginUrl(config.loginUrl)
      showSuccess('登录成功')
      wx.setStorageSync('key', 'testcont')
      qcloud.login({
        success: function(userInfo) {
          console.log('登录成功', userInfo)
        },
        fail: function(err) {
          console.log('登录失败', err)
        }
      })
    }
  }
</script>

<style lang="scss">
  .btn {
    color: #fff;
    background: #ea5a49;
    margin-bottom: 10px;
    padding-left: 15px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 100%;
    &:active {
      background: #fa5a48;
    }
  }
</style>

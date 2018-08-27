<script>
  import { get } from './util'
  export default {
    async created() {
      let res = await get('/weapp/demo')
      console.log(res)

      console.log('app created and cache logs by setStorageSync')
    }
  }
</script>


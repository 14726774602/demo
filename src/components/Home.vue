<template>
  <div class="container">
      {{msg}}
      <swiper></swiper>
  </div>
</template>


<script>
import swiper from '@/components/module/swiper' 
export default {
  //name: 'Home',
  components:{
    swiper
  },
  data () {
    return {
      msg: '竹轩的小demo'
    }
  }
}
</script>

<style scoped>

</style>

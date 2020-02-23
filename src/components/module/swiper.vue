<template>
  <div class="container">
      {{msg}}
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  //name: 'Home',
  data () {
    return {
      msg: '轮播组件',
      swiperOption: { //更多的参数的配置看swiper4官网介绍：http://www.swiper.com.cn/api/navigation/210.html
          notNextTick: true,
          loop:true,    //是否无限循环
          autoplay: true, //等同于以下设置 设置切换速度
          /*autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },*/  
          direction : 'horizontal',//滑动方向，可设置水平(horizontal)或垂直(vertical)。 
          grabCursor : true,//鼠标覆盖Swiper时指针会变成手掌形状,拖动时指针会变成抓手形状
          setWrapperSize :true,//Swiper使用flexbox布局(display: flex)
          autoHeight: true,//wrapper和container会随着当前slide的高度而发生变化。
          pagination: { //使用分页器导航
            el: '.swiper-pagination',
          },
          paginationClickable :true,
          navigation: { //最新版本的需要这样配置，按钮才有效
            prevEl:'.swiper-button-prev',//上一张
            nextEl:'.swiper-button-next'//下一张
          },
          //scrollbar:'.swiper-scrollbar',//滚动条
          mousewheelControl : true,
          observeParents:true
        }
    }
  }
}
</script>

<style scoped>

</style>

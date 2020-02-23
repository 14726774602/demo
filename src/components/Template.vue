<template>
  <div class="container">
      {{msg}} 
      <button v-on:click="onClickMe">like!</button>
  </div>
</template>

<script>

export default {
  //name: 'Home',
  data () {
    return {
      msg: 'template',
      newChild:'新值'
    }
  },
  props: {
    //接收父组件传递过来的参数方法
    // deta: {
    //   default: function() {
    //     return "";
    //   }
    // }
  },
  methods : {
    //定义函数等
    conShow: function(){
      console.log('1111')
    },
    onClickMe: function(){
      this.$emit('child-say',this.newChild) //向父组件传值
    }
    
  },
  beforeCreate:function(){
    console.log('在实例未完全创建成功触发,data和methods无法使用')
  },
  created: function(){
    console.log('此时data和methods都可以用')
    this.msg = 'newTemplate'
    this.conShow(); 
  },
  mounted:function(){
    console.log('模板挂载到dom之后触发,此时可操作页面中的元素')
    $('.container').css('background','#ff0')
    console.log('修改了页面的css样式')
  },
  beforeUpdate:function(){
    console.log('data数据发生改变的时候触发，界面还没被更新，data数据已经更新完毕')
  },
  updated:function(){
    console.log('改变的data数据从实例渲染到页面之后触发，这里就完成了，这里data和页面值改变同步') 
  },
  beforeDestroy:function(){
    console.log('进入销毁阶段 此时data,methods等都处于可用状态，还没真正销毁')
  },
  destroy:function(){
    console.log('销毁，data,组件都销毁了')
  },
  
  
}
</script>

<style scoped>

</style>

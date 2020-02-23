<template>
  <div id="app">
    <div>{{childWords}}</div>
    <router-view v-on:child-say="listenToMyBoy"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return  {
      childWords :'旧值',
    }
  },
  methods: {
      listenToMyBoy: function (somedata){
        this.childWords = somedata
      }
  }
}
</script>

<style scoped>

</style>

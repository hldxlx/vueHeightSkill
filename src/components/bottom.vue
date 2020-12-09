<template>
  <div class="container">
    <div class="cont"
         v-for="(item,index) in bottomList"
         :class="{selected:index===num}"
         @click="changeTab(index)"
    >
      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottom',
    props:{
      bottomList:{
        type:Array,
        default: function () {
          return ["第0","第1","第2"]
        }
      }
    },
    data () {
      return {
        num:0
      }
    },
    methods:{
      changeTab(index){
          this.num = index;
          this.$emit('getK',index);
      }
    }
  }
</script>
<style>
  .container{
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
  }
  .cont{
    flex:1;
    height: 40px;
    line-height: 40px;
    color: #555;
  }
  .selected{
    color: red;
    background: greenyellow;
  }
</style>

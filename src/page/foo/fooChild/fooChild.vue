<template>
  <div>
    <div>{{msg}}</div>
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
  export default {
    name: 'fooChild',
    data () {
      return {
        tit: 'fooChild'
      }
    },
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    methods:{
      handleClick(){
        this.$emit('msgFunc');
      }
    }
  }
</script>

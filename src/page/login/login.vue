<template>
  <div @click="toLogin">login去登陆</div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {

      }
    },
    methods:{
      toLogin(){
        this.$store.commit('login');
      }
    }
  }
</script>

<template>
  <div>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <component :is="who"></component>
    <bottom @getK="touchSelect"></bottom>
  </div>

</template>

<script>
  import bottom from '../../components/bottom';
  import fooC1 from '../foo/fooChild/fooChild1.vue';
  import fooC2 from '../foo/fooChild/fooChild2.vue';
  export default {
    name: 'home',
    data () {
      return {
        who:'fooC1'
      }
    },
    components:{
      bottom,
      fooC1,
      fooC2
    },
    methods:{
      touchSelect(index){
          console.log(index,'===index');
          index===1?this.who = fooC2:this.who = fooC1;
      }
    }
  }
</script>

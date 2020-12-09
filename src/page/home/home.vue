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
        who:'fooC1',
        title: ''
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
      },
      getMsg(){
        // // 将vue对象this保留到_this中,那么在this发生重指向后,还可以拿到vue实例
        // let _this = this
        // this.$ajax({
        //   method: 'post',
        //   url: 'http://127.0.0.1:5000/loginAction',
        //   params: {
        //     usr: 1,
        //     ps: 2
        //   }
        // }).then(function(res) {
        //   // this代表的是回调then这个方法的调用者(axios插件),也就是发生了this的重指向
        //   // 要更新页面的title变量,title属于vue实例
        //   // res为回调的对象,该对象的data属性就是后台返回的数据
        //   _this.title = res.data
        // }).catch(function(err) {
        //   // console.log(err)
        // })
      }
    },
    created(){
      // 保存这个值
      this.$cookie.set('name','王23')
      //读取这个值
      let name = this.$cookie.get('name')
      console.log(name,'this.$cookie')

      this.getMsg()
    }
  }
</script>

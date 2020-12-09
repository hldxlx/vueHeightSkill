<template>
  <div>
    <div>{{msg}}</div>
    <button @click="handleClick">点我</button>
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="st">插槽66</slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
    <!--把组件的的数据website 绑定到 slot 的一个自定义属性slotDate上-->
    <slot :slotDate="website"></slot>
  </div>
</template>

<script>
  export default {
    name: 'fooChild',
    data () {
      return {
        tit: 'fooChild',
        website:{
          url:'http://www.baidu.com',
          title:'百度1',
          subTitle:'百度一下，你就知道1'
        }
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

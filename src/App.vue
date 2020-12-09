<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import myMixin from './mixin'
  // 当然也可以 全局混入
  // 混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑
  export default {
    mixins: [myMixin],
    data: function () {
      return {
        message: 'goodbye',
        bar: 'def'
      }
    },
    created: function () { // 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
      console.log('组件钩子被调用')
      console.log(this.$data)
      // => { message: "goodbye", foo: "abc", bar: "def" }
      this.conflicting() // => "from self"
    },
    methods: {
      bars: function () {
        console.log('bars')
      },
      conflicting: function () {// 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对
        console.log('from self')
      }
    },
    name: 'App'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

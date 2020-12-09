// https://www.jianshu.com/p/57f9f3698dbc
export default{
  created: function () {
    console.log('混入对象的钩子被调用')
  },
  data: function () {
    return {
      message: 'hello',
      foo: 'abc',
      d: 4,
      e: {
        f: {
          g: 5,
          name: '2'
        }
      }
    }
  },
  watch: {
    e: {
      handler: function (val, oldVal) {
        // console.log(val,'新的')
        // console.log(oldVal,'老的')
        // val和oldVal一样
      },
      deep: true
    },
    'e.f.g': function (val, oldVal) {
      console.log(val,'新的e.f.g')
      console.log(oldVal,'老的e.f.g')
    }
  },
  methods: {
    foos: function () {
      console.log('foos')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  },
  mounted(){
    setTimeout(()=>{
      this.e.f.g = 8
    },0)
    setTimeout(()=>{
      this.e.f.g = 9
    },1000)
  }
}

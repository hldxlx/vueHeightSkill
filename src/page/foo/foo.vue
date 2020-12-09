<template>
  <div>
    <x-header :left-options="{showBack: true}">
      hhhhhh
    </x-header>
    <div>{{tt}}</div>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>

    <el-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>


    <router-link to="/fooChild1">Go to FooChild1</router-link>
    <router-link to="/fooChild2">Go to FooChild2</router-link>
    <foo-child :msg="message"  @msgFunc="func"></foo-child>
    <router-view/>
  </div>
</template>

<script>
  import { XHeader, Tabbar, TabbarItem} from 'vux';
  import fooChild from './fooChild/fooChild.vue'
  import Api from '../../services/api'
  export default {
    components: {
      XHeader,
      Tabbar,
      TabbarItem,
      fooChild
    },
    methods: {
      func(){
        console.log('dddd');
      }
    },
    name: 'foo',
    data () {
      return {
        message: 'father message',
        tt: 'foo',
        value2: true,
        pp:[1,2],
        dataList:[],
        kk:[{ff:'55'}]
      }
    },
    mounted(){
      console.log(this.kk);
      console.log(this.pp);
        Api.getFooData().then(res => {
          this.dataList = res.data;
          console.log(this.dataList,'====this.dataList');
          for(let i=0;i<this.dataList.length;i++){
            console.log(this.dataList[i],'===iii')
          }
        })
    }
  }
</script>

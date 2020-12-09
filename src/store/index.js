/**
 * Created by Administrator on 2019/1/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // token: '3',
    token:'',
    isLogin: false,
    number:1,
    msg: "状态管理器"  //在任何组件访问这个值
                        //this.$store.state.msg
  },
  mutations: {
    // 登录
    login (state, payload) {
        console.log(state, payload);

        Vue.$vux.alert.show({
          title: "去登陆吧"
        });
    },
    // 在任何一个组件里,均可以通过this.$store.commit('setMsg',  '要设置的新值')来修改state中的msg
    setMsg(state, new_msg) {
      state.msg = new_msg
    }
  }
})

export default store;


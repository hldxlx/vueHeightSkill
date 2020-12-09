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
    number:1
  },
  mutations: {
    // 登录
    login (state, payload) {
        console.log(state, payload);

        Vue.$vux.alert.show({
          title: "去登陆吧"
        });
    }
  }
})

export default store;


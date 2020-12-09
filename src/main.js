import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import axios from 'axios'
import { LoadingPlugin } from 'vux'
import { AlertPlugin } from 'vux'
import store from './store/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(Element)


Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(LoadingPlugin);
Vue.use(AlertPlugin);
Vue.use(VueRouter);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


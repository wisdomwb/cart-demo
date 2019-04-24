import Vue from 'vue';
import iView from 'iview'
import router from './router/index';
import 'iview/dist/styles/iview.css';
import App from './App.vue';

import api from './api'

Vue.config.productionTip = false;
 // 导入api接口
Vue.prototype.$api = api // 将api挂载到vue的原型上

Vue.use(iView)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

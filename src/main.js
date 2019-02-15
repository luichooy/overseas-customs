import Vue from 'vue';
import router from './router/';
import store from './store/';
import http from './utils/http';
import App from './App.vue';
import './plugins/element.js';
import i18n from './lang';
import * as filters from '@/filters/';

import 'normalize.css';
import '@/assets/styles/base.scss';
import '@/assets/styles/iconfont.css';

/* 定义全局过滤器 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* 挂载http对象到Vue上 */
Vue.prototype.$http = http;
Vue.prototype.$get = http.get;
Vue.prototype.$post = http.post;
Vue.prototype.$put = http.put;
Vue.prototype.$delete = http.delete;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

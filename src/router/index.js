import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';
import store from '@/store/';
import { setTitle } from '../utils';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 加载挂载在 el-main 组件上的loading
  store.commit('SET_LOADING', true);
  
  next();
});

router.afterEach((to, from) => {
  setTimeout(() => {
    store.commit('SET_LOADING', false);
  }, 300);
  
  // 设置document的title
  // router.app：配置了 router 的 Vue 根实例。
  setTitle(router.app.$t(`title.${to.meta.title}`));
});

export default router;

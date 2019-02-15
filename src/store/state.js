import { localStorage, sessionStorage } from '@/utils/storage';

export default {
  language: (localStorage.getItem('vuex') && localStorage.getItem('vuex').language) || 'zh',
  user: (sessionStorage.getItem('vuex') && sessionStorage.getItem('vuex').user) || {},
  token: (sessionStorage.getItem('vuex') && sessionStorage.getItem('vuex').user) || '',
  loading: false
};

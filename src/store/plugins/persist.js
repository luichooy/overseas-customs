import createPersistedState from 'vuex-persistedstate';

// vuex-persistedstate的用法请查看 https://github.com/robinvdvleuten/vuex-persistedstate

// 将需要localStorage持久化的数据写在 localPersist 中
export const localPersist = createPersistedState({
  paths: ['language']
});

// 将需要sessionStorage持久化的数据写在 sessionPersist 中
export const sessionPersist = createPersistedState({
  storage: window.sessionStorage,
  paths: ['user', 'token']
});

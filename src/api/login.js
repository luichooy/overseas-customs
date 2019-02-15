import http from '@/utils/http';

export function login(username, password) {
  const data = {
    username,
    password
  };
  return http({
    url: '/auth/login',
    method: 'post',
    data
  });
}

export function getUserInfo() {
  return http({
    url: '/user/info',
    method: 'get'
  });
}

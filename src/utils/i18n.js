export function proxyTitle(target, title) {
  return new Proxy(target, {
    get(target, key, receiver) {
      if (target.hasOwnProperty(key)) {
        return target[key];
      } else {
        return title;
      }
    }
  });
}

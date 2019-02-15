function getTime() {
  const now = new Date();
  console.log(now);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate() < 10 ? ('0' + now.getDate()) : now.getDate();
  
  const hours = now.getHours() < 10 ? ('0' + now.getHours()) : now.getHours();
  const minutes = now.getMinutes() < 10 ? ('0' + now.getMinutes()) : now.getMinutes();
  const seconds = now.getSeconds() < 10 ? ('0' + now.getSeconds()) : now.getSeconds();
  
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

module.exports = {
  getTime
};

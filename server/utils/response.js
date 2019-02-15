// const CODE = {
//   success: {
//     status: 1,
//     message: '操作成功'
//   },
//   error: {
//     status: 0,
//     message: '操作失败'
//   }
// };


class Response {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    if (data) {
      this.data = data;
    }
  };
}

class Sussess extends Response {
  constructor(message, data) {
    super();
    this.status = 200;
    this.message = message || 'success';
    if (data) {
      this.data = data;
    }
  };
}

class ServerError extends Response {
  constructor(message) {
    super();
    this.status = 500;
    this.message = message || 'Server Error';
  };
}

class LogicError extends Response {
  constructor(message) {
    super();
    this.status = '600';
    this.message = message || 'Logic Error';
  };
}

module.exports = {
  Sussess,
  ServerError,
  LogicError
};

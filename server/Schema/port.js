const port = {
  area: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  port: {
    type: String,
    require: true
  },
  customsCapacity: {
    type: String,
    require: true
  },
  creator: {
    type: String,
    require: true
  },
  createTime: {
    type: String,
    require: true
  },
  updater: {
    type: String
  },
  updateTime: {
    type: String
  }
};

module.exports = port;

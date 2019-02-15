const company = {
  companyCode: {
    type: String,
    require: true
  },
  companyName: {
    type: String,
    require: true
  },
  companyAbbr: {
    type: String
  },
  telphone: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  language: {
    type: String,
    require: true
  },
  encryptId: {
    type: String
  },
  secretKey: {
    type: String
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
    type: Date
  }
};


module.exports = company;

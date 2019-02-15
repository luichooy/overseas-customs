const mongoose = require('mongoose');
const { companySchema, portSchema } = require('../Schema/index');

const Company = mongoose.model('Company', companySchema);
const Port = mongoose.model('Port', portSchema);

function getModel(modelName) {
  return mongoose.model(modelName);
}

module.exports = getModel;

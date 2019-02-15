const mongoose = require('mongoose');

const company = require('./company');
const port = require('./port');

const Schema = mongoose.Schema;

const companySchema = new Schema(company);
const portSchema = new Schema(port);

module.exports = {
  companySchema,
  portSchema
};

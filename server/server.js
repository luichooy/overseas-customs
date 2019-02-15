const express = require('express');
const bodyParser = require('body-parser');
require('./connection');
const companyRouter = require('./api/company');
const portRouter = require('./api/port');


const app = express();
app.use(bodyParser.json());
app.use('/company', companyRouter);
app.use('/port', portRouter);

app.listen('5412', () => {
  console.log('Server is running at port 5412');
});

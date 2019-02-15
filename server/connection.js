const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/overseas-customs';

mongoose.connect(DB_URL);

mongoose.connection.on('connected', () => {
  console.log('Mongodb connect successfully');
});

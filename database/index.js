const mongoose = require('mongoose');

const config = require('../config/index');

const uri = `mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.hsmy4.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;
const client =  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;
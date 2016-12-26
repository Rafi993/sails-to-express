const sailsmongo = require('sails-mongo'),
  Waterline = require('waterline');
const R = require('ramda')
let app = require('../app.js')

let orm = new Waterline(),
  fs = require('fs'),
  path = require('path');

let config = {
  adapters: {
    mongodb: sailsmongo
  },

  connections: {
    mongodb: {
      adapter: 'mongodb',
      host: 'mongoUrl',
      port: 000,
      user: 'user', //optional
      password: 'password', //optional
      database: 'dbname' //optional
    }
  }
};

fs.readdirSync(__dirname + '/../api/models')
  .map((file) => {
    let model = require(path.join('../api/models', file));
    let mergedModelContents = R.merge(model, {
      identity: file.replace('.js', ''),
      connection: 'mongodb',
    })    
    // app.set('models', mergedModelContents)
    orm.loadCollection(Waterline.Collection.extend(R.merge(model, mergedModelContents)));
  });

module.exports = {
  waterline: orm,
  config: config
};
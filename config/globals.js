module.exports = (app) => {

  if(app.get('boot')){
      R = require('ramda');

      app.set('boot',false);
  }
}
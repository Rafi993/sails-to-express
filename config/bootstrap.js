module.exports = (app) => {

  if (app.get('boot')) {
    const fs = require('fs-extra');

    console.log('Booting the application');
    console.log('Registering Controllers');

    const defaultRoots = Object.assign(
      ...fs.walkSync(__dirname + '/../api/controllers')
      .filter(file => file.includes('Controller.js'))
      .map(file => rename(
          require(file),
          '/' +
          file.split('\\').slice(-1)[0]
          .toLowerCase()
          .replace('controller.js', '/')
        )
      ))
    app.set('controller', defaultRoots)
    console.log(defaultRoots)
  }

}


const rename = (obj, prefix) => {
  if (typeof obj !== 'object' || !obj) {
    return false;
  }

  let keys = Object.keys(obj);
  prefix = prefix || '';

  keys.map((key, index) => {

    obj[prefix + keys[index]] = obj[keys[index]];
    if (typeof obj[key[index]] === 'object')
      rename(obj[prefix + keys[index]], prefix);
    delete obj[keys[index]];
  })

  return obj;
}
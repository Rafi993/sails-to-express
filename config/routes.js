const Index = require('../api/controllers/Index')
      // Test = require('../api/controllers/Test');

let defaultRoutes = '';

module.exports = (app) => {


      defaultRoutes = app.get('controller');
      app.get('/home', Index.home);

      // suffix by Controller to make it post by default

      Object
            .keys(defaultRoutes)
            .map((key) => app.all(key, defaultRoutes[key]))


      app.all('*', (req, res, next) => {
            var err = new Error();
            err.status = 404;
            next(err);
      });

}
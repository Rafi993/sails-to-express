const app = require('express')(),
      connect = require('connect'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      commandLineArgs = require('command-line-args');

const port = 1337;
const optionDefinitions = [
  { name:'port', alias:'p', type:Number, defaultOption: true ,defaultValue : 1337 }
]

const options = commandLineArgs(optionDefinitions)

const policies = require('./config/policies').policies;
const models = require('./config/connection');
app.use(cors(require('./config/cors').getcors()));

// global variables
app.set('port',options.port);
app.set('boot',true);

app.use(bodyParser.json())

require('./config/bootstrap')(app);
require('./config/globals')(app);

models.waterline.initialize(models.config, (err, models) => {
  if(err) throw err;
   app.models = models.collections;
  app.connections = models.connections;
 
  app.use(policies);
  require('./config/routes')(app);
  require('./config/error')(app);
  require('./config/middleware')(app);

  // console.log('controllers list: ', app.get('controller'))
  app.listen(app.get('port'), () => {
    console.log("App is running in", app.get('port'))
  });

})

// module.exports = app 


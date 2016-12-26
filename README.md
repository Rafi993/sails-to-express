## Porting sailsjs Application to Express Js

### To use it

```
git clone https://github.com/Rafi993/sails-to-express.git 
cd sails-to-express
npm install
npm run dev 
```

###Folder structure
```
App 
-api
  -controllers
  -models
  -policies
  -servies
-config
  -bootstrap.js
  -connection.js
  -cors.js
  -error.js
  -globals.js
  -middleware.js
  -policies.js
  -routes.js  
-app.js
-package.json


####NOTE:
The toLowercase() is used so all routes are small case by default



exports.policies = (req, res, next) => {
      
      console.log('policies');

      let path = req._parsedUrl.path.split('/')[1];

       switch(path){
         case 'Home': console.log('policy one'); break;
         case 'Index': console.log('policy two'); break;
         default: console.log('default policy');
       }
        next();
}
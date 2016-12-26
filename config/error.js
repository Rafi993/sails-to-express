module.exports = (app) => {

  // error handling
  app.use((err, req, res, next)=>{
    if(err.status !== 404) {
      return next();
    }
    
    res.status(404);
    res.send(err.message+'404');
  });

  app.use((err,req,res,next)=>{
    if(err.status !== 500) {
      return next();
    }
    res.status(404);
    res.send(err.message+'500');
  });

}
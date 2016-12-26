module.exports = {
  home: (req,res,next)=>{
    res.send('controller is up');
    
    next();
  },
  Index: (req,res,next)=>{
    res.send('controller is up');
    
    next();
  }
}
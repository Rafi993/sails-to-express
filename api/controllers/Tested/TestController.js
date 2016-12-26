const datum = (req, res, next) => {
  console.log('Entered datum controller')
  req.app.models.store.create({
      foo: 'bar'
    })
    .then((records) => {
      console.log('\n\nYay!!!\n\n', records)
      res.send('Controller fructified!!')
    })
    .catch(err => {
      res.serverError(err)
    })
}

module.exports = {
  datum
}
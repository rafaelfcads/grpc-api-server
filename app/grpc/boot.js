const licence =  require('../grpc/licences')
const server = require('./index')

module.exports = server
  .addService(licence.service, licence.options)
  .start()

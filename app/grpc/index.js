const grpc = require('grpc')

const rpcServer = new grpc.Server()

const server = {
  addService: (service, options) => {
    rpcServer.addService(service, { findAll: () => []})
    return server
  },
  start: () => {
    rpcServer.bind('0.0.0.0:4500', grpc.ServerCredentials.createInsecure())
    rpcServer.start()
  }
}

module.exports = server